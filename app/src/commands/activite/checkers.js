const fetch = require("node-fetch")


module.exports = {
    name: "dame",
    description: "jouer aux dames",
    category: "activite",
    aliases: ["ck"],

    async execute(message, args) {
        
        if(message.member.voice.channel) {
            fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, { 
                method: "POST",
                body: JSON.stringify({ max_age: 86400, max_uses: 0, target_application_id: "832013003968348200", target_type: 2, temporary: false, validate: null }),
                headers: { "Authorization": `Bot ${process.env.DISCORD_TOKEN}`, "Content-Type": "application/json" } })
            .then(res => res.json()).then(invite =>{
                if(invite.code) return message.channel.send(`https://discord.com/invite/${invite.code}`)
            })
        } else {
            message.channel.send("Vous devez être dans un vocal pour ça")
        }
    }
}