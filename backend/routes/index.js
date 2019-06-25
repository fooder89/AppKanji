const express = require('express');
const router = express.Router();
//const MySQL = require("mysql")
var db = require("../database.js");
var md5 = require("md5");

/*router.get('/ds', (req, res, next) => {
      res.status(200).json(DS)
});
router.get('/ep', (req, res, next) => {
  res.status(200).json(EP)
});*/

//Root endpoint
router.get("/", (req, res, next) => {
    res.status(200).json({"message":"Ok"})
});

//router.use('/api/auth', require('./auth'));

// Insert here other API endpoints
router.post("/api/loguser/", (req, res, next) => {
    console.log("server POSt Loguser")
	var errors=[]
    if (!req.body.pass){
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
        pass : md5(req.body.pass)
		//pass : req.body.pass
    }
    console.log(data)
    var sql = "select * from usuarios where nombre=? and password=?"
    var params =[data.name, data.pass]
    db.get(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
		//res.redirect('http://localhost:3001/main')
        res.status(200).json({
            "message":"success",
            "data":rows
        })
		//res.render('redirectmain',{data:JSON.stringify(rows)})
      });
	  
});


router.get("/api/kanji/:lvl", (req, res, next) => {
    var sql = "SELECT kanjidict.kanji as kanji, kanjidict.meaning as meaning, codepoints.decimal as decimal from kanjidict inner join codepoints on kanjidict.kanji=codepoints.kanji where strokes <= ?"
    var params = [req.params.lvl]
    db.all(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.status(200).json({
            "message":"success",
            "data":row
        })
      });
});


router.post("/api/reguser/", (req, res, next) => {
	console.log("estamos en el servidor");
    var errors=[]
    if (!req.body.pass){
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
        pass : md5(req.body.pass)
    }
    var sql ='INSERT INTO usuarios (nombre, password, nivel, experiencia) VALUES (?,?,1,0)'
    var params =[data.name, data.pass]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.status(200).json({
            "message": "success",
            "data": data,
            //"id" : this.lastID
        })
		//res.render('redirectmain',{data:JSON.stringify(data)})
    });
})


router.post("/api/uploaduser/", (req, res, next) => {
	console.log("estamos en el servidor");
    var errors=[]
    
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        
        //pass : md5(req.body.pass)
        level: req.params.level,
        experience: req.params.experience,
        name: req.params.name
        
    }
    var sql ='UPDATE usuarios SET nivel=?, experiencia=? WHERE nombre=?'
    var params =[data.name, data.level,data.experience]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.status(200).json({
            "message": "success",
            "data": data,
            //"id" : this.lastID
        })
		//res.render('redirectmain',{data:JSON.stringify(data)})
    });
})

module.exports = router;