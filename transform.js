const { Transform } = require('stream');
const caesar  = require('./caesar.js');
const { action, shift } = require('./command');

class T extends Transform {
  constructor(shift, code) {
    super();
    this.shift = shift;
    this.code = code;
  }
  _transform(chunk, encoding, done) {
    try{
      if(!this.code && !this.shift) {
        throw 'No action and shift!!!'
      }
      if(!this.code) {
        throw 'No action!!!'
      }
      if(!this.shift) {
        throw 'No shift!!!'
      }
      this.push(caesar(chunk, this.shift, this.code), encoding);
      done();  
    } catch (err) {
      done(err);
    }
  }
  _flush(done) {
    this.push('\n');
    done();
  }
};

module.exports = new T(+shift, action)