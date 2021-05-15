const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/').post(
async (req, res) => {
    const board = await boardsService.postBoard(req.body);
    res.status(201).json(board);
  }
);

router.route('/:boardId').get(
  
  async (req, res) => {
    const board = await boardsService.getId(req.params.boardId);
    res.status(board ? 200 : 404).json(board);
  }
);

router.route('/:boardId').put(
  async (req, res) => {
      const board = await boardsService.putBoard(req.params.boardId, req.body);
      res.json(board);
  }
);

router.route('/:boardId').delete(
  async (req, res) => {
      await boardsService.deleteBoard(req.params.boardId);
      res
        .status(204)
        .send(`A user with this Id:"${req.params.boardId}" no delete!!!`);
  }
);

module.exports = router;
