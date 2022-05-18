
const discord = require('discord.js')
const fs = require("fs")

const starboard = require(__dirname + "/../../res/starboard.json")

module.exports = {

    name: "messageReactionAdd",

    execute(client, messageReaction, user) {

        if (user.bot) return;
        if (messageReaction.message.channel.id === client.config.starboard.channel) return;
        if (messageReaction.count < client.config.starboard.reactCount) return;

        if (starboard.messages.includes(messageReaction.message.id)) return;
        
        if (messageReaction.emoji.name === "⭐") {

            const channel = client.channels.cache.get(client.config.starboard.channel)

            const embed = new discord.MessageEmbed()
			.setAuthor(`Un message de ${messageReaction.message.author.username} a atteint les ${client.config.starboard.reactCount}⭐ !`)
			.setDescription(`${messageReaction.message.content}\n\n[Lien du message](${messageReaction.message.url})`)
            .setThumbnail(messageReaction.message.author.avatarURL({"dynamic": true}))
			.setColor(messageReaction.message.member.displayHexColor)

            
            channel.send(embed).then(() => {
                if (messageReaction.message.attachments) {
                    messageReaction.message.attachments.forEach(async attach => {
                        await channel.send(attach) 
                    })
                }
            })

            starboard.messages.push(messageReaction.message.id)
            fs.writeFileSync(__dirname + "/../../res/starboard.json", JSON.stringify(starboard, null, 2))

        }
    }
}