class NewsController {
    getAllNews(req, res) {
        res.status(200).json({message: 'success'})
    }

    getNewByID(req, res) {
        res.status(200).json({message: 'success'})
    }
}

module.exports = new NewsController()