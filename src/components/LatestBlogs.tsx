import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import { blogs } from '../data/blogs';
import './LatestBlogs.css';

const LatestBlogs = () => {
  const latest = [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="section latest-blogs" id="blog">
      <div className="container">
        <p className="section-label">Thoughts & learnings</p>
        <div className="latest-blogs__header">
          <div>
            <h2 className="section-title">
              Latest <span className="gradient-text">Blog Posts</span>
            </h2>
            <p className="section-subtitle">
              I write about system design, backend engineering, and things I learn along the way.
            </p>
          </div>
          <Link to="/blog" className="btn-outline latest-blogs__view-all" id="latest-blogs-view-all">
            All Posts
            <FiArrowRight size={16} />
          </Link>
        </div>

        <div className="latest-blogs__list">
          {latest.map((blog, i) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              className="glass-card blog-card"
              style={{ animationDelay: `${i * 0.1}s` }}
              id={`blog-card-${blog.id}`}
            >
              <div className="blog-card__left">
                <span className={`tag blog-card__category tag-accent`}>{blog.category}</span>
                <h3 className="blog-card__title">{blog.title}</h3>
                <p className="blog-card__excerpt">{blog.excerpt}</p>
                <div className="blog-card__tags">
                  {blog.tags.slice(0, 3).map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="blog-card__right">
                <div className="blog-card__meta">
                  <span><FiCalendar size={13} /> {blog.date}</span>
                  <span><FiClock size={13} /> {blog.readTime}</span>
                </div>
                <span className="blog-card__arrow">
                  <FiArrowRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
