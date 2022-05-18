const discord = require('discord.js')

module.exports =  {
    name: 'say',
    description: 'Fais dire le bot ce que vous voulez !',
    category: 'Fun',
    usage: 'say <texte>',
    aliases: ["repete"],

    execute(message, args) {

        if (!args[0]) {
            const embed = new discord.MessageEmbed()
            .setDescription("Vous devez entrer du texte que je doit répéter.")
            .setColor("FF0000")
            message.channel.send(embed)
        }

        message.channel.send(args.join(" "))
        message.delete() // comme ça  #ReadTheDocs :)

    }
};