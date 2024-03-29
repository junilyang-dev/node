const keep_alive = require("./keep_alive.js");
const { Client, GatewayIntentBits } = require("discord.js");

// Intents를 GatewayIntentBits를 사용하여 지정
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const token = process.env["DISCORD_BOT_SECRET"];
const channelName = '일반'; // 원하는 채널 이름
const now = new Date();



client.on("ready", () => {
  client.guilds.cache.forEach(guild => {
    console.log(guild.channels.cache);
      let channel = guild.channels.cache.find(c => c.name === channelName && c.type === 0);
      if (channel) {
          channel.send(now.toLocaleString("ko-KR", {timeZone: 'Asia/Seoul'}) + '에도 이쁜 아르미 안녕~❤️');
      }
  });
  
  console.log("I'm in");
  console.log(client.user.username);

});

client.on("messageCreate", (msg) => {
  if(msg.author.bot) return;
  if (msg.author.id != client.user.id) {
    msg.channel.send(msg.content.split("").reverse().join(""));
  }
});
client.login(token);
