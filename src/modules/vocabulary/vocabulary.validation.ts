import mongoose from 'mongoose'
import { z } from 'zod'

const stringField = (fieldName: string, minLength: number, maxLength: number) =>
  z
    .string({ message: `${fieldName} is required` })
    .min(minLength, {
      message: `${fieldName} must be at least ${minLength} character${minLength > 1 ? 's' : ''} long`,
    })
    .max(maxLength, {
      message: `${fieldName} must be at most ${maxLength} characters long`,
    })

const objectIdField = (fieldName: string) =>
  z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: `${fieldName} must be a valid ObjectId`,
  })

export const vocabularyCreateValidation = z.object({
  word: stringField('Word', 1, 255),
  pronunciation: stringField('Pronunciation', 1, 255),
  meaning: stringField('Meaning', 1, 500),
  whenToSay: stringField('When to say', 1, 255),
  lessonId: objectIdField('Lesson ID'),
  adminEmail: objectIdField('Admin Email'),
})

export const vocabularyUpdateValidation = vocabularyCreateValidation.partial()
