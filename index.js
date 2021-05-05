const { pipeline } = require('stream');
const command = require('./command');
const input_stream = require('./readStream');
const output_stream = require('./writeStream');
const transform_stream = require('./transform')


pipeline(
  input_stream,
  transform_stream,
  output_stream,
  (err) => {
    if (err) {
        console.error('Pipeline failed: ', err);
    } else {
        console.log('Pipeline succeeded.');
    }
  }
)
