import React from 'react';
import { PostList } from './components/PostList';

import 'bootstrap/scss/bootstrap.scss';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App container bg-secondary">
    <h1>Static list of posts</h1>

    <p>
      <span>posts: </span>
      {posts.length}
    </p>

    <p>
      <span>comments: </span>
      {comments.length}
    </p>

    <p>
      <span>Users: </span>
      {users.length}
    </p>

    <PostList posts={preparedPosts} />
  </div>
);

export default App;