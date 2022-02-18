import { executeQuery } from "../../config/db";
const getAllImages = async (req, res) => {
  try {
    const galleryData = await executeQuery(`select * from gallery`, []);
    res.send(galleryData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export { getAllImages };
