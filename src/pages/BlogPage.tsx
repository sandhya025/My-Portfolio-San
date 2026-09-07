import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import { blogs } from '../data/blogs';
import Footer from '../components/Footer';
import './BlogPage.css';

const ALL_CATEGORIES = ['All', ...new Set(blogs.map((b) => b.category))];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = blogs
    .filter((b) => {
      const matchCat = activeCategory === 'All' || b.category === activeCategory;
      const matchSearch =
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        b.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchSearch;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <main className="blog-page" style={{ paddingTop: '100px' }}>
        <div className="container">
          <div className="blog-page__header">
            <p className="section-label">Thoughts & learnings</p>
            <h1 className="section-title">
              Tech <span className="gradient-text">Blog</span>
            </h1>
            <p className="section-subtitle">
              System design, backend engineering, and lessons from building real software.
            </p>
          </div>

          {/* Controls */}
          <div className="blog-page__controls">
            <div className="blog-page__filters">
              {ALL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`projects-page__filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  id={`blog-filter-${cat.toLowerCase().replace(' ', '-')}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <input
              type="text"
              className="projects-page__search"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id="blog-search"
            />
          </div>

          {/* Blog list */}
          <div className="blog-page__list">
            {filtered.length === 0 ? (
              <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '60px 0' }}>
                No posts match your search.
              </p>
            ) : (
              filtered.map((blog, i) => (
                <Link
                  key={blog.id}
                  to={`/blog/${blog.id}`}
                  className="glass-card blog-card"
                  style={{ animationDelay: `${i * 0.08}s` }}
                  id={`blog-listing-${blog.id}`}
                >
                  <div className="blog-card__left">
                    <span className="tag tag-accent blog-card__category">{blog.category}</span>
                    <h2 className="blog-card__title">{blog.title}</h2>
                    <p className="blog-card__excerpt">{blog.excerpt}</p>
                    <div className="blog-card__tags">
                      {blog.tags.slice(0, 4).map((t) => (
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
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
