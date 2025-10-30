const User = require('../models/userModel')

//GET or Read
const getUsers = async (req, res) => {
    const users = await User.find();
    res.send(users)
}

//GET single user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ message: 'User not found' })
    res.json(user)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

//POST or Create
const createUser = async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.send(user);
    }
    catch (err) {
    res.status(400).json({ message: err.message });
    }
}

//PUT or Update
const updateUser = async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(user);
    }
    catch (err) {
    res.status(400).json({ message: err.message });
    }
}

//DELETE
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getUsers, createUser, updateUser, deleteUser, getUserById }
