const { REST, Routes } = require("discord.js");
require("dotenv").config();
const link = process.env.LINK;

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "create",
    description: "Create a new short URL",
  }
];

const rest = new REST({ version: "10" }).setToken(
  link
);

(async () => {
  try {
    console.log("Started refresing application (/) commands.");
    await rest.put(Routes.applicationCommands('1297050086890541126'), {
      body: commands,
    });
    console.log("Successfully reloaded appliation (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
