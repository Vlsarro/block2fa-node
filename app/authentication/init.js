const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

const authenticationMiddleware = require('./middleware');

// Generate Password
const saltRounds = 10;
const myPlaintextPassword = '123';
const salt = bcrypt.genSaltSync(saltRounds);
const passwordHash = bcrypt.hashSync(myPlaintextPassword, salt);

const user = {
    username: 'usr',
    passwordHash,
    id: 1
};

function findUser (username, callback) {
    // TODO: use database
    console.log(`username is ${username}`);
    if (username === user.username) {
        return callback(null, user);
    }
    return callback(null);
}

passport.serializeUser(function (user, cb) {
    console.log('serialize');
    cb(null, user.username);
});

passport.deserializeUser(function (username, cb) {
    console.log('deserialize');
    findUser(username, cb);
});

function initPassport () {
    passport.use(new LocalStrategy((username, password, done) => {
        console.log('fuck off');
        findUser(username, (err, user) => {
            if (err) {
                return done(err);
            }

            // User not found
            if (!user) {
                return done(null, false);
            }

            // Always use hashed passwords and fixed time comparison
            bcrypt.compare(password, user.passwordHash, (err, isValid) => {
                if (err) {
                    return done(err);
                }
                if (!isValid) {
                    return done(null, false);
                }
                return done(null, user);
            });
        });
    }));

    passport.authenticationMiddleware = authenticationMiddleware;
}

module.exports = initPassport;
