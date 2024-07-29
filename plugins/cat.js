const { smd } = require("../lib");
const { Client } = require("venom-bot");

const client = new Client();

client.initialize();

smd(
  {
    cmdname: "kill",
    desc: "Report a bug and send a message to a specified WhatsApp number!",
    type: "misc",
    filename: __filename,
  },
  async (m) => {
    try {
      // Assuming the command is "!bug <number>"
      const args = m.body.split(" ");
      if (args.length < 2) {
        return m.reply("Please provide a WhatsApp number.");
      }

      const phoneNumber = args[1]; // Extract the phone number
      const message = "Hello";

      // Send a confirmation message to the user who issued the command
      await m.reply(`Sending message to ${phoneNumber}: "${message}"`);

      // Send the message to the specified WhatsApp number
      await client.sendText(`${phoneNumber}@c.us`, message);

      await m.reply(`Message sent to ${phoneNumber}`);
    } catch (e) {
      m.error(`${e}\n\nCommand: bug`, e, false);
    }
  }
);
