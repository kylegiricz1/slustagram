// src/components/PostCard.jsx
import { useCallback } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

export default function PostCard({ post, setPosts }) {
  // Toggle like for this specific post
  const toggleLike = useCallback(() => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id !== post.id) return p;
        const likedByMe = !p.likedByMe;
        const likeCount = p.likeCount + (likedByMe ? 1 : -1);
        return { ...p, likedByMe, likeCount };
      })
    );
  }, [post.id, setPosts]);

  return (
    <article
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        overflow: "hidden",
        margin: "12px 0",
        background: "white",
      }}
      aria-label={`post by ${post.author}`}
    >
      {/* Header */}
      <header style={{ display: "flex", alignItems: "center", gap: 8, padding: 8 }}>
        <img
          src={post.avatar}
          alt={`${post.author} avatar`}
          width="36"
          height="36"
          style={{ borderRadius: "50%" }}
        />
        <strong>@{post.author}</strong>
      </header>

      {/* Photo */}
      <img
        src={post.imageUrl}
        alt={post.caption || `Photo by ${post.author}`}
        style={{ width: "100%", display: "block" }}
      />

      {/* Body */}
      <div style={{ padding: 8 }}>
        {/* Like row */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            onClick={toggleLike}
            aria-pressed={post.likedByMe}
            aria-label={post.likedByMe ? "Unlike" : "Like"}
            title={post.likedByMe ? "Unlike" : "Like"}
          >
            {post.likedByMe ? "O" : "X"} Like
          </button>
          <span>{post.likeCount} likes</span>
        </div>

        {/* Caption (optional) */}
        {post.caption && (
          <p style={{ marginTop: 8 }}>
            <strong>@{post.author}</strong> {post.caption}
          </p>
        )}

        {/* Comments */}
        <CommentList comments={post.comments ?? []} />
        <CommentForm postId={post.id} setPosts={setPosts} />
      </div>
    </article>
  );
}
