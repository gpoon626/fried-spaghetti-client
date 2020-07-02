'use strict'

const api = require('./api-movies')
const ui = require('./ui-movies')
const store = require('./../store')
const getFormFields = require('./../../../lib/get-form-fields.js')

// create
const onMovieCreate = function (event) {
  event.preventDefault()
  // where form info comes in
  const form = event.target
  const data = getFormFields(form)

  api.movieCreate(data)

    .then(ui.movieCreateSuccess)
    .catch(ui.movieCreateFail)
}

// index
const onViewMovies = function () {
  event.preventDefault()
  api.viewMovies()

    .then(ui.viewMoviesSuccess)
    .catch(ui.viewMoviesFail)
}

// show
const onShowMovies = function (event) {
  event.preventDefault()
  // where form info comes in
  const form = event.target
  const data = getFormFields(form)

  api.showMovies(data)

    .then(ui.showMoviesSuccess)
    .catch(ui.showMoviesFail)
}

// handlers
// const addHandlers = () => {
//   $('#viewMovies').on('click', onViewMovies)
//   $('.btn btn-danger').on('click', '.content', onDeleteMovies)
// }

module.exports = {
  // addHandlers,
  onMovieCreate,
  onViewMovies,
  onShowMovies
}
