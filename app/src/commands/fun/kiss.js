const Discord = require('discord.js');
const https = require("https");

module.exports = {

name: 'kiss',
description: 'faire un bizou a bizou',
category: 'fun',
usage: 'hug <@user>',
aliases: ['bizou'],

    execute(message, args){
        if(message.author.bot) return;
        if(message.channel.type == "dm") return;
        if(args.length == 0) return;

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) {
            const embed = new Discord.MessageEmbed()
            .setDescription("Membre introuvable.")
            .setColor("FF0000")
            return message.channel.send(embed)
        }

        let data = "";
        https.get("https://g.tenor.com/v1/search?q=anime+kiss&key=HZF76QVKHIBA&limit=10", res =>{
            res.on("data", d=>{
                data += d
            })
            res.on("end", done)
        })
        function done(){
            var kissGIF = JSON.parse(data)
            var randomGIF = getRandomInt(10)
            var url = kissGIF.results[randomGIF].media[0].gif.url

            const embed = new Discord.MessageEmbed()
            .setTitle(message.author.username + " fait un gros bizou à " + message.mentions.users.first().username)
            .setImage(url)
            .setColor("6eeef0")
            message.channel.send(embed)
        }
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}