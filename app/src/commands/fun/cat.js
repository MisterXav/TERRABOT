const Discord = require("discord.js");
const https = require("https");


module.exports = {
    name: 'cat',
    description: 'Envoie une photo de chat aléatoire',
    category: 'Fun',
    usage: 'cat',
    aliases: ['chat'],

    execute(message, args) {
        if(message.author.bot) return;
        if(message.channel.type === "dm") return;

        let data = ""
        https.get(`https://api.thecatapi.com/v1/images/search`, res => {
            res.on('data', d=> {
                data += d
            })
            res.on("end", done)
        })
        function done() {
            let cat = JSON.parse(data)
            const embed = new Discord.MessageEmbed()
            .setTitle("🐱 Miaou !")
            .setImage(cat[0].url)
            .setColor("6eeef0")
            message.channel.send(embed)
        }
    
    }

}