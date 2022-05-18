
const discord = require('discord.js')


module.exports = {

    name: "compliment",
    description: "Complimente quelqu'un",
    category: "Fun",
    usage: "compliment <@membre>",
    aliases: ["comp"],
    
    execute(message, args) {

        if (!message.mentions.users.first()) {
            const embed = new discord.MessageEmbed()
            .setDescription("Tu doit mentionner un utilisateur pour ça !")
            .setColor("FF0000")
            return message.channel.send(embed)
        }

        let compliments = [
            "Merci d’exister.",
            "Tu me fais voir le monde comme personne ne me l’a jamais fait voir.",
            "J’adore la manière avec laquelle tu me fais réfléchir.",
            "J’aime la manière dont tu me défies.",
            "À tes côtés, je suis la meilleure version possible de moi-même.",
            "Ton énergie est communicative.",
            "Je ne peux pas m’empêcher de penser à toi.",
            "Je t’aime tellement que ça en est douloureux.",
            "Tu es tout pour moi.",
            "Quand nous sommes ensemble, tout semble possible.",
            "Je ne peux pas vivre sans toi.",
            "Je ne veux pas être à un endroit sans toi.",
            "Tu me rappelles constamment que les gens peuvent être bons.",
            "Il y a de la douceur dans tes yeux.",
            "Ton rire est mon bruit préféré.",
            "Le monde serait tellement ennuyeux sans toi.",
            "Est-ce que tu es réel ?",
            "Tu rends importantes les petites choses.",
            "T’aimer me semble être la chose la plus naturelle.",
            "Tu m’impressionnes chaque jour.",
            "Ta gentillesse n’a pas de limite.",
            "Quand nous sommes ensemble, le reste du monde disparaît.",
            "J’aimerais être au moins la moitié de l’être humain que tu es.",
            "Je ne connaissais pas l’amour avant de t’avoir rencontré.",
            "Je ne savais pas à quel point l’amitié était importante avant de te rencontrer.",
            "Ce serait une torture que de te perdre.",
            "Ma vie avant toi était ennuyeuse à mourir.",
            "Il n’y a personne comme toi.",
            "Te prendre dans mes bras est le seul réconfort dont j’ai besoin.",
            "Tu n’es pas aussi bête que ce que tu laisses les gens penser de toi.",
            "Tu es beau / belle.",
            "Ton âme est magnifique.",
            "J’aime ton cerveau.",
            "J’aime que tu sois bizarre.",
            "Tu es plus un superhéros que n’importe quel personnage de Marvel.",
            "Tu m’inspires.",
            "Tu es si fort(e).",
            "Ta voix m’apaise.",
            "Ton existence me réconcilie avec la vie.",
            "L’idée de toi me faire sourire intérieurement.",
            "Je n’ai jamais rencontré quelqu’un d’aussi attentionné que toi.",
            "Personne d’autre ne peut me faire rire comme toi.",
            "Tu as si bon coeur.",
            "Tu es bien trop intelligent(e) pour moi."
        ]

        var compliment = compliments[Math.floor(Math.random() * compliments.length)];
        const embed = new discord.MessageEmbed()
        .setAuthor(`Un compliment sauvage apparait !`)
        .setDescription(`> ${message.mentions.users.first()} ${compliment.toLowerCase()}\n\nDe la part de ${message.author}`)
        .setColor("e0287e")
        message.channel.send(embed)
    }

}
