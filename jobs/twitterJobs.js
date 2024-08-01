const schedule = require('node-schedule');
const { postTweet, likeTweet } = require('../controllers/twitterController');

// Schedule a tweet to be posted every day at 9 AM
const dailyTweetJob = schedule.scheduleJob('0 9 * * *', () => {
  postTweet('Good morning! This is an automated tweet.');
});

// Schedule a job to like a tweet every hour
const hourlyLikeJob = schedule.scheduleJob('0 * * * *', () => {
  const tweetId = 'example_tweet_id'; // Replace with a valid tweet ID
  likeTweet(tweetId);
});

module.exports = {
  dailyTweetJob,
  hourlyLikeJob,
};
