const express = require('express');
const router = express.Router();
const {getUsers, getUserById, createUser, updateUser, deleteUser} = require('../controllers/userControllers')

router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/createuser', createUser)
router.put('/updateuser/:id', updateUser)
router.delete('/deleteuser/:id', deleteUser)

module.exports = router