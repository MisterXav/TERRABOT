
const discord = require('discord.js')

module.exports = {

    name: 'fban',
    description: 'Ban quelq\'un pour de faux',
    category: 'Fun',
    usage: 'fban <@member | memberID>',
    aliases: ['fakeban', "tesbanmaisenafaitnonlol"],

    execute(message, args) {

        if (!args[0]) {
            const embed = new discord.MessageEmbed()
            .setDescription("Vous devez donner l'id ou mentionner l'utilisateur à ban !\n")
            .setColor("FF0000")
            message.channel.send(embed)
            return message.delete();
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) {
            const embed = new discord.MessageEmbed()
            .setDescription("Membre introuvable.")
            .setColor("FF0000")
            message.channel.send(embed)
            return message.delete();
        }

        const embed = new discord.MessageEmbed()
        .setDescription(`${member} a bien été banni(e) !`)
        .setColor("00FF00")
        message.channel.send(embed)
        return message.delete();

    }


}