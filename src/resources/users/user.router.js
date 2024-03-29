const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const {updateTasksByIdUser} = require('../tasks/task.memory.repository');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(
async (req, res) => {
    const user = await usersService.postUser(req.body);
    res.status(201).json(User.toResponse(user));
  }
);

router.route('/:userId').get(
  async (req, res) => {
    const user = await usersService.getId(req.params.userId);
    res.json(User.toResponse(user));
  }
);

router.route('/:userId').put(
  async (req, res) => {
      const user = await usersService.putUser(req.params.userId, req.body);
      res.json(User.toResponse(user));
  }
);

router.route('/:userId').delete(
  async (req, res) => {
      await usersService.deleteUser(req.params.userId);
      await updateTasksByIdUser(req.params.userId);
      res
        .status(204)
        .send(`A user with this Id:"${req.params.userId}" no delete!!!`);
  }
);

module.exports = router;
