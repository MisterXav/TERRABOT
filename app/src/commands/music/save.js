module.exports =  {
    name: 'save',
    description: 'd',
    category: 'music',
    usage: 'u',
    aliases: ["a"],

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique se joue actuellement ${message.author}... Réessayer ? ❌`);

        message.author.send(`tu as sauvegardé la musique ${queue.current.title} | ${queue.current.author} du serveur ${message.guild.name} ✅`).then(() => {
            message.channel.send(`Je t'ai envoyer le titre de la musique en DM ✅`);
        }).catch(error => {
            message.channel.send(`Je ne peux pas t'envoyer de messages ${message.author}... Réessayer ? ❌`);
        });
    },
};