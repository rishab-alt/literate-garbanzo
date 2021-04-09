[discord.js]: https://www.npmjs.com/package/discord.js

# presence-timer

## Introduction

presence-timer is an npm module that allows a [discord.js] bot to take on the presence of a random user the bot is aware of. It will only copy the presence of users listed as playing games.

This often brings new funny presences to your bot and is good for a quick laugh. Useful when you don't know what to put as your bot's presence.

## Installation

Just run `npm install --save presence-timer` inside your Node project.

## Usage

```js
var discord = require('discord.js');
var client = new discord.Client();
var presenceTimer = new require('presence-timer').Timer(client);
client.on('ready', function () {
	// update presence every 5 to 10 minutes
	presenceTimer.startTimer(300000, 600000);
	console.log('Bot ready! Logged in as "' + client.user.tag + '".');
});
client.login('token');
```

Stop the timer:

```js
presenceTimer.stopTimer();
```
