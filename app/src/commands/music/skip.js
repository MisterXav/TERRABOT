module.exports =  {
    name: 'skip',
    description: 'd',
    category: 'music',
    usage: 'u',
    aliases: ["a"],

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique se joue actuellement ${message.author}... Réessayer ? ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `Musique actuel ${queue.current.title} sautée ✅` : `Quelque chose ne fonctionne pas ${message.author}... Réessayer ? ❌`);
    },
};