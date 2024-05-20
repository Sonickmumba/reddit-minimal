export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${API_ROOT}${subreddit}.json`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
};

// Handle fetch limits
export const rateLimitedFetch = async (url) => {
  const REQUEST_INTERVAL = 6000; // 6000 ms = 6 seconds (10 requests per minute)
  let lastRequestTime = 0;

  const now = Date.now();
  const waitTime = REQUEST_INTERVAL - (now - lastRequestTime);

  if (waitTime > 0) {
    await new Promise((resolve) => setTimeout(resolve, waitTime));
  }

  lastRequestTime = Date.now();
  const response = await fetch(url);
  return response.json();
};

// end handle fetch limits

export const getSubreddits = async () => {
  const json = await rateLimitedFetch(`${API_ROOT}/subreddits.json`);

  return json.data.children.map((subreddit) => subreddit.data);
};

export const getPostComments = async (permalink) => {
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();
  return json[1].data.children.map((subreddit) => subreddit.data);
};
