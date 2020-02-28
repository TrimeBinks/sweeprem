const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

message.channel.send(":comet: | Mon lien d'invitation est : https://discordapp.com/oauth2/authorize?client_id=681235348977746150&scope=bot&permissions=8 !")

}

module.exports.help = {
    name: "s!invite"
}