import nc from "next-connect";
import { getSingleNews } from "../../../controller/news/news";

const handler = nc();
handler.get(getSingleNews);

export default handler;
