const db = require('../../models')
const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const passportJWT = require("passport-jwt")
const JWTStrategy = passportJWT.Strategy
const ExtractJWT  = passportJWT.ExtractJwt

const { User } = db

passport.use(new LocalStrategy((username, password, callback) =>{
    User.findOne({where: { username }}).then((user) =>{
      if (!user){
        return callback(null, false)
      }
  
      if (bcrypt.compareSync(password, user.password)){
        return callback(null, user)
      }
  
      return callback(null, false)
    })
}))

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : 'your_jwt_secret'
  },
  (jwtPayload, cb) => {
    return User.findByPk(jwtPayload.id, {include: ["profile"]})
      .then(user => {
          return cb(null, user);
      })
      .catch(err => {
          return cb(err);
      });
    }
));

passport.serializeUser((user, cb) => {
    cb(null, user.id)
})
  
passport.deserializeUser((id, cb) => {
    User.findByPk(id).then((user) => {
        if (!user) {
        return cb(null, false)
        }
        cb(null, user)
    })
})

module.exports = passport