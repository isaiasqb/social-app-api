const { User } = require('../models');

const userController = {
  //get all Users by Id
  getAllUsers(req, res) {
    User.find({})
    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
  },

  //get one user by ID
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
    .then(userData => {
      // if no user found, send error message
      if(!userData){
        res.status(404).json({ message: 'There is no user with this id'});
        return;
      }
      res.json(userData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },

  //create a user
  createUser({ body }, res) {
    User.create(body)
    .then(userData => res.json(userData))
    .catch(err => res.status(404).json(err));
  },

  //update a User by their ID
  updateUser({ params, body }, res){
    User.findByIdAndUpdate({ _id: params.id }, body, { new: true })
    .then(userData => {
      if(!userData){
        res.status(400).json({ message: 'there is no user with this id!'});
        return;
      }
      res.json(userData);
    })
    .catch(err => res.status(400).json(err));
  },

  // delete a user
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
    .then(userData => {
      if (!userData) {
        res.status(400).json({ message: 'there is no user with this id!'});
        return;
      }
      res.json(userData)
    })
    .catch(err => res.status(400).json(err));
  }
};

module.exports = userController;