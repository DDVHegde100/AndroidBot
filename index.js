require('dotenv').config();
const Discord = require('discord.js');
const axios = require('axios');
const client = new Discord.Client();

let interval;
client.on('message', async msg => {
  switch (msg.content) {
    case "Hello":
      msg.reply("Greetings!");
      break;
      case "Hello":
        msg.reply("Greetings!");
        break;
    case "!meme":
      msg.channel.send("Here's your meme!");
      const img = await getMeme();
      msg.channel.send(img);
      break;
    case "!eye":
      msg.channel.send("You are now subscribed to eye reminders.");
       interval = setInterval (function () {
        msg.channel.send("Please take an eye break now!")
        .catch(console.error); 
      }, 3600000); //every hour
      break;
    case "!stop":
      msg.channel.send("I have stopped eye reminders.");
      clearInterval(interval);
      break;
  }
});

async function getMeme(){
  const res = await axios.get('https://memeapi.pythonanywhere.com/');
  console.log(res.data)
  return res.data.memes[0].url;
}


client.login(ODg2MjMyMjg1MDQ3ODMyNjA2.YTymIg.Dk2378seuohPDOA70YeJLxwG18U);