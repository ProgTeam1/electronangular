const {app, BrowserWindow, nativeImage} = require('electron'),
		path = require('path'),
		url = require('url');

function createWindow(){

	let window = new BrowserWindow({
		titleBarStyle: 'default',
		width: 1025,
		height: 775,
		minHeight: 500,
  		minWidth: 500,
		resizable: true,
  		show: true
	});

	window.once('ready-to-show', function(){
		window.show();
	});

	// window.webContents.openDevTools();

	window.loadURL(
		url.format({
			pathname: path.join(__dirname, 'dist/index.html'),
			protocol: 'file:',
			slashes: true
		})
	);

	window.setMenu(null);

	window.on('closed', ()=>{
		window = null;
	});
}

app.on('ready', createWindow);