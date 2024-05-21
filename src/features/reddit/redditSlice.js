import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { getSubredditPosts, getPostComments } from '../../app/api';

const initialState = {
  posts: [],
  error: false,
  isLoading: false,
  searchTerm: '',
  selectedSubreddit: '/r/pics/',
};

export const fetchPosts = createAsyncThunk(
  'redditPosts/fetchPosts',
  async (subreddit, { rejectWithValue }) => {
    try {
      const posts = await getSubredditPosts(subreddit);
      const newPosts = posts.map((post) => ({
        ...post,
        showingComments: false,
        comments: [],
        loadingComments: false,
        errorComments: false,
      }));
      return newPosts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchComments = createAsyncThunk(
  'redditPosts/fetchComments',
  async ({ postIndex, permalink }, { rejectWithValue }) => {
    try {
      const comments = await getPostComments(permalink);
      return { postIndex, comments };
    } catch (error) {
      return rejectWithValue({ postIndex, error: error.message });
    }
  },
);

const redditSlice = createSlice({
  name: 'redditPosts',
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.posts = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
      state.searchTerm = '';
    },
    toggleToShowComments: (state, action) => {
      state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
    },
    getComments: (state, action) => {
      state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
      if (!state.posts[action.payload].showingComments) {
        return;
      }
      state.posts[action.payload].loadingComments = true;
      state.posts[action.payload].error = false;
    },
    getCommentsSuccess(state, action) {
      state.posts[action.payload.index].loadingComments = false;
      state.posts[action.payload.index].comments = action.payload.comments;
    },
    getCommentsFailed(state, action) {
      state.posts[action.payload].loadingComments = false;
      state.posts[action.payload].error = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchComments.pending, (state, action) => {
        const post = state.posts[action.meta.arg.postIndex];
        post.loadingComments = true;
        post.errorComments = false;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        const { postIndex, comments } = action.payload;
        const post = state.posts[postIndex];
        post.loadingComments = false;
        post.comments = comments;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        const { postIndex } = action.payload;
        const post = state.posts[postIndex];
        post.loadingComments = false;
        post.errorComments = true;
      });
  },
});

export const {
  addPosts,
  getPosts,
  getPostSuccess,
  getPostFailed,
  setSearchTerm,
  setSelectedSubreddit,
  toggleToShowComments,
  getComments,
  getCommentsSuccess,
  getCommentsFailed,
} = redditSlice.actions;

export default redditSlice.reducer;

const selectPosts = (state) => state.reddit.posts;

const selectSearchTerm = (state) => state.reddit.searchTerm;

export const selectSelectedSubreddit = (state) => state.reddit.selectedSubreddit;

export const selectFilteredPosts = createSelector(
  [selectPosts, selectSearchTerm],
  (posts, searchTerm) => {
    if (searchTerm !== '') {
      return posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    return posts;
  },
);
