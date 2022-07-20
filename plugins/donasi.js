let handler = async (m, { conn }) => {
let info = `
*${htki} DONASI ${htka}*

2022 Sad Botz 
`
const sections = [
   {
	title: `METODE`,
	rows: [
	    {title: "?Dana", rowId: '.donasidana', description: 'Bayar melalui Dana' },
	    {title: "?Gopay", rowId: '.donasigopay', description: 'Belum ada' },
	{title: "?Ovo", rowId: '.donasiovo', description: 'Belum ada' },
	{title: "?Motion Pay", rowId: '.donasimotionpay', description: 'Belum ada' },
	{title: "?Pulsa Telkomsel", rowId: '.donasitelkom', description: 'Bayar melalui pulsa' },
	{title: "?Pulsa Tri3", rowId: '.donasiastri', description: 'kosong' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "DONASI",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ðŸŒŽ Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['donasi', 'donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
handler.private = true

export default handler
