const { v4: uuidV4 } = require('uuid');

class Board {
  constructor({ id = uuidV4(), title, columns }) {
    this.id = id;
    this.title = title;
    this.columns = columns;
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

    console.log(this);
  }
}

module.exports = Board;
