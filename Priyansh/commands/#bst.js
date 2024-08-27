const fs = require("fs");
module.exports.config = {
  name: "best couple",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Best couple") ||
     react.includes("best couple") || react.includes("best couple") || react.includes("best couple") ||
react.includes("best couple") ||
react.includes("best couple for fb") ||     
react.includes("Best couple for Facebook")) {
    var msg = {
        body: `${name} 💕हम वो नहीं जो तुम्हे गम में छोड़ देंगे,💖
हम वो नहीं जो तुजसे नाता तोड़ देंगे,💞
हम वो है जो तुम्हारी साँसे रुके तो,
अपनी साँसे छोड़ देंगे!!💐✿
🇼 🇴 🇷 🇱 🇩 💕 🇰 🇪  🇧 🇪 🇸 🇹 💖 🇨 🇴 🇺 🇵 🇱 🇪 😻 🇲 🇾  🇧 🇴 🇴 🇸 💓  YUVI 💞 🇦 🇳 🇩 💋 MAHI  `,attachment: fs.createReadStream(__dirname + `/noprefix/bst.png`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
