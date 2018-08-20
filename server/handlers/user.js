require('dotenv').load()
const db = require('../models')
const jwt = require('jsonwebtoken')

module.exports.signup = async function(req, res, next) {
  try {
    const foundUser = await db.User.findOne({ email: req.body.email })
    if (foundUser) {
      return next({
        status: 404,
        message: 'This email is already taken.'
      })
    }
    const newUser = await db.User.create(req.body)
    const { username, email, _id } = newUser
    const token = await jwt.sign({
      username,
      email,
      _id
    }, process.env.JWT_SECRET, {
      expiresIn: 3600
    })
    const responseData = { _id, username, email, token }
    return res.status(200).json(responseData)
  } catch (err) {
    return next(err)  
  }
}

module.exports.signin = async function(req, res, next) {
  try {
    let foundUser = await db.User.findOne({ email: req.body.email })
    if (!foundUser) {
      return next({
        status: 404,
        message: 'Invalid credentials.'
      })
    }
    const isMatch = await foundUser.comparePassword(req.body.password)
    if (foundUser && isMatch) {
      const { username, email, _id, preferences } = foundUser
      const token = await jwt.sign({
        username,
        email,
        _id
      }, process.env.JWT_SECRET, {
        expiresIn: 3600
      })
      const responseData = { _id, username, email, token, preferences }
      return res.status(200).json(responseData)
    } else {
      return next({
        status: 404,
        message: 'Invalid password.'
      })
    }
  } catch (err) {
    return next(err)
  }
}

module.exports.savePreferences = async function(req, res, next) {
  try {
    let foundUser = await db.User.findById(req.params.id)
    const {
      language,
      timezone,
      currency,
      profileType,
      messageType,
      categoryType
    } = req.body
    const preferences = {
      language,
      timezone,
      currency,
      profileType,
      messageType,
      categoryType
    }
    foundUser.preferences = preferences
    foundUser.save()
    return res.status(200).json(preferences)
  } catch (err) {
    return next(err)
  }
}