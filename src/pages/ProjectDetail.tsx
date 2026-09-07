import { useParams, Link } from 'react-router-dom';
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import { projects } from '../data/projects';
import Footer from '../components/Footer';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
        <div className="container">
          <h1 className="section-title">Project not found</h1>
          <Link to="/projects" className="btn-outline" style={{ marginTop: '24px', display: 'inline-flex' }}>
            <FiArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="project-detail" style={{ paddingTop: '100px' }}>
        <div className="container">
          {/* Back */}
          <Link to="/projects" className="project-detail__back" id="project-detail-back">
            <FiArrowLeft size={16} /> All Projects
          </Link>

          {/* Header */}
          <div className="project-detail__header glass-card">
            <div className="project-detail__meta">
              <span className="tag">{project.category}</span>
              <span className="project-detail__date">{project.date}</span>
            </div>
            <h1 className="project-detail__title">{project.title}</h1>
            <p className="project-detail__short-desc">{project.shortDesc}</p>
            <div className="project-detail__actions">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline" id="project-github-link">
                  <FiGithub size={16} /> View on GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" id="project-demo-link">
                  <FiExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Tech Stack */}
          <section className="project-detail__section">
            <h2 className="project-detail__section-title">Tech Stack</h2>
            <div className="project-detail__tech">
              {project.tech.map((t) => (
                <span key={t} className="tag project-detail__tech-tag">{t}</span>
              ))}
            </div>
          </section>

          {/* Description */}
          <section className="project-detail__section">
            <h2 className="project-detail__section-title">Overview</h2>
            <div className="glass-card project-detail__readme">
              {project.fullDesc.split('\n').map((line, i) => {
                if (line.startsWith('## '))
                  return <h3 key={i} className="project-detail__readme-h2">{line.replace('## ', '')}</h3>;
                if (line.startsWith('### '))
                  return <h4 key={i} className="project-detail__readme-h3">{line.replace('### ', '')}</h4>;
                if (line.startsWith('- '))
                  return <li key={i} className="project-detail__readme-li">{line.replace('- ', '')}</li>;
                if (line.trim() === '')
                  return <br key={i} />;
                return <p key={i} className="project-detail__readme-p">{line}</p>;
              })}
            </div>
          </section>

          {/* Related */}
          <section className="project-detail__section">
            <h2 className="project-detail__section-title">Other Projects</h2>
            <div className="project-detail__related">
              {projects
                .filter((p) => p.id !== id)
                .slice(0, 2)
                .map((p) => (
                  <Link key={p.id} to={`/projects/${p.id}`} className="glass-card project-detail__related-card">
                    <span className="tag">{p.category}</span>
                    <h3 className="project-detail__related-title">{p.title}</h3>
                    <p className="project-detail__related-desc">{p.shortDesc}</p>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;
