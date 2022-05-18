const discord = require('discord.js')

module.exports = {

    name: 'radio',
    description: 'lancer une radio',
    category: 'Staff',
    usage: 'radio <sujet>',

    execute(message, args) {

        if(!["563824894865834007", "401718888561377280"].includes(message.author.id)) return message.reply("Vous n'avez pas la permission de faire cette commande !");

        if (!args[0]) {
            const embed = new discord.MessageEmbed()
            .setDescription("Vous devez entrer le thème de la radio.")
            .setColor("FF0000")
            message.channel.send(embed)
        }

        const radioChannel = message.client.channels.cache.get(message.client.config.channels.radioChannel)

        let embed = new discord.MessageEmbed()
        .setAuthor("Une nouvelle radio libre débute !")
        .setDescription(`Rendez-vous dès 21h15 dans le salon 『📻』Radio pour participer a une radio libre ! \n Le thème de ce soir est **${args.join(" ")}** \n\n On vous y attend nombreux ! :yum: `)
        .setColor("FF0000")
        .setFooter("Clique sur la réaction pour participer")
        radioChannel.send(embed).then(msg => {
            msg.react('📻')
        })
        message.delete() // comme ça  #ReadTheDocs :)
    
    }
}