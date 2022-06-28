const { User, Thought } = require('../models');

const thoughtController = {

  //get all thoughts
    //get all Users by Id
    getAllThoughts(req, res) {
      Thought.find({})
      .then(thoughtData => res.json(thoughtData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      })
    },

  //add a thought to the user profile
  addThought({ params, body }, res  ) {
    console.log(body);
    Thought.create(body)
    .then(({ _id }) => {
      return User.findOneAndUpdate(
        { _id: params.userId},
        { $push: { thoughts: _id } },
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

  //remove a thought from the user profile
  removeThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
    .then(deletedThought => {
      if(!deletedThought) {
        return res.status(404).json({ message: 'No thought found with this ID!' });
      }
      return User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { thoughts: params.thoughtId } },
        { new: true }
      );
    })
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'No User found with this ID!' });
        return;
      }
      res.json(userData);
    })
    .catch(err => res.json(err));
  }
};

module.exports = thoughtController;