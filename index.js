const spawn = require('child_process').spawn;
var npmCmd = function( args, options){
    return new Promise(function(resolve,reject){
        var command = options.command;
        if (!command) {
            command = process.platform === 'win32'? 'npm.cmd': 'npm';
        }
        var cmd = spawn(command, args, options);
        cmd.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
        cmd.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
            reject(`stderr: ${data}`);
        });
        cmd.on('close', (code) => {
            console.log(`child process exited with code ${command} ${args} ${code}`);
            resolve(`${command} ${args} ${code}`);
        });
    })
}
module.exports = npmCmd;