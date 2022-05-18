module.exports = {

    name: "message",
    
    execute(client, message) {
        
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes("démarrer")) {
            message.channel.send("Vrouuuum 🚗 !")
        }

    }
}
