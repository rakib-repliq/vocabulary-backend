import { model, Schema } from 'mongoose'

import { TLesson } from './lesson.interface'

const lessonSchema = new Schema<TLesson>({
  lessonName: { type: String, required: true },
  lessonNumber: { type: Number, required: true, unique: true },
  level: { type: String, required: true, enum: ['easy', 'medium', 'hard'] },
})

export const Lesson = model<TLesson>('Lesson', lessonSchema)
