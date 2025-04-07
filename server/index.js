
import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/generate', async (req, res) => {
  const { text, voice } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/audio/speech',
      {
        model: 'tts-1',
        input: text,
        voice: voice || 'nova',
        response_format: 'mp3',
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        responseType: 'arraybuffer',
      }
    );

    res.set('Content-Type', 'audio/mpeg');
    res.send(response.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).send('Error generating voice');
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
