// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs')
const ReactDOMServer = require('react-dom/server')
const babel = require("@babel/core");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "jsx2svg" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('jsx2svg.convert', async function ({ fsPath, ...args }) {
		
		const jsx = fs.readFileSync(fsPath).toString();
		try {

			const match = fsPath.match(/(.*)\/(.*)\.js$/)
			const path = match[1]
			const inputFile = match[2]
			const configuration = vscode.workspace.getConfiguration('jsx2svg')
			let projectFolder = ''

			vscode.workspace.workspaceFolders.forEach(folder => {
				const match = fsPath.match(new RegExp(folder.uri.path))
				if(match) {
						projectFolder = folder.uri.path
				}
			})

			const compiledJsx = await babel.transformAsync(jsx, {
				"presets": [require('@babel/preset-env'), require("@babel/preset-react")]
			})

			fs.writeFile(`${__dirname}/template.js`, compiledJsx.code, (err) => {

				delete require.cache[require.resolve('./template')];
				const input = require('./template')

				Object.keys(input).forEach(exportedFunction => {
					const appHTML = ReactDOMServer.renderToString(
						input[exportedFunction]()
					);
	
					const fileName = exportedFunction === 'default' ? inputFile : exportedFunction
					const outputPath = configuration.outputFolder ? `${projectFolder}/${configuration.outputFolder}` : path
					const outputFile = `${outputPath}/${fileName}.svg`
					fs.access(outputFile, fs.F_OK, (err) => {
						if(err) {
							fs.writeFile(outputFile, appHTML, (err) => {
								if(configuration.outputFolder) {
									vscode.window.showInformationMessage(`${fileName}.svg written to ${configuration.outputFolder}`)
								}
								if (err) {
									vscode.window.showErrorMessage(err)
								}
							})
						} else {
							vscode.window.showErrorMessage(`Conversion failed. ${fileName}.svg already exists.`)
						}
					})
				})
				
				if (err) {
					vscode.window.showErrorMessage(err)
					return
				}
			})
		} catch (e) {
			vscode.window.showErrorMessage(e.message)
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
