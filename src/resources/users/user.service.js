const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();

const postUser = async body => {
  const user = await new User(body);
  return usersRepo.post(user);
};

const getId = async id => usersRepo.getId(id);

const putUser = async (id, userUpdate) => usersRepo.put(id, userUpdate);


// const getLogin = async login => usersRepo.getLogin(login);





const deleteUser = async id => usersRepo.deleteUser(id);

module.exports = {
  getAll,
  postUser,
  getId,
  putUser,
  deleteUser,
};

