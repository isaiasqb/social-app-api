const router = require('express').Router();
const { addThought, removeThought, getAllThoughts, addReaction, removeReaction } = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/').get(getAllThoughts);

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/comments/<pizzaId>/<commentId>
router.route('/:userId/:thoughtId')
.put(addReaction)
.delete(removeThought);

// /api/comments/<pizzaId>/<commentId>
router.route('/:userId/:thoughtId/:reactionId')
.delete(removeReaction);

module.exports = router