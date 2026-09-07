import { useState, useEffect } from 'react';
import { FiGithub, FiArrowDown, FiFileText, FiDownload } from 'react-icons/fi';
import { profile } from '../data/profile';
import './Hero.css';

const ROLES = [
  'AI Engineer',
  'Data Scientist',
  'Agentic AI Specialist',
  'MLOps Engineer',
  'LLM Observability',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    setDisplayed(currentRole.substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`hero__orb hero__orb--${i + 1}`} />
        ))}
      </div>

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Open to remote, contract &amp; freelance work
        </div>

        <h1 className="hero__name">
          Hi, I'm <span className="gradient-text">{profile.firstName}</span>
        </h1>

        <div className="hero__role">
          <span className="hero__role-text">{displayed}</span>
          <span className="hero__cursor">|</span>
        </div>

        <p className="hero__bio">
          Independent AI engineer with 3+ years building production systems across
          fintech, autonomous driving, and industrial ML — from solo prototypes to
          platforms serving 60+ enterprise clients. Granted patent in deep-learning
          ADAS perception. Specialized in agentic pipelines, LLM observability, and
          end-to-end MLOps.
        </p>

        <div className="hero__actions">
          <a href="/projects" className="btn-primary" id="hero-view-projects">
            View Projects
          </a>
          <a
            href={profile.resume}
            className="btn-outline"
            id="hero-resume"
            download
          >
            <FiDownload size={16} />
            Resume
          </a>
          <a href="/blog" className="btn-outline" id="hero-read-blog">
            <FiFileText size={16} />
            Read Blog
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            id="hero-github"
          >
            <FiGithub size={16} />
            GitHub
          </a>
        </div>

        <div className="hero__stats">
          {[
            { value: '3+', label: 'Years in AI/ML' },
            { value: '60+', label: 'Enterprise Clients' },
            { value: '1', label: 'Granted Patent' },
          ].map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value gradient-text">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <a href="/#about" className="hero__scroll" aria-label="Scroll down">
          <FiArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
