const Discord  = module.require('discord.js');

const agree    = "✅";
const disagree = "❎";

module.exports.run = async (bot, message, args) => {

  let msg = await message.channel.send(":comet: | Vote vite !");
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 20000});
  msg.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

 await message.channel.send(`:comet: | Vote de ` + message.author.username + ` : \n✅ : ${YES_Count-1}\n - \n❎ : ${NO_Count-1} `)
  



}

module.exports.help = {
    name: "s!vote"
}
