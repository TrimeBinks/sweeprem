const Discord = require ('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(":comet: | Vous n'avez pas assez de permissions.");

    if(message.mentions.users.size === 0) {
        return message.channel.send(":comet: | Vous devez tag un membre.")
    }

    let ban = message.guild.member(message.mentions.users.first());

    if(!ban) {
        return message.channel.send(":comet: | Veuillez indiquer un membre valide.");
    }

    ban.ban().then(member => {
        message.channel.send(`:comet: | ${member.user.username} s'est fais ban !`);
    });
};
module.exports.help = {
    name: "s!ban"
}
