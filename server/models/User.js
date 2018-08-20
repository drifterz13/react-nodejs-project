const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  preferences: {
    language: String,
    timezone: String,
    currency: String,
    profileType: String,
    messageType: String,
    categoryType: String
  }
})

UserSchema.pre('save', async function (next){
  try {
    if (!this.isModified('password')) {
      return next()
    }
    const hashPassoword = await bcrypt.hash(this.password, 10)
    this.password = hashPassoword
    return next()
  } catch (err) {
    return next(err)
  }
})

UserSchema.methods.comparePassword = async function(candidatePassword, next) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
  } catch (err) {
    return next({
      message: 'Incorrect Password!'
    })    
  }
}

const User = mongoose.model('User', UserSchema)
module.exports = User