const fs = require('fs')
const {stringify} = require('querystring')

const fitxer = 'db/data.json'

const guardarDB = ( data ) => {
    fs.writeFileSync(fitxer, JSON.stringify(data))
}

const llegirDB = ( ) => {
    if (fs.exists(fitxer) {
        const data = JSON.parse(data)
    } else {
        return null
    }
}


module.exports = {
    "guardarDB"
    "llegirDB"
}
