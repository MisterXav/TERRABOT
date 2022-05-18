const fakerator = require("fakerator")("fr-FR");
const discord = require('discord.js')


module.exports = {

    name: 'hack',
    description: 'Hack le compte de quelqu\'un !',
    category: 'fun',
    usage: 'hack <@member | memberID>',

    execute(message, args) {

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        if(message.author.bot) return;
        if(message.channel.type === "dm") return;

        args = args.filter(item => item);

        if (!args[0]) {
            const embed = new discord.MessageEmbed()
            .setDescription("Tu doit mentionner un utilisateur à hacker !")
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

        const user = fakerator.entity.user()

        const hackMessages = [
            `Loging to discord as ${member.displayName}`,
            "Bypassing 2fa",
            `Omg 1 + 1 = 2 !`,
            `Breaking into discord's database`,
            `Found ${member.displayName} token`,
            `npm install trojanWin64`,
            `trying to delete discord.account`, 
            `trojan.core.utils.find((${member.id}) => {token})`,
            `Very complicated math calculations...`,
            `Ip address found !`,
            "Selling all data to reptilians...",
            "Reporting account for breaking discord ToS"
        ]
        
        message.channel.startTyping()
        message.channel.send(`<:cmd:727945429089779864> \`Piratage du compte de ${member.displayName}...\``).then((msg) => {
            for (i=0; i<hackMessages.length; i++) {
                msg.edit("<:cmd:727945429089779864> \`" + hackMessages[i] + "\`")
                sleep(1000)
            }
            
            msg.edit(`<a:Verif:700744244553318530> ${member.displayName} a bien été hack\n\`\`\`\nNom, prénom : ${user.lastName} ${user.firstName}\nEmail : ${user.email}\nPassword : ${user.password}\nIp : ${user.ip}\nAdresse : ${user.address.street}, ${user.address.city}\`\`\``).then(() => {
                message.channel.stopTyping()
            })
        }).catch(console.error);
    
    }

}
