module.exports =  {
    name: 'progress',
    description: 'd',
    category: 'music',
    usage: 'u',
    aliases: ["a"],

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique se joue actuellement ${message.author}... Réessayer ? ❌`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`C'est un live, aucune informations disponible 🎧`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};