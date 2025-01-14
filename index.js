const TelegramApi = require("node-telegram-bot-api")
const token = "7621609490:AAFpOAXkzdR_lfFJrPNFIOujN3cChoe62qo"

const {gameOptions, againOptions} = require("./options")
const bot = new TelegramApi(token, {polling: true})
const chats = {}



const startGame = async (chatId) => {
  await bot.sendMessage(chatId, "men hozi 0-9 gaca raqam oyleman sen wuni topasan!!!")
  const randomNumber = Math.floor(Math.random() * 10)
  chats[chatId] = randomNumber
  await bot.sendMessage(chatId, "top", gameOptions)
}

const start = () => {
  bot.setMyCommands([
    {command: "/start", description: "salomlashish"},
    {command: "/info", description: "F.I.O"},
    {command: "/game", description: "o'yin"},
  ])
  
  bot.on("message", async msg => {
    const text = msg.text
    const chatId = msg.chat.id
  
    if (text === "/start") {
      await bot.sendMessage(chatId, "https://tlgrm.eu/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp")
      return bot.sendMessage(chatId, `biz ochgan botga xuw kelibsiz`)
    }
  
    if (text === "/info") {
      return bot.sendMessage(chatId, `hello ${msg.from.first_name} ${msg.from.last_name}`)
    }

    if (text === "/game") {
      return startGame(chatId)
    }

    return bot.sendMessage(chatId, "seni cunmayappan narmalniy yoz")
  
  })
  
  bot.on("callback_query", async msg => {
    const data = msg.data
    const chatId = msg.message.chat.id
    if(data === "/again") {
      return startGame(chatId)
    }
    console.log(data)

    if(data === chats[chatId]) {
      return await bot.sendMessage(chatId, `ee toptin ble`, againOptions)
    } else {
      return await bot.sendMessage(chatId, `topommadin mol ${chats[chatId]}ni talnludim`, againOptions)
    }

  })
}

start()