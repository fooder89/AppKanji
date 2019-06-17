// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const db          = require('../database');
// const md5 = require('md5');

// passport.use(new LocalStrategy((username, password, next) => {
//   db.findOne({ username }, (err, foundUser) => {
//     if (err) {
//       next(err);
//       return;
//     }

//     if (!foundUser) {
//       next(null, false, { message: 'Incorrect username' });
//       return;
//     }

//     if (md5(password)!==md5(foundUser.password)) {
//       next(null, false, { message: 'Incorrect password' });
//       return;
//     }

//     next(null, foundUser);
//   });
// }));