const fs = require('fs');
const path = require('path')
const { input } = require('./command');

module.exports = input 
  ? fs.createReadStream(path.join(__dirname, input), 'utf8')
    .on('error', (err) => process.stderr) 
  : process.stdin;
