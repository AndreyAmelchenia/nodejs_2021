const { pipeline } = require('stream');
const command = require('./command');
const input_stream = require('./readStream');
const transform_stream = require('./transform')

console.log('Hello!!!');
// console.log(command);

// console.log(input_stream);
input_stream.pipe(transform_stream).pipe(process.stdout)
