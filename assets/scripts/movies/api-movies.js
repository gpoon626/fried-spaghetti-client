'use strict'

const store = require('./../store')
const config = require('./../config')

// Create
const movieCreate = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/movies',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      movie: {
        title: data.movie.title,
        rating: data.movie.rating
      }
    }
  })
}

// Index
const viewMovies = function (data) {
  return $.ajax({
    url: config.apiUrl + '/movies',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

// Show
const showMovies = function (data) {
  return $.ajax({
    url: config.apiUrl + '/movies',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      movie: {
        title: data.movie.title
      }
    }
  })
}

s

// Delete
const deleteMovie = function (data) {
  return $.ajax({
    url: config.apiUrl + '/movies/' + data.movie.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  movieCreate,
  viewMovies,
  showMovies,
  updateMovie,
  deleteMovie
}
