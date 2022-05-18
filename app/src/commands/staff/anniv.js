const discord = require('discord.js')

module.exports = {

    name: 'anniv',
    description: 'Annoncer un anniversaire',
    category: 'Staff',
    usage: 'anniv <user>',

    execute(message, args) {

        if(!message.client.config.annivUsers.includes(message.author.id)) return message.reply("Vous n'avez pas la permission de faire cette commande !");

        if (!args[0]) {
            const embed = new discord.MessageEmbed()
            .setDescription("Vous devez mentionner la personne.")
            .setColor("FF0000")
            message.channel.send(embed)
        }

        const member = message.mentions.users.first()
        if (!member) {
            const embed = new discord.MessageEmbed()
            .setDescription("Membre introuvable.")
            .setColor("FF0000")
            message.channel.send(embed)
        }

        const radioChannel = message.client.channels.cache.get(message.client.config.channels.radioChannel)

        let embed = new discord.MessageEmbed()
        .setAuthor("Nous fêtons un nouvel anniversaire !")
        .setDescription(`Nous fêtons l'anniversaire de ${member} ! Allez lui envoyer pleins d'amour sur lui pour qu'il passe la meilleure journée possible :heart: `)
        .setColor("FF0000")
        .setThumbnail(member.displayAvatarURL({format: "webp", dynamic: true}))
        .setFooter("HAPPY BIRTHDAY")
        .setTimestamp(Date.now())

        radioChannel.send(embed).then(async msg => {
            await msg.react('🎉')
            await message.delete()
        })
    
    }
}