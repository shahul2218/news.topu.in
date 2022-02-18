import nc from "next-connect";
import { getAllNews } from "../../../controller/news/news";

const handler = nc();
handler.get(getAllNews);

export default handler;
