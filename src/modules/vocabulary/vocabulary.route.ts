import express from 'express'

import { validateRequest } from '@/middlewares/validateRequest'
import { vocabularyCreateValidation } from './vocabulary.validation'
import { vocabularyController } from './vocabulary.controller'

const router = express.Router()

router.post(
  '/vocabulary',
  validateRequest(vocabularyCreateValidation),
  vocabularyController.createVocabulary,
)

router.get('/vocabulary', vocabularyController.readAllVocabulary)

export const VocabularyRouter = router
