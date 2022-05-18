const discord = require('discord.js')

module.exports = {
    name:'test',
    description:'test',
    category:'Staff',
    usage: 'test',

    execute(message, args) {

        message.channel.send("e")
    }
}