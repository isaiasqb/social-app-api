const router = require('express').Router();
const { addThought, removeThought, getAllThoughts, addReaction, removeReaction, removeOneThought } = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/').get(getAllThoughts);

router.route('/delete/:thoughtId').delete(removeOneThought);

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