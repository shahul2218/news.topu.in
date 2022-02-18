import nc from "next-connect";
import { getAllImages } from "../../../controller/gallery/gallery";

const handler = nc();
handler.get(getAllImages);

export default handler;
// const handler = nc({
//   onError: (err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).end("Something broke!");
//   },
//   onNoMatch: (req, res) => {
//     res.status(404).end("Page is not found");
//   },
// })
//   .use(someMiddleware())
//   .get((req, res) => {
//     res.send("Hello world");
//   })
//   .post((req, res) => {
//     res.json({ hello: "world" });
//   })
//   .put(async (req, res) => {
//     res.end("async/await is also supported!");
//   })
//   .patch(async (req, res) => {
//     throw new Error("Throws me around! Error can be caught and handled.");
//   });
