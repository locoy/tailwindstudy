const {app, BrowserWindow, session}  = require("electron")

const createWindow = () => {
    const win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences :{
            devTools  : true,
            nodeIntegration :true,
            nodeIntegrationInSubFrames : true,
            session : session.fromPartition('persist:hyy1')
        }
    })

    win.webContents.toggleDevTools();

    win.loadURL('https://admin.huoyuyan.com')

    console.log(win.webContents.session.getStoragePath())
    console.log(session.defaultSession.getStoragePath())

}


app.whenReady().then(() => {
    createWindow();


    const { session } = require('electron');

    const ses = session.fromPartition('persist:my-partition');
    console.log(ses.isPersistent()) // true 
    console.log(ses.getStoragePath()) // /Users/user/Library/Application Support/app/Partitions/my-partition (on macOS)
})