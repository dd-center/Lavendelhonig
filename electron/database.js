const { join } = require('path')

const { app } = require('electron')

const level = require('level')
const sub = require('subleveldown')

const db = level(join(app.getPath('userData'), './db'), { valueEncoding: 'json' })

const main = sub(db, 'main', { valueEncoding: 'json' })

module.exports = main
