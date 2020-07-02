'use strict'
const store = require('./../store')

const movieCreateSuccess = function (response) {
  console.log(response, 'new movie!')
  $('form').trigger('reset')
  // store.movie = response.movie
}

const movieCreateFail = function () {
  console.log('Failed')
}

const viewMoviesSuccess = function (data) {
  console.log(data)
}

const viewMoviesFail = function () {
  console.log('Failed')
}

const showMoviesSuccess = function (data) {
  console.log(data)
}

const showMoviesFail = function () {
  console.log('Failed')
}

module.exports = {
  movieCreateSuccess,
  movieCreateFail,
  viewMoviesSuccess,
  viewMoviesFail,
  showMoviesSuccess,
  showMoviesFail
}
