const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const ReactionSchema = new Schema(
  {
    reactionId:{
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      username:{
        type: String,
        required: true
      },

      createdAt:{
        type: Date,
        default: Date.now,
        get: (dateValue) => dateFormat(dateValue)
      }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false
  }
);


const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
    get: (dateValue) => dateFormat(dateValue)
  },

  username: {
    type: String,
    required: true
  },
  
  reactions: [ReactionSchema]
},
{
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false
}
)

// ********************************************************
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
ThoughtSchema.virtual('reactionCount').get(function() {
return this.reactions.length;
});



const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;