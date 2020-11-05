const logger = require("../../infra/logger");
const newsRepository = require("../repository/news");
const sanitizeService = require("../services/sanitize");


const getAll = async (req, res) => {
  const hrstart = process.hrtime();

  try {
    const response = await newsRepository.getAllWithCache();
    const hrend = process.hrtime(hrstart);

    logger.info("Get all news", { elapsedTime: hrend[1] / 1000000 });
    res.send(response);
  } catch (e) {
    logger.error("database error occurred", { error: `${e}` });
    res.status(500).send({ error: "Could not get all users" });
  }
};

const getById = async (req, res) => {
  const hrstart = process.hrtime();
  let id = req.params.id;

  if (sanitizeService.checkIfEmpty(id)) {
    res.status(403).send("Please send id");
    return;
  }

  try {
    const response = await newsRepository.getByIdWithCache(id);
    const hrend = process.hrtime(hrstart);

    logger.info("Find news request by id", {
      id: id,
      elapsedTime: hrend[1] / 1000000,
    });
    res.send(response);
  } catch (e) {
    logger.error("database error occurred", {
      error: `${e}`,
      id: id,
    });
    res.status(500).send({ error: "Could not get user" });
  }
};

module.exports = {
  getAll,
  getById,
};
