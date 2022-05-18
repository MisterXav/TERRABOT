module.exports =  {
    name: 'pause',
    description: 'd',
    category: 'music',
    usage: 'u',
    aliases: ["a"],

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Aucune musique se joue actuellement ${message.author}... Réessayer ? ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Musique actuelle ${queue.current.title} en pause ✅` : `La musique est déjà en pause ${message.author}`);
    },
};