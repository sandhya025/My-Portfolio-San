import { useState, useEffect } from 'react';
import { FiGithub, FiArrowDown, FiFileText } from 'react-icons/fi';
import './Hero.css';

const ROLES = [
  'AI Engineer',
  'LLM & Agentic AI Engineer',
  'ML / MLOps Engineer',
  'AI Systems Builder',
  'Data Scientist',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
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
      {/* Background particles */}
      <div className="hero__bg">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`hero__orb hero__orb--${i + 1}`} />
        ))}
      </div>

      <div className="container hero__content">
        {/* Badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Available for remote, contract, and freelance work
        </div>

        {/* Name */}
        <h1 className="hero__name">
          Hi, I'm <span className="gradient-text">Sandhya Verma</span>
        </h1>

        {/* Typewriter */}
        <div className="hero__role">
          <span className="hero__role-text">{displayed}</span>
          <span className="hero__cursor">|</span>
        </div>

        {/* Bio */}
        <p className="hero__bio">
          Independent AI Engineer with 3+ years building production-grade AI systems
          across fintech, autonomous driving, and industrial ML. I design agentic AI
          pipelines, LLM observability layers, and end-to-end MLOps systems that turn
          research prototypes into measurable business outcomes.
        </p>

        {/* CTAs */}
        <div className="hero__actions">
          <a href="/projects" className="btn-primary" id="hero-view-projects">
            View Projects
          </a>
          <a
            href="https://www.linkedin.com/in/vermasandhya"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            id="hero-linkedin"
          >
            <FiGithub size={16} />
            LinkedIn
          </a>
          <a href="mailto:sandhya025lko@gmail.com" className="btn-outline" id="hero-email">
            <FiFileText size={16} />
            Email Me
          </a>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '60+', label: 'Enterprise Clients' },
            { value: '1', label: 'Granted Patent' },
          ].map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value gradient-text">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <a href="/#about" className="hero__scroll" aria-label="Scroll down">
          <FiArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
