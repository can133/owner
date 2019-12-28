const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("660066122976198660")
setInterval(function() {
channel.send(`هلا هلا هلا هلا هلا`);
}, 15)
})

client.login("NTQ1MjM4MTc4NTg0NTkyNDA1.XgdiaA.TL9eqRVNzXg2-gLoBa50ww9z_lk");