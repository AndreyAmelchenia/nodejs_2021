const { v4: uuidV4 } = require('uuid');

class User {
  constructor({
    id = uuidV4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  update({id, name, login, password}) {
    this.id = id || this.id;
    this.name = name || this.name;
    this.login = login || this.login;
    this.password = password|| this.password;
  }
}

module.exports = User;
