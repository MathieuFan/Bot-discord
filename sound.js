const Discord = require('discord.js')
const bot = new Discord.Client()
const config = require ('./config.json')
bot.login(config.token)
let prefix = '!'

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.on('message', msg => {
    if(msg.content.startsWith(prefix+'test')) {
        msg.channel.send("yolo test effectué").catch(console.error)
        console.log('commande effectuée')
    }
})