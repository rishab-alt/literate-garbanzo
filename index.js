require('dotenv').config();
const os = require('os')
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const PREFIX = ''

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}! Ready For Action!`);
  });

  bot.on('message', msg => {
    if(msg.content === '_hello'){
      msg.reply(`Hello there`)
    }
  })


  bot.on('message', msg => {
    if (msg.content === '_uptime') {
      msg.channel.send({embed: {
       color:  3447003,
       description: `**the Server Uptime is ${os.uptime} seconds**`,
     }})
    }
  });

  bot.on('message', msg => {
    if (msg.content === '_ping') {
      msg.channel.send({embed: {
       color:  3447003,
       description: ('```Pong! '+""+(Date.now() -
       msg.createdTimestamp)+'ms'+"```")
     }})
    }
  });

  bot.on('message', msg => {
    if (msg.content === '_help') {
      msg.channel.send({embed: {
       color:  3447003,
       description: '```You Need Help i See🤓\n _uptime to see uptime, _ping to see ping````'
       
     }})
    }
  });
  
  
  
bot.login(TOKEN);
