let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;JTxꜱ⁩;;\nFN:⏤͟͟͞͞IKiara\nORG:⏤͟͟͞͞IKiara\nTITLE:\nitem1.TEL;waid=5493625494354:5493625494354\nitem1.X-ABLabel:⏤͟͟͞͞IKiaranX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:⏤͟͟͞͞IKiara\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: '⏤͟͟͞͞IKiara', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler