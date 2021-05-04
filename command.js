function isArg(arg) {
  switch (arg) {
    case '-s':
      return true;
    case '--shift':
      return true;
    case '-i':
      return true;
    case '--input':
      return true;
    case '-o':
      return true;
    case '--output':
      return true;
    case '-a':
      return true;
    case '--action':
      return true;
    default:
      return false;
  }
}

function nameArg(arg) {
  switch (arg) {
    case '-s':
      return 'shift';
    case '--shift':
      return 'shift';
    case '-i':
      return 'input';
    case '--input':
      return 'input';
    case '-o':
      return 'output';
    case '--output':
      return 'output';
    case '-a':
      return 'action';
    case '--action':
      return 'action';
    default:
      return false;
  }
}
const initArguments = {
  shift: false,
  input: false,
  output: false,
  action: false,
}
const arguments = process.argv.reduce((acc, item, index, arr) => {
  if(isArg(item)) {
    return { ...acc, [nameArg(item)]: !isArg(arr[index + 1]) ? arr[index + 1] || false : false}
  };
  return acc;
}, initArguments);

module.exports = arguments;
