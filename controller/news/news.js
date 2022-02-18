import { executeQuery } from "../../config/db";

const getAllNews = async (req, res) => {
  try {
    const newsData = await executeQuery(
      `select * from news order by Id desc`,
      []
    );
    res.send(newsData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getSingleNews = async (req, res) => {
  const id = req.query.ContentId;
  try {
    const newsData = await executeQuery(
      `select * from news where ContentId=${id}`,
      []
    );
    res.send(newsData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export { getAllNews, getSingleNews };
