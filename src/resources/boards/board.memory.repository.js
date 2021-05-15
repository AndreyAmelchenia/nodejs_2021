let BOARDS = [];

const getAll = async () => BOARDS;

const post = async (board) => {
  await BOARDS.push(board)
  return BOARDS.find((el)=> el.id === board.id);
};

const getId = async (id) => BOARDS.find((el)=> el.id === id);


const put = async (id, boardUpdate) => {
  BOARDS.forEach((el)=> el.id === id && el.update(boardUpdate))
  return BOARDS.find((el)=> el.id === id);
};

const deleteBoard = async (id) => {
  BOARDS = BOARDS.filter((el)=> el.id !== id)
};

module.exports = { getAll, post, getId, put, deleteBoard };
