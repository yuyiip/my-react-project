const path = require('path');

module.exports = {
	devBuildPath: path.join(__dirname, 'public'),
	entryPath: path.join(__dirname, './src/index.js'),
	htmlIndexPath: path.join(__dirname, './src/index.html'),
	buildPath: path.join(__dirname, 'build'),
	appPackageJson: path.join(__dirname, 'package.json'),
	appSrc: path.join(__dirname, 'src'),
	appNodeModules: path.join(__dirname, 'node_modules'),
	favIconPath: path.join(__dirname, './src/images/favicon.ico'),
	sdkPath: path.join(__dirname, './src/scripts'),
};
