import mongoose from 'mongoose'

const articlesSchema = mongoose.Schema({
    title: String,
    content: String
})

export default mongoose.model('Articles', articlesSchema)
