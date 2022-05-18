const Discord = require("discord.js");
const https = require("http");


module.exports = {
    name: 'space',
    descrption: 'Donne la position de la station spaciale internationnale',
    category: 'Fun',
    usage: 'space',
    aliases: ['iss', "espace"],

    execute(message, args) {
        if(message.author.bot) return;
        if(message.channel.type === "dm") return;

        message.channel.startTyping()
        let data = ""
        https.get(`http://api.open-notify.org/iss-now.json`, res => {
            res.on('data', d=> {
                data += d
            })
            res.on("end", done)
        })

        function done() {
            let issInfo = JSON.parse(data)

            data = ""
            https.get(`http://api.geonames.org/countryCode?lat=${issInfo.iss_position.latitude}&lng=${issInfo.iss_position.longitude}&username=Leo21&type=JSON&lang=fr`, res => {
                res.on('data', d=> {
                    data += d
                })
                res.on("end", redone)
            })

            function redone() {
                let country = JSON.parse(data)
                
                const embed = new Discord.MessageEmbed()
                .setTitle("La position de l'ISS est :").setDescription(`Pays : ${country.countryName} (${country.countryCode})\nLatitude : ${issInfo.iss_position.latitude}\nLongitude : ${issInfo.iss_position.longitude}`)
                .setColor("071836").setThumbnail(`https://maps.googleapis.com/maps/api/staticmap?markers=${issInfo.iss_position.latitude},${issInfo.iss_position.longitude}&zoom=2&size=600x500&key=AIzaSyDGUH9Ko0_oQ7tS8ZOBoSDXYfy0txHFPwo`)
                if (country.countryName) {
                    embed.setDescription(`Pays : ${country.countryName} (${country.countryCode})\nLatitude : ${issInfo.iss_position.latitude}\nLongitude : ${issInfo.iss_position.longitude}`)
                } else {
                    embed.setDescription(`Au dessus de la mer ou de l'océan\nLatitude : ${issInfo.iss_position.latitude}\nLongitude : ${issInfo.iss_position.longitude}`)
                }
                message.channel.send(embed).then(() => {message.channel.stopTyping()})
            }

        }
    }

}