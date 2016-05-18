# npm-spawn

- Use npm programmatically

- [Why not use like var npm = reuqire('npm')](https://github.com/npm/npm/issues/8283)

## In Cli

```sh
npm install
```sh

## In npm-spawn

```javascript
var npmCmd = require('npm-spawn');
npmCmd(['install'], options)
```javascript

## Examples
- npm install => npmCmd(['install'])
- npm run build => npmCmd(['run','build])

### args
npm install ['install']
npm run build ['run', 'build']

### Options
[More Options](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)

format like below:
```javascript
var options = {cwd:'src'};
```javascript


command <String> The command to run
args <Array> List of string arguments
options <Object>
cwd <String> Current working directory of the child process
env <Object> Environment key-value pairs
stdio <Array> | <String> Child's stdio configuration. (See options.stdio)
detached <Boolean> Prepare child to run independently of its parent process. Specific behavior depends on the platform, see options.detached)
uid <Number> Sets the user identity of the process. (See setuid(2).)
gid <Number> Sets the group identity of the process. (See setgid(2).)
shell <Boolean> | <String> If true, runs command inside of a shell. Uses '/bin/sh' on UNIX, and 'cmd.exe' on Windows. A different shell can be specified as a string. The shell should understand the -c switch on UNIX, or /s /c on Windows. Defaults to false (no shell).
return: <ChildProcess>