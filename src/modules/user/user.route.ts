import express from 'express'

import { validateRequest } from '@/middlewares/validateRequest'
import auth from '@/middlewares/auth'
import { UserControllers } from './user.controller'
import { USER_ROLE } from './user.constant'
import {
  userRoleUpdateValidationSchema,
  userValidationSchema,
} from './user.validation'

const router = express.Router()

// Route to create a new user
router.post(
  '/auth/register',
  validateRequest(userValidationSchema),
  UserControllers.createUser,
)

// Route to get all users
router.get('/users', auth(USER_ROLE.admin), UserControllers.getAllUsers)

// Route to update user role
router.patch(
  '/user/:id',
  auth(USER_ROLE.admin),
  validateRequest(userRoleUpdateValidationSchema),
  UserControllers.updateUserRole,
)

// Route to delete a user
router.delete('/user/:id', auth(USER_ROLE.admin), UserControllers.deleteUser)

export const UserRoute = router
