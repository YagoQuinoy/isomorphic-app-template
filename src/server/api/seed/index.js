import mongoose from 'mongoose'
import seeder from 'mongoose-seed'

import config from '../../../../config'
import articles from './articles'

const data = [{
  model: 'Articles',
  documents: articles
}]

const { database } = config
const options = { useMongoClient: true }
seeder.connect(database.uri, options, (err) => {
  if (err){
    throw err
  }

  seeder.loadModels([ 'src/server/api/models/article.js'	])
  seeder.clearModels(['Articles'], () => {
    seeder.populateModels(data, () => {
      mongoose.disconnect()
    })
  })
})
