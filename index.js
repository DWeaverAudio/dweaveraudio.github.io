const Discord = require('discord.js');
const client = new Discord.Client();

const token ='NzY3OTc1ODk5Nzg2MTE3MTQx.X45vSg.TPaXabryOoTWy9CmgFNuB9sDX48'

client.login(token)

client.on('ready',()=>{
  console.log("Whaddup");
})
