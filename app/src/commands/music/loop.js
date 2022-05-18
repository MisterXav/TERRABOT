const { QueueRepeatMode } = require('discord-player');

module.exports =  {
    name: 'loop',
    description: 'd',
    category: 'music',
    usage: 'u',
    aliases: ["a"],

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique joué actuellement ${message.author}... Réessayer ? ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`You must first disable the current music in the loop mode (${client.config.app.px}loop) ${message.author}... Réessayer ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Loop **${queue.repeatMode === 0 ? 'désactivé' : '&ctivé'}** La queue actuelle est répété 🔁` : `Quelque chose ne fonctionne pas ${message.author}... Réessayer ? ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`You must first disable the current queue in the loop mode (${client.config.app.px}loop queue) ${message.author}... Réessayer ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Loop **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** La musique actuelle est répétée 🔂` : `Quelque chose ne fonctionne pas ${message.author}... Réessayer ? ❌`);
        };
    },
};