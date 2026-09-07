import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiClock, FiTag, FiShare2 } from 'react-icons/fi';
import { blogs } from '../data/blogs';
import Footer from '../components/Footer';
import './BlogPost.css';

// Simple markdown-to-JSX renderer (no external lib needed)
const renderMarkdown = (content: string): React.ReactElement[] => {
  const lines: string[] = content.split('\n');
  const elements: React.ReactElement[] = [];
  let codeBlock: string[] = [];
  let inCode = false;
  let codeLang = '';

  lines.forEach((line, i) => {
    if (line.startsWith('```')) {
      if (!inCode) {
        inCode = true;
        codeLang = line.replace('```', '').trim();
      } else {
        elements.push(
          <pre key={`code-${i}`} className="blog-post__code-block">
            <div className="blog-post__code-lang">{codeLang || 'code'}</div>
            <code>{codeBlock.join('\n')}</code>
          </pre>
        );
        codeBlock = [];
        inCode = false;
        codeLang = '';
      }
      return;
    }

    if (inCode) { codeBlock.push(line); return; }

    if (line.startsWith('## '))
      return elements.push(<h2 key={i} className="blog-post__h2">{line.replace('## ', '')}</h2>);
    if (line.startsWith('### '))
      return elements.push(<h3 key={i} className="blog-post__h3">{line.replace('### ', '')}</h3>);
    if (line.startsWith('| ')) {
      // table row — simple passthrough as preformatted
      return elements.push(<p key={i} className="blog-post__table-row">{line}</p>);
    }
    if (line.startsWith('- ') || line.startsWith('* '))
      return elements.push(<li key={i} className="blog-post__li">{line.replace(/^[-*] /, '')}</li>);
    if (line.trim() === '')
      return elements.push(<br key={i} />);

    // Inline code: `code`
    const parts = line.split(/(`[^`]+`)/g);
    if (parts.length > 1) {
      return elements.push(
        <p key={i} className="blog-post__p">
          {parts.map((part, j) =>
            part.startsWith('`') && part.endsWith('`')
              ? <code key={j} className="blog-post__inline-code">{part.slice(1, -1)}</code>
              : part
          )}
        </p>
      );
    }

    // Bold: **text**
    const boldParts = line.split(/(\*\*[^*]+\*\*)/g);
    if (boldParts.length > 1) {
      return elements.push(
        <p key={i} className="blog-post__p">
          {boldParts.map((part, j) =>
            part.startsWith('**') && part.endsWith('**')
              ? <strong key={j}>{part.slice(2, -2)}</strong>
              : part
          )}
        </p>
      );
    }

    elements.push(<p key={i} className="blog-post__p">{line}</p>);
  });

  return elements;
};

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);
  const currentIndex = blogs.findIndex((b) => b.id === id);
  const prev = blogs[currentIndex - 1];
  const next = blogs[currentIndex + 1];

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied!');
  };

  if (!blog) {
    return (
      <main style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
        <div className="container">
          <h1 className="section-title">Post not found</h1>
          <Link to="/blog" className="btn-outline" style={{ marginTop: '24px', display: 'inline-flex' }}>
            <FiArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="blog-post-page" style={{ paddingTop: '100px' }}>
        <div className="container">
          {/* Back */}
          <Link to="/blog" className="project-detail__back" id="blog-post-back">
            <FiArrowLeft size={16} /> All Posts
          </Link>

          <div className="blog-post-layout">
            {/* Article */}
            <article className="blog-post-article">
              {/* Header */}
              <div className="blog-post__header glass-card">
                <div className="blog-post__meta-top">
                  <span className="tag tag-accent">{blog.category}</span>
                </div>
                <h1 className="blog-post__title">{blog.title}</h1>
                <p className="blog-post__excerpt">{blog.excerpt}</p>
                <div className="blog-post__meta">
                  <span><FiCalendar size={14} /> {blog.date}</span>
                  <span><FiClock size={14} /> {blog.readTime} read</span>
                  <button className="blog-post__share" onClick={copyLink} id="blog-copy-link">
                    <FiShare2 size={14} /> Copy Link
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="glass-card blog-post__content">
                {renderMarkdown(blog.content)}
              </div>

              {/* Tags */}
              <div className="blog-post__tags-section">
                <FiTag size={14} />
                {blog.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>

              {/* Prev / Next */}
              <div className="blog-post__nav">
                {prev ? (
                  <Link to={`/blog/${prev.id}`} className="glass-card blog-post__nav-card" id="blog-prev">
                    <span className="blog-post__nav-label">← Previous</span>
                    <span className="blog-post__nav-title">{prev.title}</span>
                  </Link>
                ) : <div />}
                {next ? (
                  <Link to={`/blog/${next.id}`} className="glass-card blog-post__nav-card blog-post__nav-card--right" id="blog-next">
                    <span className="blog-post__nav-label">Next →</span>
                    <span className="blog-post__nav-title">{next.title}</span>
                  </Link>
                ) : <div />}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="blog-post-sidebar">
              <div className="glass-card blog-post__sidebar-card">
                <h3 className="blog-post__sidebar-title">More Posts</h3>
                {blogs
                  .filter((b) => b.id !== id)
                  .slice(0, 3)
                  .map((b) => (
                    <Link key={b.id} to={`/blog/${b.id}`} className="blog-post__sidebar-item">
                      <span className="tag tag-accent">{b.category}</span>
                      <p className="blog-post__sidebar-item-title">{b.title}</p>
                      <span className="blog-post__sidebar-item-date">{b.date}</span>
                    </Link>
                  ))}
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
