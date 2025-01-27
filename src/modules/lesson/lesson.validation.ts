import { z } from 'zod'

export const lessonCreateValidation = z.object({
  lessonName: z
    .string({
      required_error: 'Lesson Name is required',
      invalid_type_error: 'Lesson Name must be a string',
    })
    .min(2, {
      message: 'Lesson Name must be at least 2 characters',
    })
    .max(255),
  lessonNumber: z
    .number({
      required_error: 'Lesson Number is required',
      invalid_type_error: 'Lesson Number must be a number',
    })
    .int()
    .positive(),
  level: z.enum(['easy', 'medium', 'hard'], {
    required_error: 'Level is required',
    invalid_type_error: 'Level must be a string',
    message: "Level must be 'easy', 'medium', or 'hard'",
  }),
})

export const lessonUpdateValidation = lessonCreateValidation.partial()
