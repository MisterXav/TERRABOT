const discord = require('discord.js')

module.exports = {

    name: 'spam',
    description: 'Spam mention 50 fois quelqu\'un',
    category: "Staff",
    usage: "spam <@member | memberID> [message]",
    ownerOnly: true,

    execute(message, args) {

        args = args.filter(item => item);

        if (!args[0]) {
            const embed = new discord.MessageEmbed()
            .setDescription("Vous devez donner l'id ou mentionner l'utilisateur à spammer !")
            .setColor("FF0000")
            return message.channel.send(embed)
        }
        
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) {
            const embed = new discord.MessageEmbed()
            .setDescription("Membre introuvable.")
            .setColor("FF0000")
            return message.channel.send(embed)
        }
        const spamChannel = message.client.channels.cache.get(message.client.config.channels.spamChannel)

        args.shift()

        for (var i = 0; i < 50; i++) {
            spamChannel.send(`${member} tu te fais spam mention !\nRaison : \`${(args[0]) ? args.join(" ") : "Aucune"}\``) // de ? Bah tu les spam, c pa janti
        }

    }

}