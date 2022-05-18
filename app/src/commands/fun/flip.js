const Discord = require("discord.js");
const got = require('got');

module.exports =  {
    name: 'flip',
    description: 'flip',
    category: 'Fun',
    usage: 'flip',
    aliases: ["flip"],
 
    execute(message, args) {
//exports.run = (client, message, args) => {
    message.delete()

    got('https://www.reddit.com/r/jokes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        var title = content[0].data.children[0].data.title;
        var joke = content[0].data.children[0].data.selftext;
        wholeJoke = new Discord.MessageEmbed()
            .setTitle(`😹 **${title}**`)
            .setDescription(joke)
            .setColor("FF0000")
            .setFooter("f")
        message.channel.send(wholeJoke)
    }).catch(console.error);
    
}
}

// © Zeltux Discord Bot | Do Not Copy