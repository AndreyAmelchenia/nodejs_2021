const { v4: uuidV4 } = require('uuid');

class Board {
  constructor({
    id = uuidV4(),
    title = 'string',
    columns = [
      {
        id: uuidV4(),
        title: 'string',
        order: 0
      }
    ]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  update({id, title, columns}) {
    this.id = id || this.id;
    this.title = title || this.title;
    this.columns = columns || this.columns;
  }
}

module.exports = Board;
