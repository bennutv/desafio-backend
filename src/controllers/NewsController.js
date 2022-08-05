import News from '../models/NewsModel.js'
import newsArray from '../../news.js'

class NewsController {
  async list (request, response) {
    const query = request.query || {}
    
    const news = await News.find(query)

    if (news.length === 0) return response.status(404).json({ message: 'News not found!' })

    return response.status(200).json(news)
  }
  
  async get (request, response) {
    const { id } = request.params
    
    const news = await News.findOne({ id })
    
    if (news.length === 0) return response.status(404).json({ message: 'News not found!' })
    
    return response.status(200).json(news)
  }
  
  async store (request, response) {
    try {
      const newsData = newsArray

      const newsAlreadyExists = await News.find().exec()
      if(newsAlreadyExists.length > 0) return response.status(404).json({ message: 'Data alread stored!' })
      
      News.insertMany(newsData)
      
      return response.status(201).json(newsData)
    } catch(err) {
      console.log(err)
      return response.status(500).json({ error: err })
    }
  }
}

export default new NewsController()
