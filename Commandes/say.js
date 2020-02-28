const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {
   if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send(":comet: | Vous n'avez pas assez de permissions.");
    message.delete();
    
    if(!args.join(" ")){
      return message.channel.send(":comet: " + "| Que dois-je dire ?")
    }
    message.channel.send(args.join(" "))
}


module.exports.help = {
  name: "s!say"
}
