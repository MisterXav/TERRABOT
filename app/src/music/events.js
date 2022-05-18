player.on('error', (queue, error) => {
    console.log(`Erreur emmise par la queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Erreur emmise par la connexion ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    queue.metadata.send(`Joue ${track.title} dans **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Le titre ${track.title} a été ajouté à la file ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send("J'ai été déconecté ❌");
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send( "Personne n'est en vocal, je quitte, bye *{ DEV BY TDT TEAM }* ❌");
});

player.on('queueEnd', (queue) => {
    queue.metadata.send("J'ai fini de lire toute la file ✅");
});