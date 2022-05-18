module.exports =  {
    name: 'filter',
    description: 'd',
    category: 'music',
    usage: 'u',
    aliases: ["a"],

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique joué actuellement ${message.author}... Réessayer ? ❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`Indiquez le filtre a activer ou désactiver ${message.author}... Réesayer ? ❌\n${actualFilter ? `Filtre en cours ${actualFilter} (${client.config.app.px}filtre ${actualFilter} pour le désactiver).\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`Ce filtre n'existe pas ${message.author}... Réessayer ? ❌\n${actualFilter ? `Filtre en cours : ${actualFilter}.\n` : ''}Liste des filtres disponibles : ${filters.map(x => `**${x}**`).join(', ')}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`Le filtre ${filter} est maintenant **${queue.getFiltersEnabled().includes(filter) ? 'activé' : 'désactivé'}** ✅\n*Attendez un moment que le filtre prenne effet.*`);
    },
};