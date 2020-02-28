const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": ":flag_br:",
        "eu-central": ":flag_eu: ",
        "europe": ":flag_eu: ",
        "singapore": ":flag_sg:",
        "us-central": ":flag_us:",
        "sydney": ":flag_au:",
        "us-east": ":flag_us:",
        "us-south": ":flag_us:",
        "us-west": ":flag_us:",
        "eu-west": ":flag_eu:",
        "vip-us-east": ":flag_us:",
        "london": ":flag_gb:",
        "amsterdam": ":flag_nl:",
        "hongkong": ":flag_hk:",
        "russia": ":flag_ru:",
        "southafrica": ":flag_za:"
    };
    const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("Nom : ", message.guild.name, true)
        .addField("ID : ", message.guild.id, true)
        .addField("Région : ", region[message.guild.region], true)
        .addField("Couronne : ", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("Total | Humains | Bots : ", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
        .addField("Niveau de vérification : ", verifLevels[message.guild.verificationLevel], true)
        .addField("Salons : ", message.guild.channels.size, true)
        .addField("Roles : ", message.guild.roles.size, true)
        .addField("Date de création : ", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .setThumbnail(message.guild.iconURL)
    message.channel.send({embed});
}

module.exports.help = {
  name:"s!si"
}
