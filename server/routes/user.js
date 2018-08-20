const express = require('express')
const router = express.Router({ mergeParams: true })
const { signup, signin, savePreferences } = require('../handlers/user')

router.post('/signup', signup)
router.post('/signin', signin)
router.route('/:id/pref').put(savePreferences)

module.exports = router