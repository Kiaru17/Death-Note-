import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//─────「 NUMEROS - OWNERS 」─────`*

global.owner = [
  ['5493625494354⁩ ', 'Kiari', true],
  ['5493536568522', 'Maxz', true],
  ['']

]

//─────「 NUMEROS - MODS | PREMS 」─────`*

global.mods = []
global.prems = []
   
//─────「 STICKERS | NOMBRES | CANAL 」─────`*

global.packname = ``
global.author = '@ 2024 JTxs | All rigths reserved'

global.botname = 'Sylpha - Bot'

global.name_canal = '@ 2024 JTxs | All rigths reserved'
global.id_canal = '120363274577422945@newsletter'

//─────「 IMAGENES 」─────`*

global.catalogo = fs.readFileSync('./storage/img/catalogo.png')
//global.miniurl = fs.readFileSync('./storage/img/miniurl.jpg')

//─────「 OTROS 」─────`*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: botname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//─────「 LINKS 」─────`*

global.canal = 'https://whatsapp.com/channel/0029Vag2SImCRs1jnnA3Kp35'

//─────「  OTROS 」─────`*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//─────「─────」─────`*

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//─────「─────」─────`*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
