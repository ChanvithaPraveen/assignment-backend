// routes/userRoutes.js

const express = require('express');
const {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const authenticateJWT = require('../middlewares/authMiddleware'); // Import the JWT middleware

const router = express.Router();

// Public routes
router.post('/register', createUser);
router.post('/login', loginUser);

// Protected routes (require authentication)
router.get('/', getAllUsers); // Only authenticated users can access this
router.get('/:id', getUserById); // Only authenticated users can access this
router.put('/:id', updateUser); // Only authenticated users can access this
router.delete('/:id', deleteUser); // Only authenticated users can access this

module.exports = router;
