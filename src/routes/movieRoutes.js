// import express from "express";

// // export default  webseriesRouter = express.Router();

// const serialRouter = express.Router();

// serialRouter.get("/", (req, res) => {
//   return res.status(200).json({ message: "hey how are you" });
// });

// serialRouter.post("/:id", (req, res) => {
//   return res.status(200).json({ message: "hey how are you" });
// });

// export default serialRouter;

import express from "express";

const moviesRouter = express.Router();

moviesRouter.get("/hello", (req, res) => {
  res.status(200).json({ message: "hello" });
});

export default moviesRouter;
