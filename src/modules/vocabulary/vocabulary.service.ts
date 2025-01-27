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

const updateVocabularyIntoDB = async (
  id: string,
  payload: Partial<TVocabulary>,
) => {
  const updatedVocabulary = await Vocabulary.findByIdAndUpdate(id, payload, {
    new: true,
  })
  return updatedVocabulary
}

const deleteVocabularyFromDB = async (id: string) => {
  const result = await Vocabulary.findByIdAndDelete(id)
  return result
}

export const vocabularyService = {
  createVocabulary: createVocabularyIntoDB,
  readAllVocabulary: readAllVocabularyFromDB,
  updateVocabulary: updateVocabularyIntoDB,
  deleteVocabulary: deleteVocabularyFromDB,
}
