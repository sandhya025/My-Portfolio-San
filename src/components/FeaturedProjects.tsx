import { Link } from 'react-router-dom';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { projects } from '../data/projects';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="section featured-projects" id="projects">
      <div className="container">
        <p className="section-label">Things I've built</p>
        <div className="featured-projects__header">
          <div>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              A selection of projects that showcase my engineering thinking and technical depth.
            </p>
          </div>
          <Link to="/projects" className="btn-outline featured-projects__view-all" id="featured-view-all">
            View All
            <FiArrowRight size={16} />
          </Link>
        </div>

        <div className="featured-projects__grid">
          {featured.map((project, i) => (
            <div key={project.id} className="glass-card project-card" style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Top row */}
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

              {/* Content */}
              <Link to={`/projects/${project.id}`} className="project-card__link">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.shortDesc}</p>
              </Link>

              {/* Tech tags */}
              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              {/* Detail link */}
              <Link to={`/projects/${project.id}`} className="project-card__detail">
                View Details <FiArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
