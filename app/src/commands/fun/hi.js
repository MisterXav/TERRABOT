const discord = require('discord.js')

module.exports = {
    name: 'hi',
    description: 'salut',
    category: 'fun',
    usage: 'hi',

execute(message, arg) {

    message.channel.send('salut')
}

};