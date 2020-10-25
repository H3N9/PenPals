const express = require('express')
const bodyParser = require('body-parser')
const passport = require('./server/tools/passport')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(bodyParser.json());
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())

app.use('/search', passport.authenticate('jwt', {session: false}), require('./server/routes/search'))
app.use('/account', passport.authenticate('jwt', {session: false}), require('./server/routes/account'))
app.use('/friend',  passport.authenticate('jwt', {session: false}), require('./server/routes/friend'))
app.use('/auth', require('./server/routes/auth'))
app.use('/set-data', passport.authenticate('jwt', {session: false}), require('./server/routes/setData'))

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})