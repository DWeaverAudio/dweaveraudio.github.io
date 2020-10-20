const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.TOKEN;

client.login(token)

client.on('ready',()=>{
  console.log("heyo!")
})

client.on('message',msg=>{
          let args = msg.content;
          if(args.includes("mss")){
            msg.reply(":D");
          }
})