require('dotenv').config();
const os = require('os')
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const PREFIX = ''

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
  });

  bot.on('message', msg => {
    if (msg.content === '_uptime') {
      msg.reply(`The server uptime is ${os.uptime()} Seconds`);
    }
  });

  bot.on('message', msg => {
    if(msg.content === '_hello'){
      msg.reply(`Hello there`)
    }
  })

  bot.on('message', msg => {
    if(msg.content === '_ping'){
      msg.channel.send('Pong! '+"`"+(Date.now() -
       msg.createdTimestamp)+'ms'+"`");
    }
  })
  
bot.login(TOKEN);
