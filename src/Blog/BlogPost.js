import React from 'react';
import './BlogPost.css';
import { alexanderPost } from '../content/posts/alexanderpost';
import { ousterhoutPost } from '../content/posts/ousterhoot';


const BlogPost = ({ postId }) => {
    // Map of post IDs to post objects
    const posts = {
        'alexander-notes-synthesis-form': alexanderPost,
        // 'ousterhout-notes': ousterhoutPost
    };

    const post = posts[postId];

    if (!post) {
        return (
            <div className="blog-container">
                <div className="blog-error">Post not found</div>
                <a href="/blog" className="back-to-blog">← Back to all posts</a>
            </div>
        );
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    console.log(post)
    return (
        <article className="blog-post-full">
            <header className="blog-post-header">
                <h3 className="blog-post-title">{post.title}</h3>
                <div className="blog-post-meta">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="meta-separator">•</span>
                    <span className="read-time">{post.readTime}</span>
                    <span className="meta-separator">•</span>
                    <span className="category">{post.category}</span>
                </div>
            </header>
            
            <div 
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <footer className="blog-post-footer">
                <a href="/blog" className="back-to-blog">← Back to all posts</a>
            </footer>
        </article>
    );
};

export default BlogPost;