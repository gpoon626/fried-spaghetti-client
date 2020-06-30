'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const userAction = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#signup-form').on('submit', userAction.onSignUp)
  $('#sign-in-form').on('submit', userAction.onSignIn)
  $('#change-password-form').on('submit', userAction.onChangePassword)
  $('#sign-out').on('click', userAction.onSignOut)

  $('#change-password').hide()
})
