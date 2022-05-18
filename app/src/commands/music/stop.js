module.exports =  {
    name: 'stop',
    description: 'd',
    category: 'music',
    usage: 'u',
    aliases: ["a"],

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique se joue actuellement ${message.author}... Réessayez ? ❌`);

        queue.destroy();

        message.channel.send(`Musique stoppée sur le serveur actuel, bye mes petits Lou ;) ✅`);
    },
};