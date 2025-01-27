import httpStatus from 'http-status'

import { catchAsync } from '@/utils/catchAsync'
import { sendResponse } from '@/utils/sendResponse'
import { vocabularyService } from './vocabulary.service'

const createVocabulary = catchAsync(async (req, res) => {
  const vocabulary = await vocabularyService.createVocabulary(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Vocabulary created successfully',
    data: vocabulary,
  })
})

const readAllVocabulary = catchAsync(async (req, res) => {
  const vocabularies = await vocabularyService.readAllVocabulary()

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Vocabularies fetched successfully',
    data: vocabularies,
  })
})

const updateVocabulary = catchAsync(async (req, res) => {
  const vocabulary = await vocabularyService.updateVocabulary(
    req.params.id,
    req.body,
  )

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Vocabulary updated successfully',
    data: vocabulary,
  })
})

const deleteVocabulary = catchAsync(async (req, res) => {
  const result = await vocabularyService.deleteVocabulary(req.params.id)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Vocabulary deleted successfully',
    data: result,
  })
})

export const vocabularyController = {
  createVocabulary,
  readAllVocabulary,
  updateVocabulary,
  deleteVocabulary,
}
