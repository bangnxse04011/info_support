var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var passportfb = require('passport-facebook').Strategy;

var users = require('./routes/users');
var feed_back = require('./routes/support');
var info_support = require('./routes/info_support');
var admin = require('./routes/admin');
var authen = require('./routes/authen');
var event = require('./routes/event');
const db = require('../neopost/public/javascripts/DAO/db_table_account');

var app = express();

app.use(session({
  secret: "secret",
  saveUninitialized: true,
  resave: true
}))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use(session({ secret: 'ssshhhhh' }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', info_support);
app.use('/users', users);
app.use('/feed-back', feed_back);
app.use('/admin', admin);
app.use('/authen', authen);
app.use('/events', event);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.get('/authen/fb', passport.authenticate('facebook', { scope: ['email'] }));
app.get('/authen/fb/cb', passport.authenticate('facebook', { failureRedirect: '/authen/fb', session: false, auth_type: 'reauthenticate' }),
  function (req, res) {
    // Successful authentication, redirect home.
    req.session.user_id = users_id_user;
    res.redirect(req.session.CUR_URl || '/');
  });
// successRedirect: '/users',
// session: false
// }
// ));

/**
 * Method passportfb using authen facebook
 */
passport.use(new passportfb(
  {
    clientID: "244650479413541",
    clientSecret: "cf5fca5e1b383898bd2b7c1e74ecd0ec",
    callbackURL: "https://vilucky.com/authen/fb/cb",
    profileFields: ['email', 'gender', 'locale', 'displayName']
  },
  (accessToken, refreshToken, profile, done) => {
    /**
     * Method get accessToken
     */
    console.log(accessToken);
    /**
     * Find all check all user if user exits in DB
     */
    users_id_user = profile._json.id;
    db.findAll({
      where: {
        id_user: profile._json.id
      }
    }).then(account => {
      if (account == null || account == '' || account.length == 0) {
        db.create({
          fullName: profile._json.name,
          email: profile._json.email,
          id_user: profile._json.id,
          role: 0
        });
        return done(null, account);
      } else {
        return done(null, account);
      }
    }).catch(function (err) {
      console.log(err);
    });
  }
));

/**
 * Find all check all user if user exits in DB
 */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

/**
 * Find all check all user if user exits in DB
 */
passport.deserializeUser((id, done) => {
  db.findAll({
    where: {
      id_user: profile._json.id
    }
  }).then(account => {
    done(null, account);
  }).catch(function (err) {
    console.log(err);
  });
});

module.exports = app;
