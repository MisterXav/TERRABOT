module.exports =  {
    name: 'back',
    description: 'd',
    category: 'music',
    usage: 'u',
    aliases: ["a"],

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique se joue actuellement ${message.author}... Réessayer ? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`Il n'y avait aucune musique jouée avant ${message.author}... Réessayer ? ❌`);

        await queue.back();

        message.channel.send(`Joue la musique **précedente** ✅`);
    },
};