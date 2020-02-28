
const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {

  message.delete().then(() => {
    let help = new Discord.RichEmbed()
            .addField("Help - :comet: | Sweep ", "\n" +
                               "\n" +
                               "\n" +
                               ":comet: | Kick - J'expulserais quelqun. - Staff \n" +
                               "\n" +
                               ":comet: | 8Ball - Pose moi une question,j'y répondrais tel le sage de ford boyard. \n" +
                               "\n" +
                               ":comet: | Ping - Ma latence prendra le dessus. \n" +
                               "\n" +
                               ":comet: | Rainbow - Je transformerais un role en un artifice de couleurs. - Admin \n" +
                               "\n" +
                               ":comet: | Clear - Je supprimerais le nombre de messages que vous voudrez. - Staff \n" +
                               "\n" +
                               ":comet: | Mpall - J'enverrais un message à tout les membres de votre serveur. - Admin \n" +
                               "\n" +
                               ":comet: | Say - Je dirais ce que vous voulez. - Staff \n" +
                               "\n" +
                               ":comet: | Vote - Créé un vote temporaire. \n" +
                               "\n" +
                               ":comet: | Avatar - J'enverrais la photo de profil de la personne mentionnée. \n", true)


                               .setColor("03224C")

                               let helpp = new Discord.RichEmbed()
                               .addField("Help - :comet: | Sweep ", "\n" +
                               "\n" +
                               "\n" +
                               ":comet: | Guess (start / stop) - Commence une partie de guess the number. \n" +
                               "\n" +
                               ":comet: | Panda - Envoie une image mignonne de panda ! \n" +
                               "\n" + 
                               ":comet: | Hack - Hack la personne mentionnée ! \n" +
                               "\n" + 
                               ":comet: | Invite - Donne le lien d'invitation du bot ! \n" +
                               "\n" + 
                               ":comet: | Owner - Donne le nom de mon roi ! \n" +
                               "\n" + 
                               ":comet: | Love - Je te dirais si tu es compatible avec ton / ta bien aimé(e). \n" +
                               "\n" +
                               ":comet: | Ui - Donne des informations sur toi ou sur l'utilisateur mentionné. \n" +
                               "\n" +
                               ":comet: | Si - Donne des informations sur le serveur ou tu es. \n" +
                               "\n" +
                               ":comet: | Ban - Je bannirais quelqun. - Staff \n " +
                               "\n" +
                               ":comet: | N'oubliez pas que toutes les commandes sont à faire en minuscule,avec le préfixe s!. ", true)
                               .setColor("03224C")


    message.channel.send(help)
    message.channel.send(helpp)

  })
}

module.exports.help = {
    name: "s!help"
}
