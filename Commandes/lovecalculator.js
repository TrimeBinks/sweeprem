const Discord = module.require('discord.js');

var Responses = [
    ":heart: - Votre amour est incalculable,vous êtes fait l'un pour l'autre !",
    ":broken_heart: - Détachez vous l'un de l'autre,vous ne serez jamais compatible.",
    ":heart: - Votre amour est fragile,mais une possibilité peut s'envisager.",
    ":heart: - Mariez vous.",
    ":broken_heart: - Vous seriez dégoûtants ensemble."
	];

    module.exports.run = async (bot, message, args) => {

    if(!args[0]){
        return message.channel.send(":comet: " + "| Mentionne quelqun !")
    }

    var amoureux = message.mentions.users.first().username

    if (args[0]) {
        message.channel.send(":comet: | " + message.author + " et " + amoureux + " , " + Responses[Math.floor(Math.random() * Responses.length)], {files: [
    {
      attachment: "https://media1.tenor.com/images/45e529c116a1758fd09bdb27e2172eca/tenor.gif",
      name: "love.gif"
    }
  ]});
    }


}
module.exports.help = {
    name: "s!love"
}
