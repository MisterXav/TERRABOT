module.exports = {
    name: "ready",
    
    execute(client) {
        console.log("Bot is connected")
        let index = 0
        // setInterval(() => {
        //     client.user.setActivity(client.config.activities[index], {type: "PLAYING"});
        //     index ++;
        //     if (index >= client.config.activities.length) index = 0;
        // }, 5000) NE PAS ENLEVER !!!!!

        client.user.setActivity("TERRA FOREVER <3", {type: "PLAYING"});

    }
}