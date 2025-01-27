import httpStatus from 'http-status'

import { catchAsync } from '@/utils/catchAsync'
import { sendResponse } from '@/utils/sendResponse'
import { LessonService } from './lesson.service'

const createLesson = catchAsync(async (req, res) => {
  const lesson = await LessonService.create(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Lesson created successfully',
    data: lesson,
  })
})

export const LessonController = {
  create: createLesson,
}
