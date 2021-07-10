const express = require('express');

const users = require('../data/index.js');

const sampleUser = require('../data/sampleUser.js');


const listUsers = (req, res) => {
  res.json(users)
}

const showUser = (req, res) => {
  // find the user by her/his id
  const user = users.find(user => user.id == req.params.id)
  // error handler if user does not exist with given id
  if(!user) {
  res.status(404)
  res.send(`No user with id ${req.params.id} exists`)
  }
  res.json(user)
}

const createUser = (req, res) => {
// push the sample user to the users array
  sampleUser.id = users[users.length-1].id + 1 
  users.push(sampleUser)
  // let the new user id equal the previous users id + 1 (accessing last item in array with array.length -1)
  res.json(users)
}

const updateUser = (req, res) => {
  // find the user by her/his id
  const user = users.find(user => user.id == req.params.id)
  // error handler if user does not exist with given id
  if(!user) {
  res.status(400)
  res.send(`No user with id ${req.params.id} exists`)
  }
  user.name = req.body.name;
  user.username = req.body.username;
  user.email = req.body.email;
    user.address.street = req.body.address.street;
    user.address.suite = req.body.address.suite;
    user.address.city = req.body.address.city;
    user.address.zipcode = req.body.address.zipcode
      user.address.geo.lat = req.body.address.geo.lat;
      user.address.geo.lng = req.body.address.geo.lng;
  user.phone = req.body.phone;
  user.website = req.body.website;
      user.company.name = req.body.company.name;
      user.company.catchPhrase = req.body.company.catchPhrase;
      user.company.bs = req.body.company.bs;
  res.json(user)
}

const deleteUser = (req, res) => {
  // find the user to delete based on id
  const deletedUser =  users.find(user => user.id == req.params.id)
  // error handling if no "user to be deleted" (deletedUser) found with that id
  if (!deletedUser) {
    res.status(400)
    res.send(`No user with id ${req.params.id} exists`)
  }
  // filter in all of the remaining users minus the deleted user to an updated users array
  const updatedUserArray = users.filter(user => user !== deletedUser)
  res.json({message: `user with id ${req.params.id} deleted`, updatedUserList: updatedUserArray})
}

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser }