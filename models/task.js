const { reject } = require('lodash');
const mysql =require('mysql');

// const connection = mysql.connection({
const pool = mysql.createPool({
  host: 'localhost',
  database: 'todo',
  user: 'root',
  password : 'pass' 
});

// connection.connect((err) => {
//   if ( err ) throw err;
// })


class Task {
  static getAll() {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, conn) => {
        if ( err ) throw err;
      
        conn.query('SELECT * tasks WHERE 1', (err, rows) => {
          if ( err ) reject(err);
          resolve(rows);
          conn.release();
        });
      });  
    });
  }

  static add(task) {
    return new Promise ((resolve, reject) => {
      pool.getConnection((err, conn) => {
        if ( err ) reject(err);

        // INSERT INTO tasks SET id=1, title='New order'
        conn.query('INSERT INTO tasks SET ?', task, (err, result) => {
          if ( err ) reject(err);
          resolve(result.insertId);
        });
      });
    });
  } 

  static update(task) {
    return new Promise ((resolve, reject) => {
      pool.getConnection((err, conn) => {
        if ( err ) reject(err);

        conn.query('UPDATE ', task, (err, result) => {
          if ( err ) reject(err);
          resolve(result.insertId);
        })
      })
    })
  }

  static complite(id) {

  }

  static delete(id) {

  }
}

module.exports = Task;