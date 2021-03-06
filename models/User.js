const { Schema, model, Types } = require('mongoose');
const Thought = require('./Thought');

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: 'Please enter a name',
      unique: true
    },
    email:{
      type: String,
      required: 'Please enter anemail adress',
      unique: true,
      match: [
        /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/, "Please enter a valid emnail address."
      ]
    },
    thoughts:[
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ], 

    // ********************************************************
    // Array of _id values referencing the User model (self-reference)
    friends:[
      // {
      //   type: Schema.Types.ObjectId,
      //   ref: 'User'
      // }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false
  }
)

//***********************************************************
//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

//creating the User model using the UserSchema
const User = model('User', UserSchema);

module.exports = User;