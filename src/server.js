const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/news', async (req, res) => {
  try {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'programming',
        apiKey: 'YOUR_NEWS_API_KEY',
        from: oneWeekAgo.toISOString().split('T')[0],
      },
    });

    res.json(response.data.articles);
  } catch (error) {
    console.error('Error fetching programming news:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
