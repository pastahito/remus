// Electron's modules
const electron = require('electron')
const {app, Menu, BrowserWindow, dialog, ipcMain} = electron

// App's constants
const path = require('path')
const webAppPath = path.resolve(__dirname, '../renderer_process/index.html')

// Native Menu
const menuTemplate = require('./menu')

// Utils to create chromium windows, and manage app's configuration file
const {newBrowserWindow, saveAppLocale} = require('./utils')

// Allow electron reloads by itself when webpack detects changes in ./app/
require('electron-reload')(__dirname)

// Prevents default window to be garbage collected
let mainWindow

// Shuts down any attempt to open another instance of the app
const shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
    if (mainWindow) return true
})
if (shouldQuit) app.quit()

app.on('ready', () => {

    // Set app's native menu
    Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate))

    // Launches a new chromium window and loads the web app
    mainWindow = newBrowserWindow({restoreWindowState: true})

    // Creates a new window and requests to load certain project in it
    // This new window will have default size and position
    ipcMain.on('load-project-in-new-window', (event, projectPath) => {
        newBrowserWindow({projectPath})
    })

    // When a user changes the language from the menu, in the web app context,
    // this event is emmited
    ipcMain.on('menu-language-updated', (event, {language, code}) => {
        saveAppLocale({language, code})
    })

})
