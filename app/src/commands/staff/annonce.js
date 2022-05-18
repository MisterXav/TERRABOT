const discord =  require('discord.js')

module.exports = {

    name: 'annonce',
    description: 'Faire une annonce dans le panneau',
    category: 'Staff',
    usage: 'annonce <sujet>',

    execute(message, args) {

        if(!["563824894865834007", "401718888561377280", "519189211484782595"].includes(message.author.id)) return message.reply("Vous n'avez pas la permission de faire cette commande !");

        if (!args[0]) {
            const embed = new discord.MessageEmbed()
            .setDescription("Vous devez entrer votre annonce.")
            .setColor("FF0000")
            message.channel.send(embed)
        }

        const radioChannel = message.client.channels.cache.get(message.client.config.channels.radioChannel)

        let embed = new discord.MessageEmbed()
        .setAuthor("Annonce")
        .setDescription(`${args.join(" ")}`)
        .setColor("FF0000")
        .setFooter("The Lounge")
        radioChannel.send(embed).then(msg => {
            msg.react('👌')
        })
        message.delete() // comme ça  #ReadTheDocs :)
    
    }
}