# Create your Telegram bot in Nodejs with botimize bot-analytics service

Here is our 10 min guide to create an echo-bot on telegram with [botimize](http://www.botimize.io) **bot analytic** service.

## Installation

```js
$ npm install telegraf --save
```

## Create a telegram bot and get its token with the aid of botfather

Find botfather by ...
![Botfather](demo/botFather.png)
Talk to him like this way and record your telegram token.
![teleToken](demo/teleToken.png)


## Create a botimize account and a key for the project

Go to [botimize](https://dashboard.botimize.io/register) and create an account.

Create a new project by clicking new project.

![New_project](/demo/botimize_new_project.png)

See your **Your_Botimize_Api_Key** by clicking Project Setting

![Project Setting](demo/botimize_apiKey.png)

## Create a Nodejs bot

Create a Nodejs script (e.g. echoBot.js) and copy this into it. 

```
const Telegraf = require('telegraf')

const app = new Telegraf(process.env.BOT_TOKEN)

app.command('start', (ctx) => {
  console.log('start', ctx.from)
  ctx.reply('Welcome!')
})

app.on('text', (ctx) => {
	ctx.reply(ctx.update.message.text)
})

app.startPolling()
```

## Talk to your bot
Run on the terminal

Notice you have to replace YOUR_BOT_TOKEN, something like `123456789:AbCdfGhIJKlmNoQQRsTUVwxyZ`.
```
BOT_TOKEN=YOUR_BOT_TOKEN node echoBot.js
```
Now you can talk to your bot!
I name the bot as okokdodo you can find your bot with the bot name.
![okokdodo](/demo/okokdodo.png)
