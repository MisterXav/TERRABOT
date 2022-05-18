const fetch = require("node-fetch")


module.exports = {
    name: "coucou",
    category: "fun",

    async execute(message, args) {
        const url = `https://discord.com/api/v9/channels/${message.channel.id}/messages`

        let data = {
            "content": "Le contenu du message",
            "embed": {},
            "components": [
                {
                    // Action row, max 5 boutons
                    "type": 1,
                    "components": [
                        {
                            "type": 2,
                            "label": "Le nom du bouton",
                            "style": 3,
                            "custom_id": "coucou"
                        },
                    ]
                },
            ]
        }

        let res = await fetch(url, {
            method: 'post',
            body:    JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json', 
                "Authorization": `Bot ${process.env.DISCORD_TOKEN}`, 
            }
        })
    }
}