const express = require('express');
const dotenv = require('dotenv');
const twitterRoutes = require('./routes/twitterRoutes');
const { dailyTweetJob, hourlyLikeJob } = require('./jobs/twitterJobs');

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Social Media Bot is running');
});

app.use('/twitter', twitterRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

