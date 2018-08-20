const mongoose = require('mongoose')
const mongoUrl = require('../config/db_config')
mongoose.Promise = global.Promise

mongoose.connect(mongoUrl, {
  useNewUrlParser: true
}, (err) => {
  if (err) throw err
  console.log(`=> connect to database.`)
})

module.exports.User = require('./User')