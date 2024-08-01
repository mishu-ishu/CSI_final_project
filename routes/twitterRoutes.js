const express = require('express');
const { postTweet, likeTweet, fetchTweets } = require('../controllers/twitterController');

const router = express.Router();

router.post('/tweet', (req, res) => {
  const { status } = req.body;
  postTweet(status);
  res.send('Tweet posted');
});

router.post('/like', (req, res) => {
  const { tweetId } = req.body;
  likeTweet(tweetId);
  res.send('Tweet liked');
});

router.get('/fetch', (req, res) => {
  const { hashtag } = req.query;
  fetchTweets(hashtag);
  res.send('Fetching tweets');
});

module.exports = router;
