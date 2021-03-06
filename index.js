const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const giveMeAJoke = require('discord-jokes')

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	}
});

client.on('message', async message => {
	if(message.content == "_joke"){
		giveMeAJoke.getRandomDadJoke(function(joke){
			message.channel.send(joke);
		})
	} 
});
client.on('message', async message => {
	if(message.content == "_loljokes"){
		giveMeAJoke.getRandomCNJoke(function(joke){
			message.channel.send(joke);
		})
	}
});

client.login(token);
