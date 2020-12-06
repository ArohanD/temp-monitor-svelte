// This is the entry point for electron
const { app, BrowserWindow, screen } = require('electron');
require('electron-reload')(__dirname);

const createWindow = () => {

    window = new BrowserWindow({
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    window.loadFile('public/index.html');
};

let window = null;

app.whenReady().then(createWindow)
app.on('window-all-closed', () => app.quit());