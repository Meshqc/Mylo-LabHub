import React from 'react';
import '../styles/Blog.css';

function Blog() {
return (
    <section className="blog">
    <h1>Our Blog</h1>
    <p>Explore insights, strategies, and stories from the world of research.</p>
    <div className="blog-cards">
        <div className="blog-card">Post 1</div>
        <div className="blog-card">Post 2</div>
    </div>
    </section>
);
}

export default Blog;
