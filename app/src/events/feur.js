module.exports = {

    name: "message",
    
    execute(_client, message) {
        
        if (message.content.toLowerCase().endsWith("quoi") ||
        message.content.toLowerCase().endsWith("quoi ?") ||
        message.content.toLowerCase().endsWith("quoi !") ||
        message.content.toLowerCase().endsWith("quoi.")) {
            message.channel.send("feur")
        }

    }
}