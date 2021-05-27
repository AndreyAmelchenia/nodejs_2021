const boardsRepo = require('./board.memory.repository');
const Board = require('./board.model');

const getAll = () => boardsRepo.getAll();

const postBoard = async body => {
  const board = await new Board(body);
  return boardsRepo.post(board);
};

const getId = async id => boardsRepo.getId(id);

const putBoard = async (id, boardUpdate) => boardsRepo.put(id, boardUpdate);

const deleteBoard = async id => boardsRepo.deleteBoard(id);

module.exports = {
  getAll,
  postBoard,
  getId,
  putBoard,
  deleteBoard,
};

