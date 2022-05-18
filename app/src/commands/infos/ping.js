
const discord = require('discord.js')

module.exports = {
	name: 'ping',
	description: 'Commande de test',
	category: "Infos",
	usage: "ping",
	aliases: ["p"],

	execute(message, args) {
		const startTime = Date.now()
		message.channel.send(embed = new discord.MessageEmbed().setTitle("🏓 Pong !").setColor("c99540")).then(msg => {
			const embed = new discord.MessageEmbed()
			.setTitle("🏓 Pong !")
			.setDescription(`> Latence du bot : \`${(Date.now() - startTime) / 10}ms\`.\n> Latence de l'API : \`${Math.round(message.client.ws.ping)}ms\`.`)
			.setColor("6eeef0")
			msg.edit(embed);
		})
	},
};