let mongoUrl
if (process.env.NODE_ENV === 'test') {
  mongoUrl = 'mongodb://localhost/test_db'
} else {
  mongoUrl = process.env.DB
}

module.exports = mongoUrl