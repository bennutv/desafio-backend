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
    res.status(500).send({ error: "Could not get all news" });
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

    if (sanitizeService.checkIfEmpty(response)) {
      res.status(404).send(`News with id ${id} not found.`);
      return;
    }

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
    res.status(500).send({ error: "Could not get news" });
  }
};

module.exports = {
  getAll,
  getById,
};
