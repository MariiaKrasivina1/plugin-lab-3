const vscode = require('vscode')

/** @param {vscode.ExtensionContext} context */
async function activate(context) {
 let disposable = vscode.commands.registerCommand(
  "pluginlab3.googlesearch",
  async function () {
   const name = await vscode.window.showInputBox({
    placeHolder: "Search in Google",
    prompt: "Search my snippets on Codever",
    value: ""
   })

   vscode.env.openExternal('https://www.google.com/search?q=' + name)
  }
 )

 context.subscriptions.push(disposable)
}
function deactivate() {}

module.exports = {
 activate,
 deactivate
}