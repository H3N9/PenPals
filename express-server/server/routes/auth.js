const express = require('express');
const router = express.Router();
const passport = require('../tools/passport')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require('../../models')

const {User, Profile} = db

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
          return res.json({id:user.id, token})
      } else {
          return res.status(422).send("fail")
       }
    })(req, res, next);
})

router.post('/register', async (req, res) =>{
    const {username, password} = req.body
    const { profile } = req.body
    const passwordHash = bcrypt.hashSync(password, 10)
    const exit = await User.findOne({attributes:['id'],where:{username: username}})
    if(exit){
        res.status(400).json({ error: "User already exited." })
    }
    else if(profile){
        const createUser = await db.sequelize.transaction((t) =>{
            return User.create({
                username: username,
                password: passwordHash
            })
        })
        const userProfile = await db.sequelize.transaction((t) =>{
            return Profile.create({...profile, userId:createUser.id}, {transaction: t})
        })
        const user = await User.findByPk(createUser.id, {attributes: ["id", "username"]})
        res.json({user:user, profile:userProfile})
    }
    else{
        res.status(400).json({ error: "Syntax error." })
    }
    
})

module.exports = router;