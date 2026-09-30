const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const User = require("../models/User");

module.exports = function (passport) {
  passport.use(
    // login with email instead of the default username
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // look up the user by email (lowercase so it always matches)
      User.findOne({ email: email.toLowerCase() }, (err, user) => {
        if (err) {
          return done(err);
        }
        // no user with that email
        if (!user) {
          return done(null, false, { msg: `Email ${email} not found.` });
        }
        // account has no password (signed up through a provider)
        if (!user.password) {
          return done(null, false, {
            msg:
              "Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.",
          });
        }
        // check the typed password against the hashed one
        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            return done(err);
          }
          if (isMatch) {
            return done(null, user);
          }
          return done(null, false, { msg: "Invalid email or password." });
        });
      });
    })
  );

  // saves only the user id in the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // uses the id from the session to get the full user back
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
};