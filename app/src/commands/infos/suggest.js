const discord = require('discord.js')

module.exports =  {
    name: 'suggest',
    description: 'Envoyer une suggestion pour le serveur ou le bot.',
    category: 'Infos',
    usage: 'suggest <texte>',
    aliases: ["sug"],

    execute(message, args) {

        if (!args[0]) {
            const embed = new discord.MessageEmbed()
            .setDescription("Indique ta suggestion après la commande")
            .setColor("FF0000")
            message.channel.send(embed)
            return;
        }

        const suggestChannel = message.client.channels.cache.get(message.client.config.channels.suggestChannel)

        let embed = new discord.MessageEmbed()
        .setAuthor(`Nouvelle suggestion de ${message.author.username} `)
        .setDescription(`${args.join(" ")}`)
        .setThumbnail(message.author.avatarURL({"dynamic": true}))
        .setColor("6eeef0")
        .setFooter("Vote avec les réactions")
        suggestChannel.send(embed).then(msg => {
            msg.react('✅')
            msg.react('❌')
        })
        message.delete() // comme ça  #ReadTheDocs :)
    

    }
};