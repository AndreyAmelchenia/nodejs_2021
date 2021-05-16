let TASKS = [];

const getAll = async () => TASKS;

const post = async (task) => {
  await TASKS.push(task)
  return TASKS.find((el)=> el.id === task.id);
};

const getId = async (id) => TASKS.find((el)=> el.id === id);


const put = async (id, taskUpdate) => {
  TASKS.forEach((el)=> el.id === id && el.update(taskUpdate))
  return TASKS.find((el)=> el.id === id);
};

const deleteTask = async (id) => {
  TASKS = TASKS.filter((el)=> el.id !== id)
};

const updateTasksByIdUser = async (userId) => {
  TASKS.forEach((el)=> el.userId === userId && el.updateTasksByIdUser())
}

module.exports = { getAll, post, getId, put, deleteTask, updateTasksByIdUser };
