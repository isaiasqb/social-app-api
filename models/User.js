const { Schema, model } = require('mongoose');
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
      unique: true
    },
    // ********************************************************
    //Array of _id values referencing the Thought model
    thoughts:[
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ], 

    // ********************************************************
    // Array of _id values referencing the User model (self-reference)
    friends:[
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
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