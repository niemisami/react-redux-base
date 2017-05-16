import jwt from 'jsonwebtoken';
import * as db from '../database';

const config = require('../config.json');

const User = require('mongoose').model('User');

/**
 *  The Auth Checker middleware function.
 */
export default (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end();
  }
  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];

  // decode the token using a secret key-phrase
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) { return res.status(401).send({ message: "Wrong token" }); }

    const userId = decoded.sub;

    // check if a user exists
    return User.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        return res.status(401).send({ message: "Didn't find user" });
      }

      return next();
    });
  });
};
