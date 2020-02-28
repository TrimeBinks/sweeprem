const Discord = require ('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send(":comet: | Vous n'avez pas assez de permissions.");

    if(message.mentions.users.size === 0) {
        return message.channel.send(":comet: | Vous devez tag un membre.")
    }

    let kick = message.guild.member(message.mentions.users.first());

    if(!kick) {
        return message.channel.send(":comet: | Veuillez indiquer un membre valide.");
    }

    kick.kick().then(member => {
        message.channel.send(`:comet: | ${member.user.username} s'est fais kick ! `);
    });
};
module.exports.help = {
    name: "s!kick"
}
