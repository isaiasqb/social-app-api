const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
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
  thoughts:[], 
  friends:[]
})

//creating the User model using the UserSchema
const User = model('User', UserSchema);

module.exports = User