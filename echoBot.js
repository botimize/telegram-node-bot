const Telegraf = require('telegraf')

const app = new Telegraf(process.env.BOT_TOKEN)

app.command('start', (ctx) => {
  	ctx.reply('Welcome!')
})

app.on('text', (ctx) => {
	ctx.reply(ctx.update.message.text)
})



app.startPolling()