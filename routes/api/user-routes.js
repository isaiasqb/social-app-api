const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/user-controller')

//  /api/users
router
.route('/')
.get(getAllUsers)
.post(createUser);

router
.route('/unfriend/:userId/:friendToRemove')
.put(removeFriend)

// /api/users/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

router
.route('/:userId/:friendId')
.put(addFriend)




module.exports = router