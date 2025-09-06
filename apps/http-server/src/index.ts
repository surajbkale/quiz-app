import express from "express";

const app = express();
app.use(express.json());

app.get("/health-check", (req, res) => {
  res.json({
    message: "working fine",
  });
});

app.listen(5000);
