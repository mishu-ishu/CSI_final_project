const T = require('../config/twitterConfig');

// Posting a tweet
const postTweet = (status) => {
  T.post('statuses/update', { status }, (err, data, response) => {
    if (err) {
      console.error('Error posting tweet', err);
    } else {
      console.log('Tweet posted successfully', data);
    }
  });
};

// Liking a tweet
const likeTweet = (tweetId) => {
  T.post('favorites/create', { id: tweetId }, (err, data, response) => {
    if (err) {
      console.error('Error liking tweet', err);
    } else {
      console.log('Tweet liked successfully', data);
    }
  });
};

// Fetching tweets
const fetchTweets = (hashtag) => {
  T.get('search/tweets', { q: `#${hashtag}`, count: 10 }, (err, data, response) => {
    if (err) {
      console.error('Error fetching tweets', err);
    } else {
      const tweets = data.statuses;
      tweets.forEach(tweet => {
        console.log(`Tweet by ${tweet.user.screen_name}: ${tweet.text}`);
      });
    }
  });
};

module.exports = {
  postTweet,
  likeTweet,
  fetchTweets,
};
