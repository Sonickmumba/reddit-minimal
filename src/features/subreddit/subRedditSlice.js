import { createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from '../../app/api';

const initialState = {
  subreddits: [],
  error: false,
  isLoading: false,
};

const subRedditSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    startgetSubreddits: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    getSubredditsSuccess(state, action) {
      state.isLoading = false;
      state.subreddits = action.payload;
    },
    getSubredditsFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {
  getSubredditsFailed,
  getSubredditsSuccess,
  startgetSubreddits,
} = subRedditSlice.actions;

export default subRedditSlice.reducer;

// export const fetchSubreddits = () => async (dispatch) => {
//   try {
//     dispatch(startgetSubreddits());
//     const subreddits = await getSubreddits();
//     dispatch(getSubredditsSuccess(subreddits));
//   } catch (error) {
//     dispatch(getSubredditsFailed());
//   }
// };

export const fetchSubreddits = () => async (dispatch) => {
  try {
    dispatch(startgetSubreddits());
    const subreddits = await getSubreddits();
    dispatch(getSubredditsSuccess(subreddits));
  } catch (error) {
    dispatch(getSubredditsFailed());
  }
};

export const selectSubreddits = (state) => state.subreddits.subreddits;
