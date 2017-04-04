// Description:
//   Generate awesome OpenSource project names right from Hubot
//
//  Dependencies:
//    foswig
//    ./names
//
// Commands:
//   hubot libname
//
// Author:
//   @jorgeepunan

var foswig = require('foswig');
var data = require('./names');

module.exports = function(robot) {

  robot.respond(/libname/i, function(msg) {

    var chain = new foswig(3);
    chain.addWordsToChain(data.names)

    msg.send(chain.generateWord(5, 20, false)); // min 5 max 20 letters

  });
};
