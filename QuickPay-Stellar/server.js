const express = require("express");
const app = express();

app.use(express.json());

let transactions = [];

app.get("/", (req, res) => {
  res.send("QuickPay Stellar API running");
});

app.post("/send", (req, res) => {
  const { sender, receiver, amount } = req.body;

  const transaction = {
    sender,
    receiver,
    amount
  };

  transactions.push(transaction);

  res.json({
    message: "Payment successful",
    transaction
  });
});

app.get("/transactions", (req, res) => {
  res.json(transactions);
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});