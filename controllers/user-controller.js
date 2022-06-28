const { User } = require('../models');
const { populate } = require('../models/Thought');

const userController = {
  //get all Users by Id
  getAllUsers(req, res) {
    User.find({})
    .populate({
      path: 'thoughts',
      select: '-__v'
    })
    .select('-__v')
    .sort({ _id: -1 })
    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
  },

  //get one user by ID
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
    .populate({
      path: 'thoughts',
      select: '-__v'
    })
    .select('-__v')
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
  },


//friends functionality
  //add a friend to the user profile
  addFriend({ params }, res  ) {
    User.findById( { _id: params.friendId } )
    .then(({ _id }) => {
      return User.findOneAndUpdate(
        { _id: params.userId},
        { $push: { friends: _id } },
        { new: true}
      );
    })
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(userData);
    })
    .catch(err => res.json(err));
  },



  updateUser({ params, body }, res){
    User.findByIdAndUpdate({ _id: params.userId }, 
                              body, 
                            { new: true })
    .then(userData => {
      if(!userData){
        res.status(400).json({ message: 'there is no user with this id!'});
        return;
      }
      res.json(userData);
    })
    .catch(err => res.status(400).json(err));
  },



  //adding a friend
  addFriend({ params }, res  ) {
    User.findById( { _id: params.friendId } )
    .then(({ _id }) => {
      return User.findOneAndUpdate(
        { _id: params.userId},
        { $push: { friends: _id } },
        { new: true}
      );
    })
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(userData);
    })
    .catch(err => res.json(err));
  },









  removeFriend({ params, body }, res) {
    User.findOne({ _id: body.friendToRemove })
    .then(deletedFriend => {
      if(!deletedFriend) {
        return res.status(404).json({ message: 'No friend found with this ID!' });
      }
      return User.findByIdAndUpdate(
        { _id: params.userId },
        { $pull: { friends: body.friendToRemove} },
        { new: true }
      );
    })
    .then(deletedFriend => {
      if (!deletedFriend) {
        res.status(404).json({ message: 'No User found with this ID!' });
        return;
      }
      res.json(deletedFriend);
    })
    .catch(err => res.json(err));
  }


};

module.exports = userController;