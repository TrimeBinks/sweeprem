  
module.exports.run = async (bot, message, args) => {

    if(message.member.hasPermission("MANAGE_MESSAGES")) {
      let messagecount = parseInt(args[0]);
    
      if(isNaN(messagecount)) return message.channel.send(":comet: | Entrez un bon chiffre !");
    
      if(messagecount > 100){
           message.channel.fetchMessages({limit: 100}).then(messages => message.channel.bulkDelete(messages, true));
           message.channel.send(":comet: | 100 messages ont été supprimés avec succès !")
      }else if(messagecount < 2 ) {
        message.channel.send(":comet: |" + " Tu ne peux pas supprimer moins de 2 messages !")
      } else {
        message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages, true));
        message.channel.send(":comet: | " + messagecount + " messages ont été supprimés avec succès !")
      }{
      }
    } else {
      return message.reply(":comet: | Tu n'as pas assez de permissions.")
    }
    }
    
    module.exports.help = {
        name: "s!clear"
    }
