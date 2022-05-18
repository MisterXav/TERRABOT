const discord = require('discord.js')

module.exports = {
    name: 'nomedia',
    description: 'pls',
    category: 'staff',
    usage: 'nomedia',

execute(message, arg) {

    message.channel.send( { files: [__dirname + "/../../res/img/stop-talking-discord.gif"]})
}

};