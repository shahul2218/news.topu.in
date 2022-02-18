import pool from "../../config/db";
const getAllImages = async (req, res) => {
  const galleryData = await executeQuery("select * from images", []);
  res.send(galleryData);
};

export { getAllImages };
