import express from "express";

// Constants
const PORT: string = process.env.PORT || "3000";
const HOST: string = "0.0.0.0";

// App
const app: express.Application = express();
app.get("/", (req, res) => {
  res.send("Hello World from docker.");
});

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
