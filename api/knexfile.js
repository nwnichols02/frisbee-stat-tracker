module.exports = {
    development: {
      client: 'sqlite3',
      useNullAsDefault: true,
      connection: {
        filename: './database/players2022.db3',
      },
      pool: {
        afterCreate: (conn, done) => {
          conn.run('PRAGMA foreign_keys = ON', done)
        },
      },
      migrations: {
        directory: './database/migrations',
      },
      seeds: {
        directory: './database/seeds',
      },
    },
  }
  