let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Rama Ganz
╠➥ Script: @rama_officials
║
╠➥ Github: https://github.com/Arya274/Arya-Bot
╠➥ Instagram: @rama_officials
╠➥ YouTube: Bang Dimas Ultra
║
╠═〘 Thanks To 〙 ═
╠➥ RamaGanz
╠➥ PanduGanz
╠➥ ZanGanz
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ XL: 081-903-431-110
╠➥ Tsel: 0813-5730-2007
╠➥ Tsel: 0815-1586-0089
║
║>Request? Wa.me/6281903431110
║
╠═〘 NfQ BOT 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

