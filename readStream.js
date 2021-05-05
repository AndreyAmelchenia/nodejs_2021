const fs = require('fs');
const path = require('path')
const { input } = require('./command');

let input_stream;
if(input) {
  const existFile = fs.existsSync(path.join(__dirname, input));
  if(existFile) {
    input_stream = fs.createReadStream(path.join(__dirname, input), 'utf8')
  } else {
    process.stderr.write(`Error: not exist file ${input}`);
    process.exit();
  }
} else {
  input_stream = process.stdin;
}

module.exports = input_stream
