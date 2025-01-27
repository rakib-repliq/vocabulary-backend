import { TVocabulary } from './vocabulary.interface'
import { Vocabulary } from './vocabulary.model'

const createVocabularyIntoDB = async (payload: TVocabulary) => {
  const createdVocabulary = await Vocabulary.create(payload)
  return createdVocabulary
}

const readAllVocabularyFromDB = async () => {
  const vocabularies = await Vocabulary.find()
    .populate('lessonId')
    .populate('adminEmail', 'name')
  return vocabularies
}

export const vocabularyService = {
  createVocabulary: createVocabularyIntoDB,
  readAllVocabulary: readAllVocabularyFromDB,
}
