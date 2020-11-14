const express = require('express')
const bodyParser = require('body-parser')
const passport = require('./server/tools/passport')
const cors = require('cors')
const app = express()
const http = require('http').createServer(app)
// const io = require('socket.io')(http,{
//     pingInterval: 10000,
//     pingTimeout: 5000,
//     cookie: false
// })
require('./server/routes/socket').listen(http)

//app.use(express.urlencoded())
app.use(express.json())
app.use(bodyParser.json());
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())

app.use('/search', passport.authenticate('jwt', {session: false}), require('./server/routes/search'))
app.use('/account', passport.authenticate('jwt', {session: false}), require('./server/routes/account'))
app.use('/friend',  passport.authenticate('jwt', {session: false}), require('./server/routes/friend'))
app.use('/post',  passport.authenticate('jwt', {session: false}), require('./server/routes/post'))
app.use('/auth', require('./server/routes/auth'))
app.use('/set-data', passport.authenticate('jwt', {session: false}), require('./server/routes/setData'))
app.use('/message', passport.authenticate('jwt', {session:false}), require('./server/routes/chat'))
app.use('/notification', passport.authenticate('jwt', {session:false}), require('./server/routes/notification'))
app.use('/image', require('./server/routes/image'))

//io.listen(http,connected(io))

http.listen(3000, () => {
    console.log('Start server at port 3000.')
})