const keep_alive = require("./keep_alive.js");
const { Client, GatewayIntentBits } = require("discord.js");

// Intents를 GatewayIntentBits를 사용하여 지정
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

const token = process.env["DISCORD_BOT_SECRET"];

client.on("ready", () => {
  console.log("I'm in");
  console.log(client.user.username);
});

client.on("messageCreate", (msg) => {
  if (msg.author.id != client.user.id) {
    console.log(msg);
    //msg.channel.send(msg.content.split("").reverse().join(""));
  }
});

// client.on("messageCreate", (msg) => {
//   // 봇이 자신의 메시지에 반응하지 않도록 함
//   if (msg.author.bot) return;

//   // 사용자가 보낸 메시지 내용을 콘솔에 출력
//   console.log(msg.content);

//   // 사용자가 특정 메시지를 보냈을 때 반응하도록 설정
//   if (msg.content === "안녕") {
//     msg.channel.send("안녕하세요!");
//   }
// });
client.login(token);