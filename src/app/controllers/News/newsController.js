const NewsModel = require('../../models/NewsModel');
const Messages = require('../../../utils/Messages');

class NewsController {
    async getAllNews(req, res) {
        let response = await NewsModel.getAllNews();

        if(!response.error) {
            res.status(200).json({error: false, message: Messages.success, allNews: response.allNews})
        }else {
            res.status(400).json({error: true, message: Messages.unavailableData, allNews: []}) 
        }
        
    }

    async getNewByID(req, res) {
        let { id } = req.query;
        if(id) {
            let response = await NewsModel.getNewsByID(id);
            
            if(!response.error) {
                res.status(200).json({error: false, message: Messages.success, news: response.dataNew});
            }else {
                res.status(400).json({error: true, message: Messages.newsNotFound, news: {}});
            }
        }else {
            res.status(400).json({error: true, message: Messages.idNotIndicated, news: {}});
        }
        
    }
}

module.exports = new NewsController()