
const discord = require('discord.js')

module.exports = {

    name: 'help',
    description: 'Page d\'aide du bot !',
    category: 'Infos',
    usage: 'help [commande]',
    aliases: ["aide", "h"],

    execute(message, args) {

        if (message.author.bot) return;
        
        if (!args[0]) {
            const embed = new discord.MessageEmbed()
            .setAuthor("Aide TERRA.EXE - Page d'acceuil")
            .setTitle("📜 Liste des commandes :")
            .setColor("6eeef0")
            .setFooter(`❓ Faites ${message.client.prefix}help <commande> pour plus d'infos sur une commande !`)
            .setThumbnail("https://cdn.discordapp.com/attachments/668907915310268417/843096393756180530/logo_TERRA_annime.gif")
            if (message.client.commands.find(commande => commande.category.toLowerCase() === "fun")) {
                embed.addField("⇒ Fun :", "> `" + message.client.commands.filter(item => item.category.toLowerCase() === "fun").map(command => command.name).join("`・`") + "`")
            }
            if (message.client.commands.find(commande => commande.category.toLowerCase() === "infos")) {
                embed.addField("⇒ Infos :", "> `" + message.client.commands.filter(item => item.category.toLowerCase() === "infos").map(command => command.name).join("`・`") + "`")
            }
            if (message.client.commands.find(commande => commande.category.toLowerCase() === "activite")) {
                embed.addField("⇒ Activités :", "> `" + message.client.commands.filter(item => item.category.toLowerCase() === "activite").map(command => command.name).join("`・`") + "`")
            }
            if (message.client.commands.find(commande => commande.category.toLowerCase() === "music")) {
                embed.addField("⇒ Musique :", "> `" + message.client.commands.filter(item => item.category.toLowerCase() === "music").map(command => command.name).join("`・`") + "`")
            }


            return message.channel.send(embed)
        }

        const command = message.client.commands.find(command => command.name === args[0].toLowerCase()) || message.client.commands.find(command => command.aliases && command.aliases.includes(args[0].toLowerCase()))
        if (command) {
            const embed = new discord.MessageEmbed()
            .setAuthor(`Aide Luxuary - ${command.name}`)
            .setTitle(`📜 Commande ${command.name}`)
            .setDescription("☛ *Rappel :* `<arg>` *veut dire que cet argument est obligatoire,* `[arg]` *un argument facultatif et* `choix1 | choix2` *un choix entre deux options.*")
            .setFooter(`❓ Faites ${message.client.prefix}help pour avoir la liste des commandes !`)
            .setColor("ddaf1c")
            .setThumbnail("https://cdn.discordapp.com/avatars/720710619627651173/7b1bea072f1b2fab2fd1f6373ac1050d.png?size=4096")
            if (command.description) {
                if (command.ownerOnly) {
                    embed.addField("⇒ Description :", "> ➞ `" + command.description + "`\n\n*☛ Note : cette commande ne peut être exécutée que par les utilisateurs autorisés.*", true)
                } else {
                    embed.addField("⇒ Description :", "> ➞ `" + command.description + "`", true)
                }
            }
            if (command.category) {
                embed.addField("⇒ Categorie :", "> ➞ `" + command.category + "`", true)
            }
            if (command.usage) {
                embed.addField("⇒ Usage :", "> ➞ `" + command.usage + "`")
            }
            if (command.aliases) {
                embed.addField("⇒ Alias :", "> ➞ `" + command.aliases.join("`\n> ➞ `") + "`")
            }
            return message.channel.send(embed)

        } else {
            const embed = new discord.MessageEmbed()
            .setDescription("Commande introuvable.")
            .setColor("FF0000")
            return message.channel.send(embed)
        }

    }

}
