const spawn = require('child_process').spawn;
const _ = require('underscore');
var npmCmd = function( args, options){
    console.log(`npm ${args} begin`);
    return new Promise(function(resolve,reject){
        if(options && options.env){
            var env = Object.create( process.env );
            env = _.extend(env, options.env);
            options.env = env;
        }
        var command = options.command;
        if (!command) {
            command = process.platform === 'win32'? 'npm.cmd': 'npm';
        }
        console.log(command, args, options);
        var cmd = spawn(command, args, options);
        cmd.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
        cmd.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
            //reject(`stderr: ${data}`);
        });
        cmd.on('close', (code,signal) => {
            console.log(`CLOSE ${signal}'s code is ${code}`);
            resolve(`CLOSE ${signal}'s code is ${code}`);
        });
        cmd.on('error', (error) => {
            console.log('REEOR');
            console.log(error);
        });
        cmd.on('exit', (code,signal) => {
            console.log(`EXIT ${signal}'s code is ${code}`);
        });
        cmd.on('message', (message) => {
            console.log('MESSAGE');
            console.log(message);
        });
    })
}
module.exports = npmCmd;