// const express = require('express');

// const userRoute = express.Router();

// const {
//     createUser,
//     updateUser,
//     deleteUser,
//     getSingleUser,
//     getAllUser
// } = require('../controller/userController.js')
// const verifyUser = require('../utils/verifyToken.js')
// // const createUser = require('../controller/userController.js');
// // const updateUser = require('../controller/userController.js');
// // const deleteUser = require('../controller/userController.js');
// // const getSingleUser = require('../controller/userController.js');
// // const getAllUser = require('../controller/userController.js');

// // add new user
// userRoute.route('/').post(createUser);

// // update trip
// userRoute.route('/:id', verifyUser).put(updateUser);

// // delete trip
// userRoute.route('/:id', verifyUser).delete(deleteUser);

// // get Single trip
// userRoute.route('/:id', verifyUser).get(getSingleUser);

// // get all trips
// userRoute.route('/:id', verifyUser).get(getAllUser);

// module.exports = userRoute;

// const router = require('express').Router();
// let User = require('../models/user.model');

// router.route('/').get((req, res)=>{
//     User.find()
//         .then(users => res.json(users))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//     const username = req.body.username;

//     const newUser = new User({username});

//     newUser.save()
//         .then(()=> res.json('User added!'))
//         .catch(err => res.status(400).json('Error: ', + err));
// });

// module.exports = router;

import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
const router = express.Router();

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

//update user
router.put('/:id', verifyUser, updateUser);

//delete user
router.delete('/:id', verifyUser, deleteUser);

//get single user
router.get('/:id', verifyUser, getSingleUser);

//get all users
router.get('/', verifyAdmin, getAllUser);

export default router