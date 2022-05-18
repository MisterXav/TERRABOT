const discord = require('discord.js')

module.exports = {

    name: 'soireepyjama',
    description: 'lancer une soirée pyjama',
    category: 'Staff',
    usage: 'soiree pyjama',
    aliases: ["spj"],

    execute(message, args) {

        if(!["692030845384523833", "401718888561377280"].includes(message.author.id)) return message.reply("Vous n'avez pas la permission de faire cette commande !");

        if (!args[0]) {
            const embed = new discord.MessageEmbed()
            .setDescription("Vous devez entrer l'heure de la soirée'.")
            .setColor("FF0000")
            message.channel.send(embed)
        }

        const radioChannel = message.client.channels.cache.get(message.client.config.channels.radioChannel)

        let embed = new discord.MessageEmbed()
        .setAuthor("Les filles ! Une soirée pyjama commence !")
        .setDescription(`Rendez-vous dès **${args.join(" ")}** dans le cul des filles (by Sunrise) ! :unicorn:`)
        .setColor("FF0000")
        .setFooter("Go parler dans le dos des mecs :p")
        radioChannel.send(embed)
        
        message.delete() // comme ça  #ReadTheDocs :)
    
    }
}