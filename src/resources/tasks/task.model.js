const { v4: uuidV4 } = require('uuid');

class Task {
  constructor({
    id = uuidV4(),
    title = 'string',
    order = 0,
    description = 'string',
    userId = 'string',
    boardId = 'string',
    columnId = 'string'
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  update({id, title, order, description, userId, boardId, columnId}) {
    this.id = id || this.id;
    this.title = title || this.title;
    this.order = order || this.order;
    this.description = description|| this.description;
    this.userId = userId|| this.userId;
    this.boardId = boardId|| this.boardId;
    this.columnId = columnId|| this.columnId;
  }
}

module.exports = Task;
