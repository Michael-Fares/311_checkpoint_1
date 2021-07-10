const express = require('express');

const users = require('../data/index.js');

const sampleUser = require('../data/sampleUser.js');


const listUsers = (req, res) => {
  res.json(users)
}

const showUser = (req, res) => {
  const user = users.find(user => user.id == req.params.id)
  // error handler if user does not exist
  if(!user) {
  res.status(404)
  res.send('that user does not exist')
  }
  res.json(user)
}

const createUser = (req, res) => {
// push the sample user to the users array
  users.push(sampleUser)
  // let the new user id equal the previous users id + 1 (accessing last item in array with array.length -1)
  sampleUser.id = users[users.length-1].id + 1 
  res.json(users)
}

const updateUser = (req, res) => {
  
}

const deleteUser = (req, res) => {
  
}

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser }