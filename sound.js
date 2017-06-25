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
    if (!msg.guild) return;
  if (msg.content.startsWith(prefix+'join')) {
    if (msg.member.voiceChannel) {
      msg.member.voiceChannel.join()
        .then(connection => { 
          msg.reply('J\'ai rejoins le serveur comme prévu !');
        })
        console.log("soundbox joined the server")
    } else {
      msg.reply('Tu as besoin d\'être connecté a un salon vocal pour me faire venir');
    }
  }
  
  
   if (!msg.guild) return;
  if (msg.content.startsWith(prefix+'leave')) {
    if (msg.member.voiceChannel) {
      msg.member.voiceChannel.leave()
      msg.channel.send('Je quitte le salon vocal.')
      console.log("soundbox leave the server")
    } else {
      msg.reply('Tu as besoin d\'être connecté a un salon vocal pour me faire partir');
    }
  }
  
   if (!msg.guild) return;
   if (msg.content.startsWith(prefix+"souffrance")) {
   const voiceChannel = msg.member.voiceChannel;
voiceChannel.join()
      .then(connection => {
        msg.channel.send("Je suis laaa")
        console.log("A joué le son Anti souffrance") 
        const dispatcher = connection.playFile('./souffrance.mp3');
dispatcher.setVolume(2);
dispatcher.on('end', () => voiceChannel.leave());
}).catch(console.error)
   
}
})
