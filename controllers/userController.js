const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
  const { firstName, lastName, username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ firstName, lastName, username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user', details: error });
  }
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username });
      if (!user) return res.status(404).json({ error: 'User not found' });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });
  
      const token = jwt.sign(
        { id: user._id, role: user.role }, 
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      const { password: _, ...userWithoutPassword } = user.toObject();
  
      res.json({
        message: 'Login successful',
        token,
        user: userWithoutPassword,
      });
    } catch (error) {
      res.status(500).json({ error: 'Login failed', details: error });
    }
  };
  

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users', details: error });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user', details: error });
  }
};

exports.updateUser = async (req, res) => {
    const { firstName, lastName, username } = req.body;

    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { firstName, lastName, username },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ message: "User updated successfully", user });
    } catch (error) {
      res.status(500).json({ error: "Error updating user", details: error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user', details: error });
  }
};
