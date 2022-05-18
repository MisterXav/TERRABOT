const Discord = require("discord.js");
const https = require("https");


module.exports = {
    name: 'dog',
    descrption: 'Envoie une photo de chien aléatoire',
    category: 'Fun',
    usage: 'dog',
    aliases: ['chien'],

    execute(message, args) {
        if(message.author.bot) return;
        if(message.channel.type === "dm") return;

        let data = ""
        https.get(`https://dog.ceo/api/breeds/image/random`, res => {
            res.on('data', d=> {
                data += d
            })
            res.on("end", done)
        })
        function done() {
            let dog = JSON.parse(data)
            const embed = new Discord.MessageEmbed()
            .setTitle("🐶 Wouf wouf !")
            .setImage(dog.message)
            .setColor("6eeef0")
            message.channel.send(embed)
        }
    
    }

}