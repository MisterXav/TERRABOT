module.exports = {

    name: "message",
    
    execute(_client, message) {
        
        if (message.content.toLowerCase().endsWith("oui") ||
        message.content.toLowerCase().endsWith("oui ?") ||
        message.content.toLowerCase().endsWith("oui !") ||
        message.content.toLowerCase().endsWith("oui.")) {
            message.channel.send("stiti")
        }

    }
}