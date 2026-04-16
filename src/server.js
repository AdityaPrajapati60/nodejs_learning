import express from "express";

// // import routes

import movieRoutes from "./routes/movieRoutes.js";

const app = express();

app.use(express.json());

// // API routes
app.use("/movies", movieRoutes);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
