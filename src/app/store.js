import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// import redditReducer from '../features/reddit/redditSlice';
import subRedditReducer from '../features/subreddit/subRedditSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // reddit: redditReducer,
    subreddits: subRedditReducer,
  },
});

export default store;
