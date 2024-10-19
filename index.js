const { Client, GatewayIntentBits, userMention } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "Generating Short ID for " + url,
    });
  }
  message.reply({
    content: "Welcome to the Server",
  });
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("Pong!");
});

client.login(
  "MTI5NzA1MDA4Njg5MDU0MTEyNg.GJBEzJ.7P4IVTLZHs-kHt79wCiZt_u8SU-O055ge9YhCw"
);
