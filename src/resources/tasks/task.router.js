const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});

router.route('/').post(
async (req, res) => {
    const task = await tasksService.postTask({...req.body, boardId: req.params.boardId});
    res.status(201).json(task);
  }
);

router.route('/:taskId').get(
  
  async (req, res) => {
    const task = await tasksService.getId(req.params.taskId);
    res.status(task ? 200 : 404).json(task);
  }
);

router.route('/:taskId').put(
  async (req, res) => {
      const task = await tasksService.putTask(req.params.taskId, req.body);
      res.json(task);
  }
);

router.route('/:taskId').delete(
  async (req, res) => {
      await tasksService.deleteTask(req.params.taskId);
      res
        .status(204)
        .send(`A user with this Id:"${req.params.taskId}" no delete!!!`);
  }
);

module.exports = router;
