import React from 'react';
import './Post.css';

export default function Post({post}) {
  return (
    <div className='post'>
        <h4>{post.title}</h4>
        <p><small>userId: {post.userId}</small></p>
        <p><small>postId: {post.id}</small></p>
        <p>{post.body}</p>
    </div>
  )
}
