const { pipeline } = require('stream');
const command = require('./command');
const input_stream = require('./readStream');
const output_stream = require('./writeStream');
const transform_stream = require('./transform')

console.log('Hello!!!');
// console.log(command);

// console.log(input_stream);
input_stream.pipe(transform_stream).pipe(output_stream)
