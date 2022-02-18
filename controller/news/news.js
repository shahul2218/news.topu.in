import pool from "../../config/db";
const getAllNews = (req, res) => {
  // const newsData = await executeQuery("select * from News", []);
  res.send("newsData");
};

export { getAllNews };
