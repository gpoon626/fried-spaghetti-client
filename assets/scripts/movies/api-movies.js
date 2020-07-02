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
    method: 'GET',
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

module.exports = {
  movieCreate,
  viewMovies,
  showMovies
}
