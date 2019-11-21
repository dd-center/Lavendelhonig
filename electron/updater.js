const { autoUpdater } = require('electron-updater')

autoUpdater.logger = console
autoUpdater.setFeedURL('https://dd.center/api/update/lavender/')

autoUpdater.checkForUpdates()

setInterval(() => {
  autoUpdater.checkForUpdates()
}, 1000 * 60 * 60)

module.exports = autoUpdater
