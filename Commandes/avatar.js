const Discord = require ('discord.js');

module.exports.run = async(client, message, args) => {
  let pdpp = message.author.displayAvatarURL;
        if(message.mentions.users.size === 0) {
        let msg = await message.channel.send(":comet: | Recherche...");
        if(pdpp.includes(".gif")) {
        await message.reply("Voici votre avatar : ", {files: [
        {
        attachment: message.author.displayAvatarURL,
        name: "avatar.gif"
        }
      ]})
      }
else {
            await message.reply("Voici votre avatar : ", {files: [
    {
      attachment: message.author.displayAvatarURL,
      name: "avatar.png"
    }
  ]});
    }
    msg.delete();
  } else {
  let msgg = await message.channel.send(":comet: | Recherche...");
  let target = message.mentions.users.first().username;
  let pdp = message.mentions.users.first().displayAvatarURL;
 
if(pdp.includes(".gif")) {
    await message.reply("Voici l'avatar de " + target + " : ", {files: [
    {
      attachment: message.mentions.users.first().displayAvatarURL,
      name: "avatar.gif"
    }
  ]});
        
} else {
            await message.reply("Voici l'avatar de " + target + " : ", {files: [
    {
      attachment: message.mentions.users.first().displayAvatarURL,
      name: "avatar.png"
    }
  ]});
}
msgg.delete();
  }      
        
  
  }
  
  module.exports.help = {
      name: "s!avatar"
  }
