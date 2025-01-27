import { Types } from 'mongoose'

export type TVocabulary = {
  word: string
  pronunciation: string
  meaning: string
  whenToSay: string
  lessonId: Types.ObjectId
  adminEmail: Types.ObjectId
}
