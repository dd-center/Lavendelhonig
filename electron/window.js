const { app, BrowserWindow, shell } = require('electron')
let win

const createWindow = async () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hiddenInset',
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.on('closed', () => {
    win = null
  })
  win.webContents.on('new-window', (e, url) => {
    e.preventDefault()
    shell.openExternal(url)
  })

  if (process.env.development) {
    win.show()
    win.loadURL('http://0.0.0.0:32971')
  } else {
    await win.loadFile('out/index.html')
    win.show()
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

createWindow()
