const express = require('express');
const router = express.Router();
const passport = require('../tools/passport')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require('../../models')

const {User} = db

router.get('/', passport.authenticate('jwt', {session: false}), (req, res) =>{
    res.send(req.user)
})

router.post('/login', (req, res, next) =>{
    passport.authenticate('local', {session: false}, (err, user, info) => {
      if (err) {
        return next(err)
      }
      if(user) {
          const token = jwt.sign(user.dataValues, 'your_jwt_secret')
          return res.json({token})
      } else {
          return res.status(422).send("fail")
       }
    })(req, res, next);
})

router.post('/register', async (req, res) =>{
    const {username, password} = req.body
    const passwordHash = bcrypt.hashSync(password, 10)
    try{
        let user = await db.sequelize.transaction((t) =>{
        return User.create({
            username: username,
            password: passwordHash
        })
        })
  
        user = await User.findByPk(user.id, {attributes: ["id", "username"]})
        res.json(user)

    }catch (error) {
        res.json({ error: error.errors[0].message });
    }
})

module.exports = router;