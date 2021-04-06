require('dotenv').config();
const os = require('os')
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const PREFIX = process.env.PREFIX;
const avatar = require('./avatar')

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}! Ready For Action!`);
  });

  if (msg.content === 'avatar') {
    await avatar.run(bot, msg, []);
}

  bot.on('message', msg => {
    if(msg.content === 'hello'){
      msg.reply(`Hello there`)
    }
  })


  bot.on('message', msg => {
    if (msg.content === 'uptime') {
      msg.channel.send({embed: {
       color:  3447003,
       description: `**the Server Uptime is ${os.uptime} seconds**`,
     }})
    }
  });

  bot.on('message', msg => {
    if (msg.content === 'ping') {
      msg.channel.send({embed: {
       color:  3447003,
       description: ('```Pong! '+""+(Date.now() -
       msg.createdTimestamp)+'ms'+"```")
     }})
    }
  });

  bot.on('message', msg => {
    if (msg.content === 'help') {
      msg.channel.send({embed: {
       color:  3447003,
       description: '```You Need Help i See 🤓\n _uptime to see uptime\n_ping to see ping````'
       
     }})
    }
  });
  
  
  
bot.login(TOKEN);
