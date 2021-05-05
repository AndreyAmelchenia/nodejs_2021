module.exports = (chunk, shift, coder) => {
  if(!(coder === 'encode') && !(coder === 'decode')) {
    process.stderr.write('Error: action possible encode or decode!!!');
    process.exit()
  }
  const shiftCoder = coder === 'encode' ? shift % 26 : coder === 'decode' && -(shift % 26)
  return chunk.map((element) => {
    if(element >= 65 &&  element <= 90) {
      if(element + shiftCoder < 65) {
        return element + shiftCoder + 26;
      }
      if(element + shiftCoder > 90) {
        return element + shiftCoder - 26;
        }
      return element + shiftCoder
    }
    if(element >= 97 &&  element <= 122) {
      if(element + shiftCoder < 97) {
        return element + shiftCoder + 26;
        }
      if(element + shiftCoder > 122) {
        return element + shiftCoder - 26;
      }
      return element + shiftCoder
    }
    return element
  });
}