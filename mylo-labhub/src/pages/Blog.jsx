import React from 'react';
import '../styles/Blog.css';

function Blog() {
return (
    <div className="blog-page">
    <h1>Our Blog</h1>
    <div className="blog-grid">
        <div className="blog-card">Post 1</div>
        <div className="blog-card">Post 2</div>
        <div className="blog-card">Post 3</div>
    </div>
    </div>
);
}

export default Blog;
