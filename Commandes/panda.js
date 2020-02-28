const Discord = module.require('discord.js');
var Responses = [
    "https://phoneky.co.uk/thumbs/screensavers/down/animals/cutepanda_q69dfmw9.gif",
    "https://media1.tenor.com/images/b07a8437e208a1173bd91ce565aa9409/tenor.gif?itemid=11904494",
    "https://media.tenor.com/images/99842458e25390616ab2155dea4af16a/tenor.gif",
    "https://media1.tenor.com/images/a01d7a56f7c3ceb78eb21a6603de9449/tenor.gif?itemid=4605989",
    "https://media.tenor.com/images/315abb339e8d17659046438919cce2c7/tenor.gif"
	];

    module.exports.run = async (bot, message, args) => {

message.channel.send(":comet: | Panda !", {files: [
    {
      attachment: Responses[Math.floor(Math.random() * Responses.length)],
      name: "panda.gif"
    }
  ]});
    }

module.exports.help = {
    name: "s!panda"
}
