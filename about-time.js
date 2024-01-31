import ms from 'ms'
import fs from 'fs'

aboutTime()
function aboutTime() {
    fs.readFile('data/timestamps.txt', 'utf8', (err, contents) => {
        if (err) return console.log('Cannot read file')

        const lines = contents.split('\n').map(line => line.trim())
        console.log('lines: ', lines)

        lines.map(line => {
            console.log(ms(+line, { long: true }))
        })
    })
    console.log('after calling readFile')
}