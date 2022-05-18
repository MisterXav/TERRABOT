const discord = require('discord.js')

module.exports = {
    name: "guildMemberAdd",
    
    execute(client, member) {
        const embed = new discord.MessageEmbed()
        .setAuthor("Nouveau Gamer en approche !", "https://cdn.discordapp.com/emojis/826938682316554251.png?v=1")
        .setDescription(`Hello ${member} ! \n Bienvenue sur TERRA, la commu Gaming, Hardware & Tech !\nPasse un bon moment en notre compagnie :wink:`)
        .setFooter(`TERRA Since 2018`)
        .setThumbnail("https://cdn.discordapp.com/attachments/668907915310268417/843096393756180530/logo_TERRA_annime.gif")
        .setColor("6eeef0")

        client.channels.cache.get(client.config.channels.welcomeChannel).send(embed)
    }
}