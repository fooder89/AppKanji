const express = require("express");
const passport = require('passport');
const authRoutes = express.Router();
const db = require("../database");

var md5 = require("md5");


authRoutes.post("/loguser", function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return res.status(500).json({message: "Error login"}) }
    if (!user) { return res.status(500).json({message: "Error login"}) }

    req.logIn(user, function(err) {
      if (err) { return res.status(500).json({message: "Error login"}) }
      return res.status(200).json(user);
    });
  })(req, res, next);
});
.post("/api/loguser/", (req, res, next) => {
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
        //pass : md5(req.body.pass)
		pass : req.body.pass
    }
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


authRoutes.post("/reguser", (req, res, next) => {
  const { username, password } = req.body;

  
  if (username === "" || password === "") {
    res.status(500).json({ message: "Indicate username and password" });
    return;
  }

  db.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.status(500).json({ message: "The username already exists" })
      return;
    }

    const hashPass = md5(password);

    const newUser = new User({ //aqui query de insercion
      username,
      password: hashPass,
    });

    newUser.save((err, user) => {
      if (err) {
        res.status(500).json({ message: "Something went wrong" });
      } else {
        req.login(user, (err) => {

          if (err) {
              res.status(500).json({ message: 'Login after signup went bad.' });
              return;
          }

          res.status(200).json(user);
      });
      }
    });
  });
});
.post("/api/reguser/", (req, res, next) => {
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
            "id" : this.lastID
        })
		//res.render('redirectmain',{data:JSON.stringify(data)})
    });

authRoutes.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({message: "Logout"});
});

authRoutes.get('/loggedin', (req, res) => {
  if(req.isAuthenticated()) {
    return res.status(200).json(req.user);
  } else {
    return res.status(403).json({message: "Unauthorized"});
  }
})

module.exports = authRoutes;