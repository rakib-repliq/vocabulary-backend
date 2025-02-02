import express from 'express'

import { validateRequest } from '@/middlewares/validateRequest'
import { loginValidationSchema } from './auth.validation'
import { AuthControllers } from './auth.controller'

const router = express.Router()

router.post(
  '/auth/login',
  validateRequest(loginValidationSchema),
  AuthControllers.loginUser,
)

export const AuthRoute = router
