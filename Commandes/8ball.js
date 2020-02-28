const Discord = module.require('discord.js');

var fortunes = [
    ":comet: | Oui.",
    ":comet: | Non.",
    ":comet: | Peut-être. :thinking:",
    ":comet: | C'est possible.",
    ":comet: | Arrête avec tes questions a la con sérieux.",
    ":comet: | Je pense pas,c'est triste.",
    ":comet: | Bien évidemment !",
    ":comet: | Quelle question !",
    ":comet: | Impossible.",
    ":comet: | T'y crois vraiment ?",
    ":comet: | Dans tes rêves,imbécile.",
    ":comet: | MDRRRR non ! *sueur*",
    ":comet: | Bon ferme ta gueule.",
    ":comet: | Stop me prendre pour un débile.",
    ":comet: | Non,baisse les yeux maintenant fdp."
];



module.exports.run = async (bot, message, args) => {

if(!args[0]){
  return message.channel.send(":comet: | " + "Pose moi ta question.")
}

if (args[0]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
else message.channel.send(":comet: | " + "Pardon ?");
}

module.exports.help = {
    name: "s!8ball"
}
