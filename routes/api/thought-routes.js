const router = require('express').Router();
const { addThought, removeThought, getAllThoughts } = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/').get(getAllThoughts);

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/comments/<pizzaId>/<commentId>
router.route('/:userId/:thoughtId').delete(removeThought);

module.exports = router