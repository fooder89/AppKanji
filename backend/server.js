// Create express app
var express = require("express");
var app = express();
/*var db = require("./database.js");
var md5 = require("md5");*/

/*****************************/
//const API_PORT = 8001;
const session    = require("express-session");
/*****************************/

const path         = require('path');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const cors         = require('cors');


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// default value for title local
//app.locals.title = 'Express - Generated with IronGenerator';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*****************************/
// Enable authentication using session + passport
app.use(session({secret: 'tfgappkanji',saveUninitialized: true,resave: true}))

// require('./passport')(app);
/*****************************/

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3001'],
}));

const index = require('./routes/index');
app.use('/', index);


/*****************************/
//app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
/*****************************/


// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/**
// Server port
var HTTP_PORT = 8000 
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});
**/
/**
// Insert here other API endpoints
app.get("/api/loguser/:name:password", (req, res, next) => {
    var sql = "select * from usuarios where name=? and pass=?"
    var params = [req.params.name, req.params.pass]
    db.get(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

app.get("/api/kanji/:lvl", (req, res, next) => {
    var sql = "SELECT kanjidict.kanji as kanji, kanjidict.meaning as meaning, codepoints.decimal as decimal from kanjidict inner join codepoints on kanjidict.kanji=codepoints.kanji where strokes = ?"
    var params = [req.params.lvl]
    db.all(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
});


app.post("/api/reguser/", (req, res, next) => {
    var errors=[]
    if (!req.body.password){
        errors.push("No password specified");
    }
    if (!req.body.name){
        errors.push("No username specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        name: req.body.name,
        password : md5(req.body.password)
    }
    var sql ='INSERT INTO usuarios (name, password, 1, 0) VALUES (?,?)'
    var params =[data.name, data.password]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
})
**/
// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


module.exports = app;

// const { DatabaseAPI } = require('./database')
// const dbMeta = require('./dbSchema')
// const DB_PATH = './kanjidb.sqlite'
// 
// var DB = new DatabaseAPI(DB_PATH, dbMeta.dbSchema)
// 
// // RUN QUERY  ==================================================================
// DB.registerUser("usuario", "pass")
// // DB.registerUser("newuser2", "pass", "test@test4827.com")
// // DB.registerUser("newuser3", "pass", "test@test5830.com")
// 
// // GET QUERY  ==================================================================
// function printUserEmail(userInfo) {
//     console.log(userInfo.nombre, userInfo.password, userInfo.nivel, userInfo.experiencia)
// }
// 
// DB.findUserByLogin('usuario','pass', printUserEmail)
// // ALL QUERY  ==================================================================
// function listUserEmails(userEmails) {
//     userEmails.forEach(kanji => {
//         console.log(kanji)
//     });
// }
// 
// DB.getKanjiByLevelAll(1,listUserEmails)
// 
// // EACH QUERY  =================================================================
// // DB.getUserEmailsEach(printUserEmail)