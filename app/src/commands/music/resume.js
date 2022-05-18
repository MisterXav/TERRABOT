module.exports =  {
    name: 'resume',
    description: 'd',
    category: 'music',
    usage: 'u',
    aliases: ["a"],

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Aucune musique se joue actuellement ${message.author}... Réessayer ? ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `La musique ${queue.current.title} est maintenant en cours de lecture ✅` : `La musique est déjà en cours de lecture ${message.author} ✅`);
    },
};