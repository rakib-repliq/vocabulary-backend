import express from 'express'

import { validateRequest } from '@/middlewares/validateRequest'
import { LessonController } from './lesson.controller'
import { lessonCreateValidation } from './lesson.validation'

const router = express.Router()

router.post(
  '/lesson/create',
  validateRequest(lessonCreateValidation),
  LessonController.create,
)

export const LessonRoute = router
