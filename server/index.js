require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const errorHandlers = require('./handlers/errors')
const userRoutes = require('./routes/user')

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/auth', userRoutes)

app.use((req, res, next) => {
  const error = new Error('Not found!')
  error.status = 404
  next(error)
})

app.use(errorHandlers)

app.listen(PORT, () => console.log(`=> Server is running on port: ${PORT}`))

module.exports = app

