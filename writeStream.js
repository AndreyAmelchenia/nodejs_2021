const fs = require('fs');
const path = require('path')
const { output } = require('./command');

fs.access(path.join(__dirname, output), )

module.exports = output 
  ?  fs.createWriteStream(path.join(__dirname, output), {flags: 'a+'}).on('open', (err) => console.log(err))
  : process.stdout;