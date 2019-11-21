(async () => {
  const { app } = require('electron')
  const { once } = require('events')

  await once(app, 'ready')

  require('./window')
  require('./updater')

  require('./database')
})()
