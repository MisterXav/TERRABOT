module.exports =  {
    name: 'shuffle',
    description: 'd',
    category: 'music',
    usage: 'u',
    aliases: ["a"],

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique se joue actuellement ${message.author}... Réessayer ? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Aucune musique dans la file après celle ci ${message.author}... Réessayer ? ❌`);

        await queue.shuffle();

        return message.channel.send(`Mélange de la file d'attente **${queue.tracks.length}** musique(s) ! ✅`);
    },
};