const cacheService = require("../services/cacheService");
const news = require("../models/database/news.json");

const getAllWithCache = () => {
  return cacheService.genericCache(_getAll, 60);
}

const getByIdWithCache = (id) => {
  return cacheService.genericCache(_getById, 60, id);
}

const _getAll = async () => {
  try{
    return news;
  }catch(error){
    throw Error(error);
  }
};

const _getById = async (id) => {
  try {
    const newsFound = news.find(x => x.id == id);
    return newsFound;
  }catch(error){
    throw Error(error);
  }
};

module.exports = {
  getAllWithCache: getAllWithCache,
  getByIdWithCache: getByIdWithCache,
};
