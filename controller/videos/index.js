import pool from "../../config/db";
const getAllVideos = async (req, res) => {
  const videoData = await executeQuery("select * from Videos", []);
  res.send(videoData);
};

export { getAllVideos };
