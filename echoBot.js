const Telegraf = require('telegraf')

const app = new Telegraf(YOUR_BOT_TOKEN)
const botimize = require('botimize')(YOUR_BOTIMIZE_TOKEN, "telegram")

app.command('start', (ctx) => {
  	ctx.reply('Welcome!')
})

app.on('text', (ctx) => {

        // botimize incoming
        let incomingLog = ctx.update;
        botimize.logIncoming(incomingLog);

        // reply to user
	ctx.reply(ctx.update.message.text);
  
        // botimize outgoing
        let outgoingLog = {
            chat_id: ctx.update.message.chat_id,
            text: ctx.update.message.text,
            token: YOUR_BOT_TOKEN 
        };      
        botimize.logOutgoing(outgoingLog, {parse: 'pure'});
})



app.startPolling()
