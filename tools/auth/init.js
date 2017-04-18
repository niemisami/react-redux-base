import passport from 'passport';
import  { Strategy } from 'passport-local';
import { findUserByRfid, findById } from '../database';


// Callback done(error, user)
passport.use(new Strategy((rfid, password, done) => {
        findUserByRfid(rfid, (err, user) => {
            if (err) { return done(err)}
            if (!user) { return done(null, false)}
            if (user.password !== password) {return done(null, false)}
            return done(null, user); 
        })
    }
))

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  findById(id, (err, user) => {
    if (err) { return done(err); }
    done(null, user);
  });
});