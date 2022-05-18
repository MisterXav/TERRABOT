module.exports =  {
    name: 'clear',
    description: 'd',
    category: 'music',
    usage: 'u',
    aliases: ["a"],

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique joué actuellement ${message.author}... Réessayer ? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Il n'y a aucune musique dans la file ${message.author}... Réessayer ? ❌`);

        await queue.clear();

        message.channel.send(`La file d'attente a été supprimé 🗑️`);
    },
};