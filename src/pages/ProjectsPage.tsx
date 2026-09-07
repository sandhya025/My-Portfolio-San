import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { projects } from '../data/projects';
import Footer from '../components/Footer';
import './ProjectsPage.css';

const ALL_CATEGORIES = ['All', ...new Set(projects.map((p) => p.category))];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = projects.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(search.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <>
      <main className="projects-page" style={{ paddingTop: '100px' }}>
        <div className="container">
          {/* Header */}
          <div className="projects-page__header">
            <p className="section-label">My work</p>
            <h1 className="section-title">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="section-subtitle">
              A complete list of things I've built. Add yours to{' '}
              <code>src/data/projects.js</code>.
            </p>
          </div>

          {/* Filters */}
          <div className="projects-page__controls">
            <div className="projects-page__filters">
              {ALL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`projects-page__filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  id={`filter-${cat.toLowerCase()}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <input
              type="text"
              className="projects-page__search"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id="projects-search"
            />
          </div>

          {/* Grid */}
          <div className="projects-page__grid">
            {filtered.length === 0 ? (
              <p className="projects-page__empty">No projects match your search.</p>
            ) : (
              filtered.map((project, i) => (
                <div key={project.id} className="glass-card project-card" style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="project-card__top">
                    <span className="tag project-card__category">{project.category}</span>
                    <div className="project-card__links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__icon" aria-label="GitHub">
                          <FiGithub size={18} />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-card__icon" aria-label="Live Demo">
                          <FiExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <Link to={`/projects/${project.id}`} className="project-card__link">
                    <h2 className="project-card__title">{project.title}</h2>
                    <p className="project-card__desc">{project.shortDesc}</p>
                  </Link>
                  <div className="project-card__tech">
                    {project.tech.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <Link to={`/projects/${project.id}`} className="project-card__detail">
                    View Details <FiArrowRight size={14} />
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
