var npmCmd = require('../index.js');
var options = {cwd:'ex'};
var co = require('co');
co(function *(){
    yield npmCmd(['install'], options);
    //yield npmCmd(['run','build'], options);
    console.log('success');
});
