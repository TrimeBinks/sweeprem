const Discord = require("discord.js");
const client = new Discord.Client();

const fs = require("fs");

client.login("NjgzMDM2NzU1OTU5NjExNDMx.XllvRg.GMqvcCY-lx7OJB2gdvSwotBeMTY");


var number_random = 0;

var party_launch = false;


 client.on('message', function(message){
    if(message.content == "s!guess start"){
        if (party_launch == false) {
        party_launch = true;
        message.reply('Partie lancée ! Le nombre se trouve entre 0 et 500 !')
        number_random = Math.floor(Math.random() * (500 - 0) + 0)
   }
        else{
            message.channel.send(":comet: | Une partie est déja en cours !")
        }
     }
   

    if(party_launch && message.content != null){
        if(Number.isInteger(parseInt(message.content))){

            if (message.content > number_random){
                message.reply(':comet: | Plus petit !')
            }
            else if(message.content < number_random){
                message.reply(':comet: | Plus grand !')
            }
            else if(message.content.startsWith(number_random)) {
                message.reply('Tu as gagné la partie ! Le nombre était : ' + number_random + ' !')
                party_launch = false;
            }
        }
    }


    if(message.content == "s!guess stop"){
           if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(":comet: | Vous n'avez pas assez de permissions.");
        if(party_launch == true){
            message.reply("Partie stoppée !")
            party_launch = false
        }else{
            message.reply("Il n'y a pas de partie en cours !")
        }
    }
      });

client.commands = new Discord.Collection();

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
        console.log(`${f.length} events en chargement`);

        f.forEach((f) => {
            const events = require(`./Events/${f}`);
            const event = f.split(".")[0];


            client.on(event, events.bind(null, client));

})});
