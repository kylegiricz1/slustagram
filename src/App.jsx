// src/App.jsx
import { useState } from 'react';
import { seedPosts } from './data/posts';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Composer from './components/Composer';


export default function App() {
  const [posts, setPosts] = useState(seedPosts);
  
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 680, margin: '0 auto' }}>
        <Composer setPosts={setPosts} />
        <Feed posts={posts} setPosts={setPosts} />
      </main>
    </>
  );
}
