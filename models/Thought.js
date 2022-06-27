const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  
  createdAt: {
    type: Date,
    default: Date.now
    // ********************************************************
    // Use a getter method to format the timestamp on query
  },

  username: {
    type: String,
    required: true
  },
  
  reactions: []
});

// ********************************************************
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;