const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("627769129478127651")
setInterval(function() {
channel.send(`Anwar YouTube is TOP HACKDS ...........`);
}, 30)
})

client.login(process.env.BOT_TOKEN);