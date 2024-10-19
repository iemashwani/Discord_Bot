const { REST, Routes } = require("discord.js");

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
  "MTI5NzA1MDA4Njg5MDU0MTEyNg.GJBEzJ.7P4IVTLZHs-kHt79wCiZt_u8SU-O055ge9YhCw"
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
