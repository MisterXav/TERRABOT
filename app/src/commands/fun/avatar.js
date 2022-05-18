const discord = require('discord.js')

module.exports =  {
    name: 'avatar',
    description: 'Obtient l\'avatar d\'un membre',
    category: 'Infos',
    usage: 'avatar <@user>',
    aliases: ["pp"],

    execute(message, args) {

        let member = message.mentions.users.first()

        if (!member) {
          member = message.author
        }
        
        let embed = new discord.MessageEmbed()
        .setAuthor(`Voilà l'avatar de ${member.username}`)
        .setImage(member.displayAvatarURL({format: "webp", dynamic: true}))
        .setColor("6eeef0")
        .setFooter("l!avatar @usuer")

        message.channel.send(embed).then(msg => {
            message.delete()
          })

    }
};