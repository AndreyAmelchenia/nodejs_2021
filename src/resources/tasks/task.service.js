const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getAll = () => tasksRepo.getAll();

const postTask = async body => {
  const task = await new Task(body);
  return tasksRepo.post(task);
};

const getId = async id => tasksRepo.getId(id);

const putTask = async (id, taskUpdate) => tasksRepo.put(id, taskUpdate);

const deleteTask = async id => tasksRepo.deleteTask(id);

module.exports = {
  getAll,
  postTask,
  getId,
  putTask,
  deleteTask,
};

