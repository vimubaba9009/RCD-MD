//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495,94753574803";
global.owner = process.env.OWNER_NUMBER || "94781226144,94781226144";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU1vYWk2RStweEtzVmZ5ZGw1L0daYmVYOWVwQVdnRzZxM1ZaNU5iaHBubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnhIR2ozQUtoOCsrWWVYaGJBNERlVjhsZ1pSaHo3WmlmNDU2Mk52TWxEbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Q1p3SGp3VTFXRzYyWlZUTGQwRWlOeGVJbGVPNGJNbTMrMkhJczR2bG1ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYTnRhem5rbnVhNC9JVmV3bXZUdG1FTG9EYnk3YU9Cdk9nNW82VDR2YjA4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNDVWJkY21jU25mclhKRlk2YVBUcmY1RkI5NmJIUWsxMUgyRDAydjJyVmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjIzRy91dFNlbStCR2JsRUJBNWZjbzFhWDBCNkFZQkVDb3NoRDFoTERTV1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1BxcDRqSHJNcEZKem1kcENqaXNjdUVGbnBNN2t2aXU1cFcreWhwMENWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3ltUVJqVkFGZHFMWExPZU9rVGpFNEw3Z0xIYWRnYjhLVEYxVlZabkFFMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Illzd2pSMTJGY0JERGp1SHErWG5yb0Q3THdYWlVPdjZXOVFhR3FqL3R2Zk1XQnBVR0hnMkV2a1RFSXNCSXlBWGllTFI5TEFJSk5JV0VmaWt4Qkw3R0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYsImFkdlNlY3JldEtleSI6IlZuMTh5RWJ3Qi9GTzliaUVoc09XL0ZLSFIwK2hUOWo3MWhseVByTVZGRUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODEyMjYxNDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREJDQUZBNjZBNEUyNUMxNTE1QUZBNTEzQjNEOEY5QjMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTgxNTkwOH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVktKcXVabGRRSlNfYjdIemNKekoyZyIsInBob25lSWQiOiI4OWYxYzVlNy04MTdiLTQwOGUtYjBlMi1mYjlhNTRiOWE2NDEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3pLUUlWbE1TTWJubUdDQmVOSExIWkg3WXB3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndKOGtTbGUxT3IyNGtVQ2I5M1h6dXRFN1FjUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJWQVQ1VlBLMSIsIm1lIjp7ImlkIjoiOTQ3ODEyMjYxNDQ6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCC8J2QmPCdkIHwnZCE8J2QkSAgIPCdkJXwnZCI8J2QjPCdkJQgIPCdkIjwnZCDXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxu8J2QiPCdkIMgIPCdkJXwnZCI8J2QjPCdkJQgIPCdkIHwnZCH8J2QhyBcblxuXG5cblxuXG5cblxuXG7wnZCE8J2QhPCdkJEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tucnlmRUdFTldtZzdVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9tNTdvM3VLMzdUcS95Y2hyL1Yza2hFaHJnOVZVcWJKK09zMnd5eDF2UlU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjY5NEJjZklJdDNwYkNVcVdJSWVSUmJIbWZQUmFXSE9oR045NUduZDJUQ2EvcnJhcmozYS9EclczdXZFREdMdVlxM2w3NGpjTXZVbVpGTTFRazhmaEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvSWlDWktKZUNrTHI3N0Z5bEVDT3pVLzRFbkNvdjdzNlh3NDdiS2g2Z0JqckkvUDFxVWpkSWpXVk1tSmJsMDd2NVVPeXVvZEx5SFV3OTFKTWpvaGpBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzgxMjI2MTQ0OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZjV1ZTZON2l0KzA2djhuSWEvMWQ1SVJJYTRQVlZLbXlmanJOc01zZGIwViJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTgxNTkwNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMVDQifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "V ɪ  m u  🐼💗🖇️",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
