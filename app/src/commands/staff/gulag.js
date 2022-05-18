
const discord = require('discord.js')

module.exports = {

    name: 'goulag',
    description: 'Envoie quelqu\'un au goulag avec une tâche à réaliser',
    category: 'Staff',
    usage: "goulag <@member | memberID> <Tâche à réaliser>",
    ownerOnly: true,
    alias: ["mechant", "au-coin"],

    execute(message, args) {
        
        args = args.filter(item => item);

        if (!args[0]) {
            const embed = new discord.MessageEmbed()
            .setDescription("Vous devez donner l'id ou mentionner l'utilisateur à goulaguer !\n*(oui c'est un verbe)*")
            .setColor("FF0000")
            return message.channel.send(embed)
        }
        if (!args[1]) {
            const embed = new discord.MessageEmbed()
            .setDescription("Vous devez donner une tâche à executer !")
            .setColor("FF0000")
            return message.channel.send(embed)
        }
        
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) {
            const embed = new discord.MessageEmbed()
            .setDescription("Membre introuvable.")
            .setColor("FF0000")
            return message.channel.send(embed)
        }

        const goulagRole = message.guild.roles.cache.get(message.client.config.roles.goulagRole) 
        let todo = args
        todo.shift()
        todo = todo.join(" ")

        member.roles.set([goulagRole])
        let embed = new discord.MessageEmbed()
        .setAuthor("Tu as été GOULAGED !")
        .setDescription(`Tu as été jeté au goulag par ${message.author} .Donc à partir de maintenant, tu aura seulement accès au salon <#825965469784866819>.`)
        .addField("Comment en sortir ?", `Pour sortir de cette situation *assez peu convenable*, ${message.author} te laisse une chance : tu devras \`${todo}\`\nTu devra donc accomplir cette tâche, et si ${message.author} en est satisfait, tu pourras sortir du goulag.`)
        member.send(embed).then(msg => {
            msg.react(message.guild.emojis.cache.get('729763327491702887'))
        })

        embed = new discord.MessageEmbed()
        .setDescription(`${member} a bien été goulagué *(oui c'est un verbe)*`)
        .setColor("00ff00")
        message.channel.send(embed).then(msg => {
            msg.react(message.guild.emojis.cache.get('729763327491702887'))
        })
    }

}