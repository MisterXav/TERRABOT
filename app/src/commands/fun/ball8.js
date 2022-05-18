
const discord = require('discord.js')

module.exports = {

    name: 'ball8',
    description: 'Pose une question et je te réponderais !',
    category: 'Fun',
    usage: 'ball8 <question>',
    aliases: ['8ball', "8b", "b8"],

    execute(message, args) {
        const answers = [
            "Essaye plus tard ",
            "Essaye encore ",
            "Pas d'avis ",
            "C'est ton destin ",
            "Le sort en est jeté ",
            "Une chance sur deux ",
            "Repose ta question ",
            "D'après moi oui",
            "C'est certain",
            "Oui absolument",
            "Tu peux compter dessus",
            "Sans aucun doute",
            "Très probable",
            "Oui",
            "C'est bien parti",
            "C'est non",
            "Peu probable",
            "Faut pas rêver",
            "N'y compte pas",
            "Impossible",
            "Nique ta darone stp",
            "Je ne sais pas, mais ce que je sais, c'est que Xav est un dieu au lit",
            "Balek, t moch",
            ":)",
        ];

        if (!args[0]) {
            const embed = new discord.MessageEmbed()
            .setDescription("Tu doit poser une question !")
            .setColor("FF0000")
            return message.channel.send(embed)
        }

        const answer = answers[Math.floor(Math.random() * answers.length)];
        const embed = new discord.MessageEmbed()
        .setDescription(`🎱 ${answer}`)
        .setColor("3c3f45")
        return message.channel.send(embed)
    }

}
