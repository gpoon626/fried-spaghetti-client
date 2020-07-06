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

const onClearMovies = (event) => {
  event.preventDefault()
  ui.clearMovies()
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

// Update
const onUpdateMovie = function (event) {
  event.preventDefault()
  // form info comes in
  const form = event.target
  const data = getFormFields(form)

  api.updateMovie(data)

    .then(ui.updateMovieSuccess)
    .catch(ui.updateMovieFail)
}

// DELETE
const onDeleteMovie = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.deleteMovie(data)

    .then(ui.deleteMovieSuccess)
    .catch(ui.deleteMovieFail)
}

// handlers
const addHandlers = () => {
  $('#viewMovies').on('click', onViewMovies)
  $('#clearMoviesButton').on('click', onClearMovies)
}

module.exports = {
  addHandlers,
  onMovieCreate,
  onViewMovies,
  onClearMovies,
  onShowMovies,
  onUpdateMovie,
  onDeleteMovie
}
