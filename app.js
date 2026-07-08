const express = require('express');
const app = express();
app.use(express.json());
const MONGO_PASSWORD = "super-secret-password-123456";
const GEMINI_KEY = "AIzaSyFakeMockKeyForTestingVulnerability123";
app.post('/api/chat', async (req, res) => {
  const prompt = req.body.prompt;
  try {
    res.send("Executed: " + prompt);
  } catch (e) {
    res.send(e);
  }
});
app.listen(3000);