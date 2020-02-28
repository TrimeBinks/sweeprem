const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    message.delete()
    if(!args[0]){
        return message.channel.send(":comet: | " + "Spécifie l'id d'un rôle. ||Attention : Il faut que je sois au dessus du rôle.||")
      }
    if(message.member.hasPermission("ADMINISTRATOR")){
        let args = message.content.split(" ").slice(1);
            setInterval(function rainbow(){
                message.guild.roles.find('id', args[0]).edit({color: 'RANDOM'})
            }, 900000)
    }
    else{
        message.channel.send(":comet: | Vous n'avez pas la permission d'utiliser cette commande ! ")
    }
}

module.exports.help = {
    name: "s!rainbow"
}
