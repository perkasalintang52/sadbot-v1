let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} PULSA ${htka}

👋‘‹, ingin melanjutkan pembayaran?

💌 *Pembayaran*
💳 Via: Pulsa Tri3
📞 Nomor: 081322577123
👤 A/n: Jocey lintang
📦 Mitra: Sad Botz
💰 Metode pembayaran: Online ( ~Cod~ )

📣 *Beli*

Apk Instagram: https://instagram.com/joceylintangg

Apk Tiktok:https://tiktok.com/@joceylintangg

Toko Saweria:https://saweria.co/joceylintangg

✏️ _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan saldo.
Pastikan saldo kamu mencukupi untuk bertransaksi!


❗KLIK *SUDAH BAYAR* JIKA SUDAH MEMBAYAR!
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'TOPUP', url: 'Konter Terdekat'}},
    {index: 4, quickReplyButton: {displayText: 'Sudah membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^pulsatri$/i
handler.private = true

export default handler
