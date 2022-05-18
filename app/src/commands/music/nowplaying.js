const { MessageEmbed } = require('discord.js');

module.exports =  {
    name: 'nowplaying',
    description: 'd',
    category: 'music',
    usage: 'u',
    aliases: ["a"],

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique joué actuellement ${message.author}... Réessayer ? ❌`);

        const track = queue.current;

        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setThumbnail(track.thumbnail);
        embed.setAuthor(track.title, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const methods = ['disabled', 'track', 'queue'];

        const timestamp = queue.getPlayerTimestamp();
        const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

        embed.setDescription(`Volume : **${queue.volume}**%\nDurée : **${trackDuration}**\nLoop ? **${methods[queue.repeatMode]}**\nPar : ${track.requestedBy}`);

        embed.setTimestamp();
        embed.setFooter('Muzik by Xav & LDT', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};