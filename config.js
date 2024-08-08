const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2349131808050" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349131808050";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349131808050,234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";
SUHAIL_22_01_

global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_01_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjksXG4gICAgICAgIDgyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDgyLFxuICAgICAgICA5MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjExLFxuICAgICAgICA5NixcbiAgICAgICAgMTksXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDMwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNixcbiAgICAgICAgMjQwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3OCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU0LFxuICAgICAgICA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIndaN0JhcU9wUkowNW5iRUYwbE1QV2FMa0Y2SkxOQjdZdkJqOWFidVlMUm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBKQmphVjVmU0VtUkcwRV9YTnZlUUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWZiMTFkNTQtZjI1Zi00Y2QxLWI4NTktZTBiN2QwODYyYTUzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNixcbiAgICAgIDUxLFxuICAgICAgMjE1LFxuICAgICAgNzQsXG4gICAgICA5MixcbiAgICAgIDIyMixcbiAgICAgIDIzOSxcbiAgICAgIDExMyxcbiAgICAgIDEzOCxcbiAgICAgIDIzOCxcbiAgICAgIDI0MixcbiAgICAgIDE1OSxcbiAgICAgIDU2LFxuICAgICAgMTIyLFxuICAgICAgMTQxLFxuICAgICAgMTczLFxuICAgICAgMTAxLFxuICAgICAgNzUsXG4gICAgICA0NCxcbiAgICAgIDk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MyxcbiAgICAgIDEzNixcbiAgICAgIDE0NSxcbiAgICAgIDQ5LFxuICAgICAgNDksXG4gICAgICAzMixcbiAgICAgIDgyLFxuICAgICAgMTMyLFxuICAgICAgMjI0LFxuICAgICAgMTU3LFxuICAgICAgNTUsXG4gICAgICAxNjQsXG4gICAgICA4MSxcbiAgICAgIDI1NCxcbiAgICAgIDE0OCxcbiAgICAgIDE0LFxuICAgICAgMjEzLFxuICAgICAgMCxcbiAgICAgIDEyMCxcbiAgICAgIDIwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNRlAyWlpaMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzMTgwODA1MDo5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA2MzU2MjMzNTk3MDA3Ojk0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05xbWd1OFBFTUNYeGJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNmVqRWNPSExMYzdDbFdNRExhV0lWNGNqYld4TEdGbUp2aGM2UkJGclpWOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDVWt0dkoxdThIamptS2dHNlhmNlVqNmtPUS96MmtKY0RGcXB3aVRnMitiTzRNdWFCMEN3aFVCNHh1Uy9UVTBPa01QOFA2RGVpUUhnSldibUxxRnBqdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5K0Z5clZHaXppeFUvREFjaTZMU1A0TlZmWnAwSmpJUWRRbmlWSEE2QkluSG5QZzJVRE9QR3UySjRhS2FuWitTd3JvallwdEcxdExXT3dYYTY4dE5ndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTMxODA4MDUwOjk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI4OTUzMDFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝗜cεε 𝗕",
  packname: process.env.PACK_NAME || "sticker by...",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝗜cεε 𝗕",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
