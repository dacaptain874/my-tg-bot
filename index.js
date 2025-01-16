const TelegramBot = require("node-telegram-bot-api")
const token = "7621609490:AAFpOAXkzdR_lfFJrPNFIOujN3cChoe62qo"
const webAppUrl = "https://thriving-lollipop-359fe8.netlify.app"

const bot = new TelegramBot(token, {polling: true})

bot.on("message", async (msg) => {
  const chatId = msg.chat.id
  const text = msg.text

  // sms jonatiw
  bot.sendMessage(chatId, "Salom Yusuf Parfumga xuw kelibsiz")

  if(text === "/start") {
    await bot.sendMessage(chatId, "forma korinadi hozir sizga", {
      reply_markup: {
        keyboard: [
          [{text: "formani toldirish", web_app: {url: webAppUrl + "/form"}}]
        ]
      }
    })
  }

  await bot.sendMessage(chatId, "forma korinadi hozir sizga", {
    reply_markup: {
      inline_keyboard: [
        [{text: "formani toldirish", web_app: {url: webAppUrl}}]
      ]
    }
  })

})