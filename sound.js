const Discord = require('discord.js')
const bot = new Discord.Client()
const config = require ('./config.json')
bot.login(config.token)
let prefix = '!'

bot.on('ready', function () {
  console.log("Connected !")
})

bot.on('message', msg => {
    if(msg.content.startsWith(prefix+'test')) {
        msg.channel.send("test done").catch(console.error)    
    }
    if (!msg.guild) return;
  if (msg.content.startsWith(prefix+'join')) {
    if (msg.member.voiceChannel) {
      msg.member.voiceChannel.join()
        .then(connection => { 
          msg.reply("Ijoin the channel");
        })
        console.log("soundbox joined the server")
    } else {
      msg.reply("You need to be in a vocal channel to do that");
    }
  }
  
  
   if (!msg.guild) return;
  if (msg.content.startsWith(prefix+'leave')) {
    if (msg.member.voiceChannel) {
      msg.member.voiceChannel.leave()
      msg.channel.send("I leave the channel")
      console.log("soundbox leave the server")
    } else {
      msg.reply("You need to be on a vocal channel for do that");
    }
  }
  
   if (!msg.guild) return;
   if (msg.content.startsWith(prefix+"souffrance")) {
   const voiceChannel = msg.member.voiceChannel;
voiceChannel.join()
      .then(connection => {
        msg.channel.send("I'm heeere")
        console.log("Play the sound") 
        const dispatcher = connection.playFile('./sound.mp3');
dispatcher.setVolume(2);
dispatcher.on('end', () => voiceChannel.leave());
}).catch(console.error)
   
}
})
