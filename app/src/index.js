const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');
const discord = require('discord.js')
const fs = require('fs');
const yaml = require('js-yaml');
const fetch = require("node-fetch")
require("dotenv").config({ path: __dirname + `/../res/.env` });


let config = yaml.load(fs.readFileSync(__dirname + `/../res/config.yml`, 'utf8'));

//TERRA MUSIC
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.DIRECT_MESSAGES,
    ],
    partials: ["CHANNEL"],
    disableMentions: 'everyone'
});
client.commands = new discord.Collection();
client.config = config;
client.prefix = client.config.prefix;
client.prefix = config.prefix
client.statusCooldown = Date.now()

console.log(config)
client.player = new Player(client, config.opt.discordPlayer);

//require('./src/music/loader');
//require('./src/music/events');


// Event handler
const eventFiles = fs.readdirSync(__dirname + `/events`).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(__dirname + `/events/${file}`);
    let eventName = event.name
    client.on(eventName, event.execute.bind(null, client));
}


// Command handler
const commandFolders = fs.readdirSync(__dirname + '/commands');
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(__dirname + `/commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(__dirname + `/commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.on('messageCreate', async message => {

    if (!message.content.startsWith(client.prefix) || message.author.bot) return;

    const args = message.content.slice(client.prefix.length).trim().split(" ");
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
    if (command.ownerOnly) if (!client.config.owners.includes(message.author.id)) return;

    await command.execute(message, args);

})

client.ws.on("INTERACTION_CREATE", async (interaction) => {
    if (interaction.type == 3) {
        if (interaction.data.custom_id === "coucou") {

            let body = {
                "type": 4,
                "data": {
                    "content": `Félicitations <@${interaction.member.user.id}> tu as appuyé sur le boutton !`
                }
            }
            let res = await fetch(`https://discord.com/api/v9/interactions/${interaction.id}/${interaction.token}/callback`, {
                method: 'post',
                body:    JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json', 
                    "Authorization": `Bot ${process.env.DISCORD_TOKEN}`, 
                }
            })
        }
    }
})

client.login(process.env.DISCORD_TOKEN);

