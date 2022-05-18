
const discord = require('discord.js')

module.exports = {

    name: 'rps',
    description: "Joue à pierre feuille ciseaux avec moi ! *Je ne triche pas bien sûr, je ne vois PAS DU TOUT de quoi tu parles.*",
    category: 'Fun',
    usage: 'rps <pierre | feuille | ciseaux>',
    aliases: ['ppc', "rockpaperscissors", "pierrefeuilleciseaux"],

    execute(message, args) {

        if (!args[0]) {
            const embed = new discord.MessageEmbed()
            .setDescription("Tu doit indiquer ce que tu joues ! *(pierre, feuille ou ciseaux)*")
            .setColor("FF0000")
            return message.channel.send(embed)
        }

        const scissors = ["scissor", "scissors", "ciseau", "ciseaux"]
        const feuille = ["feuille", "paper", "feuilles", "papers", "papiers", "papier"]
        const pierre = ["pierre", "pierres", "rock", "rocks"]
        if (scissors.includes(args[0])) message.channel.send("Pierre !")
        else if (feuille.includes(args[0])) message.channel.send("Ciseaux !")
        else if (pierre.includes(args[0])) message.channel.send("Papier !")
        else {
            const embed = new discord.MessageEmbed()
            .setDescription("Argument invalide !")
            .setColor("FF0000")
            return message.channel.send(embed)
        }
        return message.channel.send("Haha j'ai gagné ! Tu aura peut-être plus de chance la prochaine fois...")

    }

}
