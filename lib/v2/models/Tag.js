/**
 * Copyright(c) 2016 calidion <calidion@gmail.com>
 * Apache 2.0 Licensed
 */
module.exports = {
  connection: 'default',
  identity: 'tag',
  schema: true,
  tableName: 'tag',
  autoUpdatedAt: false,
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    parent: {
      model: 'tag'
    },
    order: {
      type: 'int',
      required: true,
      defaultsTo: 0
    },
    official: {
      type: 'boolean',
      required: true,
      defaultsTo: false
    },
    createdAt: {
      columnName: 'created_at',
      type: 'datetime',
      defaultsTo: Date.now
    }
  }
};
