module.exports = {

    name: "message",
    
    execute(client, message) {
        
        if (message.content.toLowerCase().includes("drogue")) {
           message.react("a:color:726208442598948974")
        }

    }
}
