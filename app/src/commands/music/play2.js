const { QueryType } = require('discord-player');

module.exports =  {
    name: 'play2',
    description: 'd',
    category: 'music',
    usage: 'u',
    aliases: ["a"],
 //   voiceChannel: true,
 
   async execute(message, args) {

        if (!args[0]) return message.channel.send(`Entrez un titre valide ${message.author}... Réessayer ? ❌`);

        const client = message.client
        const res = await client.player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`Aucun résultats trouvé ${message.author}... Réessayer ? ❌`);

        const queue = await client.player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch (err) {
            console.log(err)
            await client.player.deleteQueue(message.guild.id);
            return message.channel.send(`Je ne peux pas rejoindre le channel ${message.author}... Réessayer ? ❌`);
        }

        await message.channel.send(`Chargement de votre ${res.playlist ? 'playlist' : 'musique'}... 🎧`);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};