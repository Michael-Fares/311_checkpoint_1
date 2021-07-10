const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const usersRouter = require('./routes/users.js');

app.use(express.json())
app.use(usersRouter)

app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})