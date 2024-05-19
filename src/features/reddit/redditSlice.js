import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  posts: [],
  searchTerm: '',
  error: false,
  isloading: false,
  selectedSubreddit: 'r/pics/',
}

const redditSlice = createSlice({
  name: 'redditPosts',
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.posts = action.payload;
    },
    getPosts: (state) => {
      state.isloading = true;
      state.error = false;
    },
    getPostSuccess: (state, action) => {
      state.isloading = false;
      state.posts = action.payload;
    },
    getPostFailed: (state) => {
      state.error = true;
      state.isloading = false;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    // set selected subreddit
    setSelectedSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
      state.searchTerm = '';
    },
    // toggle to show post comments true or false
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
});