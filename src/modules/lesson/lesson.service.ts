import { TLesson } from './lesson.interface'
import { Lesson } from './lesson.model'

const createLessonIntoDB = async (payload: TLesson) => {
  const lesson = await Lesson.create(payload)
  return lesson
}

const readAllLessonsFromDB = async () => {
  const lessons = await Lesson.find()
  return lessons
}

const deleteLessonFromDB = async (id: string) => {
  const lesson = await Lesson.findByIdAndDelete(id)
  return lesson
}

const updateLessonIntoDB = async (id: string, payload: Partial<TLesson>) => {
  const lesson = await Lesson.findByIdAndUpdate(id, payload, { new: true })
  return lesson
}

export const LessonService = {
  createLesson: createLessonIntoDB,
  readAllLesson: readAllLessonsFromDB,
  deleteLesson: deleteLessonFromDB,
  updateLesson: updateLessonIntoDB,
}
