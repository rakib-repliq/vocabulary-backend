import express from 'express'

import { validateRequest } from '@/middlewares/validateRequest'
import {
  vocabularyCreateValidation,
  vocabularyUpdateValidation,
} from './vocabulary.validation'
import { vocabularyController } from './vocabulary.controller'
import auth from '@/middlewares/auth'
import { USER_ROLE } from '../user/user.constant'

const router = express.Router()

router.post(
  '/vocabulary',
  validateRequest(vocabularyCreateValidation),
  auth(USER_ROLE.admin),
  vocabularyController.createVocabulary,
)

router.get(
  '/vocabulary',
  auth(USER_ROLE.admin, USER_ROLE.user),
  vocabularyController.readAllVocabulary,
)

router.patch(
  '/vocabulary/:id',
  validateRequest(vocabularyUpdateValidation),
  auth(USER_ROLE.admin),
  vocabularyController.updateVocabulary,
)

router.delete(
  '/vocabulary/:id',
  auth(USER_ROLE.admin),
  vocabularyController.deleteVocabulary,
)

export const VocabularyRouter = router
