

module.exports =  {
    name: 'volume',
    description: 'd',
    category: 'music',
    usage: 'u',
    aliases: ["a"],

    execute(client, message, args) {
        const maxVol = client.config.opt.maxVol;
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique se joue actuellement ${message.author}... Réessayer ? ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`le volume actuel ${queue.volume} 🔊\n*Pour changer le volume entrez un nombre valide entre **1** et **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`Le volume est déjà le même ${message.author}... Réessayer ? ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`Le nombre spécifié n'est pas valide, c'est entre **1** et **${maxVol}** ${message.author}... Réessayer ? ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Le volume est maintenant à **${vol}**/**${maxVol}**% 🔊` : `Quelque chose ne fonctionne pas ${message.author}... Réessayer ? ❌`);
    },
};