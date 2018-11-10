const Discord = require('discord.js'),
bot = new Discord.Client(),
colors = require('colors'),
con = console.log;
 
bot.on('ready',() => {
    let memberCount = bot.users.size;
    let serverCount = bot.guilds.size;
    con(
      `${"-".repeat(100)}\n`.rainbow                         + 
      `|  Bienvenue sur: PubBot-Logs.\n` + 
      `${"-".repeat(100)}\n`.rainbow                         +  
      "|  Information du bot : \n"                     +
      `|  Nom du bot    : ${bot.user.tag}!\n`          + 
      `|  ID du bot     : ${bot.user.id}\n`            +
      `|  Token: du bot : ${bot.token}\n`              +
      `${"-".repeat(100)}\n`.rainbow                         +
      "|  Stats bot : \n"                              +
      `|  Utilisateurs : ${memberCount}\n`             +
      `|  Serveurs     : ${serverCount}\n`             +
      `${"-".repeat(100)}\n`.rainbow
    );
  });
  

    bot.on('message', function(message) {
      if (message.author.bot)
        return;
      const args = message.content.split(" ");
      let text = args.slice(0).join(" ");
 
      if(message.channel.type === 'dm')
        return bot.channels.get('510861158534742026').send({
          embed: {
            color: "#ffffff",
            description: `Nom: ${message.author.username}#${message.author.discriminator}\nID: ${message.author.id}\nMessage: ${text}`,
            thumbnail: {
              url: message.author.avatarURL
               }
          },
          files: message.attachments.array().map(a => a.url)
        });
    });

      bot.on('guildMemberAdd', member => {
       console.log(`Nouveau Membre ${member.user.tag} Pub depuis ${member.guild.name}.`);
       bot.channels.get("510737761385447424").send(`Nouveau Membre ${member.user.tag} Pub depuis ${member.guild.name}.`);
  
  
  member.createDM().then(channel => {
       switch(Math.round(Math.random() * 5)) {
         case 1:
     setTimeout(function() {
         channel.send("N'hésitez pas à inviter des gens sur **N Σ Θ И** ! :fire: \n\nhttps://discord.gg/uZ9cjBT");
   }, 480000)
         break;
     
         case 2:
     setTimeout(function() {
         channel.send("**N Σ Θ И** est un serveur de **clash**, **events et **prix** à gagner, **rencontres** et encore plus. Rejoins-nous ! :100: \n\nhttps://discord.gg/uZ9cjBT");
   }, 485000)
         break;
     
         case 3:
     setTimeout(function() {
         channel.send("Salut, je t'invite sur mon serveur. Il y a une **super ambiance**, des **events et des prix**, des **clashs** et des gens ultra **sympas** ! :yum:\n\nhttps://discord.gg/uZ9cjBT");
   }, 490000)
         break;
     
         case 4:
     setTimeout(function() {
         channel.send("Coucou, j'aimerais atteindre mon objectif sur mon serveur donc je t'invite à le rejoindre. C'est **très sympa**, **bonne ambiance**, **clash**, **events** et **prix à gagner** etc. :fire:\n\nhttps://discord.gg/uZ9cjBT");
   }, 495000)
         break;
         
         case 5:
     setTimeout(function() {
         channel.send("Je t'invite sur **mon serveur**. J'espère que tu t'y plairas ! :kissing_heart: \n\nhttps://discord.gg/uZ9cjBT");
   }, 500000)
         break;
     }
     return;
  
    }).catch(console.error)
  
  
  
  });

  bot.login(process.env.TOKEN)
