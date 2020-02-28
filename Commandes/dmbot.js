const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    let messageArray = message.content.split(" "); let cmd = messageArray[0]; let messagempall = messageArray.slice(1);
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(":comet: | Vous n'avez pas assez de permissions.");
                if(message.channel.type === "dm") return;
                if(message.deletable) message.delete();

                let MpMessage = messagempall.slice(0).join(" ");

                message.guild.members.forEach(member => {
                    member.send(`${MpMessage}`)
                })
            
            }

            module.exports.help = {
                name: "s!mpall"
            }
