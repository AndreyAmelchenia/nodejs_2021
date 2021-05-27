let USERS = [];

const getAll = async () => USERS;

const post = async (user) => {
  await USERS.push(user)
  return USERS.find((el)=> el.id === user.id);
};

const getId = async (id) => USERS.find((el)=> el.id === id);


const put = async (id, userUpdate) => {
  USERS.forEach((el)=> el.id === id && el.update(userUpdate))
  return USERS.find((el)=> el.id === id);
};

const deleteUser = async (id) => {
  USERS = USERS.filter((el)=> el.id !== id)
};

module.exports = { getAll, post, getId, put, deleteUser };
