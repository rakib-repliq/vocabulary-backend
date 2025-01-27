import httpStatus from 'http-status'

import { catchAsync } from '@/utils/catchAsync'
import { sendResponse } from '@/utils/sendResponse'
import { LessonService } from './lesson.service'

const createLesson = catchAsync(async (req, res) => {
  const lesson = await LessonService.createLesson(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Lesson created successfully',
    data: lesson,
  })
})

const readAllLessons = catchAsync(async (req, res) => {
  const lessons = await LessonService.readAllLesson()

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Lessons retrieved successfully',
    data: lessons,
  })
})

const deleteLesson = catchAsync(async (req, res) => {
  const lesson = await LessonService.deleteLesson(req.params.id)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Lesson deleted successfully',
    data: lesson,
  })
})

export const LessonController = {
  createLesson: createLesson,
  readAllLessons: readAllLessons,
  deleteLesson: deleteLesson,
}
