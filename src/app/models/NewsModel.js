const News = require('../../../news.json');
const Messages = require('../../utils/Messages');

class NewsModel {
    async getAllNews() {
        return {error: false, allNews: News};
    }

    async getNewsByID(id) {
        let index = News.findIndex(e => e.id === Number(id));

        if(index > -1) {
            return {error: false, dataNew: News[index], message: Messages.success}
        }else {
            return {error: true, message: Messages.newsNotFound}
        }
    }
}

module.exports = new NewsModel();