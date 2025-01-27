import express from 'express'

import { validateRequest } from '@/middlewares/validateRequest'
import { LessonController } from './lesson.controller'
import {
  lessonCreateValidation,
  lessonUpdateValidation,
} from './lesson.validation'
import auth from '@/middlewares/auth'
import { USER_ROLE } from '../user/user.constant'

const router = express.Router()

router.post(
  '/lesson/create',
  validateRequest(lessonCreateValidation),
  auth(USER_ROLE.admin),
  LessonController.createLesson,
)

router.get('/lessons', LessonController.readAllLessons)

router.delete(
  '/lesson/:id',
  auth(USER_ROLE.admin),
  LessonController.deleteLesson,
)

router.patch(
  '/lesson/:id',
  validateRequest(lessonUpdateValidation),
  auth(USER_ROLE.admin),
  LessonController.updateLesson,
)

export const LessonRoute = router
