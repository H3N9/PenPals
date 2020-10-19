const express = require('express')
const bodyParser = require('body-parser')
const passport = require('./server/tools/passport')
const app = express()

app.use(express.json())
app.use(bodyParser.json());
app.use(passport.initialize())
app.use(passport.session())

app.use('/search', require('./server/routes/search'))
app.use('/account', passport.authenticate('jwt', {session: false}), require('./server/routes/account'))
app.use('/auth', require('./server/routes/auth'))
app.use('/set-data', require('./server/routes/setData'))

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})