const { MessageEmbed } = require('discord.js');

module.exports =  {
    name: 'queue',
    description: 'd',
    category: 'music',
    usage: 'u',
    aliases: ["a"],

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Aucune musique se joue actuellement ${message.author}... Réessayer ? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Pas de musique dans la file d’attente après la musique actuelle ${message.author}... Réessayer ❌`);

        const embed = new MessageEmbed();
        const methods = ['', '🔁', '🔂'];

        embed.setColor('RED');
        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
        embed.setAuthor(`File d'attente - ${message.guild.name} ${methods[queue.repeatMode]}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (par : ${track.requestedBy.username})`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `Et **${songs - 5}** autre musiques...` : `**${songs}** musiques dans la file...`;

        embed.setDescription(`Joue actuellement : ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`);

        embed.setTimestamp();
        embed.setFooter('Musique BOT', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};