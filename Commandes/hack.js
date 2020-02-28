const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
       if(message.mentions.users.size === 0) {
        return message.channel.send(":comet: | Vous devez tag un membre à hack.")
    }
   var hacked = message.mentions.users.first().username
let msgg = await message.channel.send(":comet: | Hack de " + hacked + " en cours...", {files: [
    {
      attachment: "https://media2.giphy.com/media/e5rHVwosWkEbS/giphy.gif",
      name: "hack.gif"
    }
  ]})
  message.channel.send(":comet: | " + hacked + " a été hack avec succès !")
  message.mentions.users.first().send(`:comet: | Vous avez été hack par ${message.author.username} ! Faites attention à votre compte ! || C'est faux ! ||`);
    }

module.exports.help = {
    name: "s!hack"
}
