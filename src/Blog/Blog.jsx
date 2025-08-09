import './Blog.css';
import { alexanderPost } from '../content/posts/alexanderpost';

const Blog = () => {

    const blogPosts = [
        alexanderPost
    ];

    const researchPosts = blogPosts.filter(post => post.category === 'research');
    const practicalPosts = blogPosts.filter(post => post.category === 'practical');

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const BlogPostPreview = ({ post }) => (
        <article className="blog-post">
            <header className="post-header">
                <h4 className="post-title">
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                </h4>
                <div className="post-meta">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="meta-separator">•</span>
                    <span className="read-time">{post.readTime}</span>
                </div>
            </header>
            <div className="post-content">
                <p className="post-excerpt">{post.excerpt}</p>
                <a href={`/blog/${post.id}`} className="read-more">Continue reading →</a>
            </div>
        </article>
    );

    return (
        <div className="blog-container">
            <header className="blog-header">
                <h2>Writing</h2>
                <p className="blog-subtitle">
                    Thoughts on the philosophy and foundations of software, backend engineering, and the intersection of theoretical and practical approaches to building systems.
                </p>
            </header>

            <main className="blog-main">
                {researchPosts.length > 0 && (
                    <section className="blog-section">
                        <h3 className="section-title">Research Based</h3>
                        <p className="section-description">
                            Explorations of software design philosophy, historical perspectives on programming methodology, and theoretical foundations of our field.
                        </p>
                        <div className="posts-list">
                            {researchPosts.map(post => (
                                <BlogPostPreview key={post.id} post={post} />
                            ))}
                        </div>
                    </section>
                )}

                {practicalPosts.length > 0 && (
                    <section className="blog-section">
                        <h3 className="section-title">Practical Based</h3>
                        <p className="section-description">
                            Pragmatic discussions on backend engineering, .NET development, and real-world software delivery practices.
                        </p>
                        <div className="posts-list">
                            {practicalPosts.map(post => (
                                <BlogPostPreview key={post.id} post={post} />
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

export default Blog;