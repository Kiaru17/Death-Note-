let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Kiara;;\nFN:Kiara\nORG:JTxꜱ\nTITLE:\nitem1.TEL;waid=5493625494354⁩:5493625494354⁩ \nitem1.X-ABLabel:Kiara\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:Kiara\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Kiara', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
