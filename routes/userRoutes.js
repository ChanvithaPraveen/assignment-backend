const express = require('express');
const {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const authenticateJWT = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/', getAllUsers); 
router.get('/:id', getUserById); 
router.put('/:id', updateUser); 
router.delete('/:id', deleteUser); 

module.exports = router;
