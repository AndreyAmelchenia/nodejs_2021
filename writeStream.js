const fs = require('fs');
const path = require('path');
const { output } = require('./command');


let output_stream;
if(output) {
  const existFile = fs.existsSync(path.join(__dirname, output));
  if(existFile){
    output_stream = fs.createWriteStream(path.join(__dirname, output), {flags: 'a+'})
  } else {
    process.stderr.write(`Error: not exist file ${output}`);
    process.exit();
  }
} else {
  output_stream = process.stdout;
}

module.exports = output_stream;
