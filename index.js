// This is the entry point for electron
const { app, BrowserWindow, screen } = require('electron');
// require('electron-reload')(__dirname);

const createWindow = () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    window = new BrowserWindow({
        fullscreen: true,
        // width: 640,
        // height: 480,
        webPreferences: {
            nodeIntegration: true
        }
    });

    window.loadFile('public/index.html');
};

let window = null;

app.whenReady().then(createWindow)
app.on('window-all-closed', () => app.quit());