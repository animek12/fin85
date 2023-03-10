import {
    youtubeSearch
} from '@bochilteam/scraper'

let handler = async (m, {
    conn,
    usedPrefix,
    text,
    args,
    command
}) => {
    let name = await conn.getName(m.sender)

    if (!text) throw 'Cari apa?'
    let cari = await youtubeSearch(`${text}`)
    let dapet = cari.video
    let listSections = []
    Object.values(dapet).map((v, index) => {
        listSections.push([index + ' ' + cmenub + ' ' + v.title, [
            ['Video š„', usedPrefix + 'ytv ' + v.url + ' yes', '\nā *Duration:* ' + v.durationH + '\nā²ļø *Uploaded:* ' + v.publishedTime + '\nšļø *Views:* ' + v.view + '\nš *Url:* ' + v.url],
            ['Audio š§', usedPrefix + 'yta ' + v.url + ' yes', '\nā *Duration:* ' + v.durationH + '\nā²ļø *Uploaded:* ' + v.publishedTime + '\nšļø *Views:* ' + v.view + '\nš *Url:* ' + v.url]
        ]])
    })
    return conn.sendList(m.chat, htki + ' šŗ YT Search š ' + htka, `ā” Silakan pilih YouTube Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `āļø YouTube Search Disini āļø`, listSections, m)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^y(outubesearch|ts(earch)?)$/i

export default handler