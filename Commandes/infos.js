  
const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let memberInfo = message.mentions.members.first();
  var permissions = [];
  var perms = [];
  let status = {
    online: "En ligne",
    dnd: "Ne pas déranger !",
    idle: "Inactif",
    offline: "Déconnecté"
  }
  if(message.member.hasPermission("KICK_MEMBERS")){
    permissions.push("Expulser des membres");
}

if(message.member.hasPermission("BAN_MEMBERS")){
    permissions.push("Bannir des membres");
}

if(message.member.hasPermission("ADMINISTRATOR")){
    permissions.push("Administrateur");
}

if(message.member.hasPermission("MANAGE_MESSAGES")){
    permissions.push("Gérer les messages");
}

if(message.member.hasPermission("MANAGE_CHANNELS")){
    permissions.push("Gérer les salons");
}

if(message.member.hasPermission("MENTION_EVERYONE")){
    permissions.push("Mentionner tout le monde");
}

if(message.member.hasPermission("MANAGE_NICKNAMES")){
    permissions.push("Gérer les pseudos");
}

if(message.member.hasPermission("MANAGE_ROLES")){
    permissions.push("Gérer les roles");
}

if(message.member.hasPermission("MANAGE_WEBHOOKS")){
    permissions.push("Gérer les webhooks");
}

if(message.member.hasPermission("MANAGE_EMOJIS")){
    permissions.push("Gérer les emojis");
}

if(permissions.length == 0){
    permissions.push("Pas de permissions");
}

  if(!memberInfo){
    var userinf = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setThumbnail(message.author.avatarURL)
        .setDescription(":comet: | Voici tes informations :")
        .setColor(0x00FF00)
        .addField("Pseudo complet :", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID :", message.author.id)
        .addField("Créé le :", message.author.createdAt)
        .addField("Rejoint le :", message.member.joinedAt)
        .addField("Statut :",`${status[message.author.presence.status]}`, true)
        .addField("Joue à :",message.author.presence.game, true)
        .addField('Roles :',  message.member.roles.map(r => `${r}`).join(','), true)
        .addField("Permissions : ", `${permissions.join(',')}`, true)

        message.channel.send(userinf);

  }else{
    if(message.mentions.members.first().hasPermission("KICK_MEMBERS")){
      perms.push("Expulser des membres");
    }
    
    if(message.mentions.members.first().hasPermission("BAN_MEMBERS")){
      perms.push("Bannir des membres");
    }
    
    if(message.mentions.members.first().hasPermission("ADMINISTRATOR")){
      perms.push("Administrateur");
    }
    
    if(message.mentions.members.first().hasPermission("MANAGE_MESSAGES")){
      perms.push("Gérer les messages");
    }
    
    if(message.mentions.members.first().hasPermission("MANAGE_CHANNELS")){
      perms.push("Gérer les salons");
    }
    
    if(message.mentions.members.first().hasPermission("MENTION_EVERYONE")){
      perms.push("Mentionner tout le monde");
    }
    
    if(message.mentions.members.first().hasPermission("MANAGE_NICKNAMES")){
      perms.push("Gérer les pseudos");
    }
    
    if(message.mentions.members.first().hasPermission("MANAGE_ROLES")){
      perms.push("Gérer les roles");
    }
    
    if(message.mentions.members.first().hasPermission("MANAGE_WEBHOOKS")){
      perms.push("Gérer les webhooks");
    }
    
    if(message.mentions.members.first().hasPermission("MANAGE_EMOJIS")){
      perms.push("Gérer les emojis");
    }
    
    if(perms.length == 0){
      perms.push("Pas de permissions");
    }
    var userinfoo = new Discord.RichEmbed()
        .setAuthor(memberInfo.displayName)
        .setThumbnail(memberInfo.user.avatarURL)
        .setDescription(":comet: | Voici ses informations :")
        .setColor(0x00FF00)
        .addField("Pseudo complet :", `${memberInfo.user.username}#${memberInfo.user.discriminator}`)
        .addField("ID :", memberInfo.id)
        .addField("Créé le :", memberInfo.user.createdAt)
        .addField("Rejoint le :", memberInfo.joinedAt)
        .addField("Statut :",`${status[memberInfo.presence.status]}`, true)
        .addField("Joue à :",memberInfo.presence.game, true)
        .addField('Roles :',   memberInfo.roles.map(r => `${r}`).join(','), true)
        .addField("Permissions : ", `${perms.join(',')}`, true)
        message.channel.send(userinfoo);
  }
}

module.exports.help = {
    name: "s!ui"
}
