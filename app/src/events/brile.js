module.exports = {

    name: "message",
    
    execute(_client, message) {
        
        if (message.content.toLowerCase().endsWith("non") ||
        message.content.toLowerCase().endsWith("non ?") ||
        message.content.toLowerCase().endsWith("non !") ||
        message.content.toLowerCase().endsWith("non.")) {
            message.channel.send("brile")
        }

    }
}