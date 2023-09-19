import express from "express";
import cors from "cors";
import generate from "./generate.js";

const app = express();
app.use(cors());
app.use(express.json({ extented: false }));
const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
  res.send("Hello world from our API");
});

app.post("/generate", async (req, res) => {
  const queryDescription = req.body.queryDescription;
  try {
    const sqlQuery = await generate(queryDescription);
    res.json({ response: sqlQuery });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
