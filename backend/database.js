const sqlite3 = require('sqlite3').verbose();
const md5 = require('md5');

const DB_PATH = './kanjidb.sqlite'

let db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE IF NOT EXISTS usuarios (
		id integer NOT NULL PRIMARY KEY,
		nombre text NOT NULL UNIQUE,
		password text NOT NULL,
		nivel integer NOT NULL,
		experiencia integer NOT NULL
		);`//,
        /*(err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
                db.run(insert, ["admin","admin@example.com",md5("admin123456")])
                db.run(insert, ["user","user@example.com",md5("user123456")])
            }*/
        //}
		);  
    }
});

/*export function findOne(username){
	var sql = "select * from usuarios where nombre=?"
    var params = username
    db.get(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
		res.status(200).json({
            "message":"success",
            "data":rows
        })
	}
}

export function findById(id){
	var sql = "select * from usuarios where id=?"
    var params = id
    db.get(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
		res.status(200).json({
            "message":"success",
            "data":rows
        })
	}
}*/

module.exports = db
 
// function DatabaseAPI(DB_PATH, dbSchema) {
//     const DB = new sqlite3.Database(DB_PATH, function(err){
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             console.log('Connected to ' + DB_PATH + ' database.')
// 
//             DB.exec('PRAGMA foreign_keys = ON;', function(error)  {
//                 if (error){
//                     console.error("Pragma statement didn't work.")
//                 } else {
//                     console.log("Foreign Key Enforcement is on.")
//                 }
//             });
//         });
// 
//     DB.exec(dbSchema, function(err){
//         if (err) {
//             console.log(err)
//         }
//     });
// 
// 
//     return {
//         registerUser: function(nombre, password) {
//             var sql= "INSERT INTO usuarios (nombre, password, nivel, experiencia) "
//             sql += "VALUES (? ,?, 1, 0) "
// 
//             DB.run(sql, [nombre, md5(password)], function(error) {
//                 if (error) {
//                     console.log(error)
//                 } else {
//                     console.log("Last ID: " + this.lastID)
//                     console.log("# of Row Changes: " + this.changes)
//                 }
//             });
//         },
//         findUserByLogin: function(user_login, password, _callback) {
//             var sql = 'SELECT * '
//             sql += 'FROM usuarios '
//             sql += 'WHERE nombre = ? AND password = ?'
// 
// 
//             DB.get(sql, [user_login, md5(password)], function(error, row) {
//                 if (error) {
//                     console.log(error)
// 					res.status(400).json({"error":error.message});
//                     return
//                 }
// 				
//                 _callback(row)
//             });
//         },
//         getKanjiByLevelAll: function(nivel, _callback) {
//             var sql = 'SELECT * '
//             sql += 'FROM kanjidict WHERE strokes = ?'
// 
//             DB.all(sql, nivel, [], function(error, rows) {
//                 if (error) {
//                     console.log(error)
//                     return
//                 }
// 
//                 _callback(rows)
//             });
//         },
//         /*getUserEmailsEach: function(_callback) {
//             var sql = 'SELECT email '
//             sql += 'FROM Users '
// 
//             DB.each(sql, [], function(error, row){
//                 if (error) {
//                     console.log(error)
//                     return
//                 }
// 
//                 _callback(row)
//             });
//         }*/
//     }
// }
// 
// module.exports = { DatabaseAPI }