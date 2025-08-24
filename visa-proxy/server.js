import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import https from "https";

const app = express();
app.use(cors());

// Create an https agent that ignores SSL verification
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

app.get("/api/transactions", async (req, res) => {
  const page = req.query.page || 0;

  try {
    const response = await fetch(
      `https://64.227.189.27/wallet/api/v1/transaction_history?service_id=111&page=${page}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk`,
        },
        agent: httpsAgent,
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
});

app.listen(5000, () => {
  console.log("Proxy server running on http://localhost:5000");
});
