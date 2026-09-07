import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiPhone, FiCopy, FiCheck } from 'react-icons/fi';
import { profile } from '../data/profile';
import './Footer.css';

const CONTACT = {
  email: profile.email,
  phone: profile.phone,
};

const Footer = () => {
  const [copied, setCopied] = useState<'email' | 'phone' | null>(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        {/* Left */}
        <div className="footer__left">
          <span className="footer__logo"><span className="footer__logo-bracket">&lt;</span>{profile.firstName}<span className="footer__logo-bracket"> /&gt;</span></span>
          <p className="footer__tagline">
            Production AI — agentic pipelines, LLM observability, and MLOps.
          </p>
        </div>

        {/* Links */}
        <nav className="footer__nav">
          <a href="/#skills" className="footer__nav-link">Skills</a>
          <a href="/projects" className="footer__nav-link">Projects</a>
          <a href="/blog" className="footer__nav-link">Blog</a>
          <a href="/#contact" className="footer__nav-link">Contact</a>
        </nav>

        {/* Socials */}
        <div className="footer__socials">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="GitHub">
            <FiGithub size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>

          {/* Email with tooltip + copy */}
          <div className="footer__tooltip-wrap">
            <a href={`mailto:${CONTACT.email}`} className="footer__social-icon" aria-label="Email">
              <FiMail size={20} />
            </a>
            <div className="footer__tooltip">
              <span className="footer__tooltip-text">{CONTACT.email}</span>
              <button
                className="footer__tooltip-copy"
                onClick={(e) => { e.preventDefault(); copyToClipboard(CONTACT.email, 'email'); }}
                aria-label="Copy email"
              >
                {copied === 'email' ? <FiCheck size={12} /> : <FiCopy size={12} />}
              </button>
            </div>
          </div>

          {/* Phone with tooltip + copy */}
          <div className="footer__tooltip-wrap">
            <a href={profile.phoneHref} className="footer__social-icon" aria-label="Phone">
              <FiPhone size={20} />
            </a>
            <div className="footer__tooltip">
              <span className="footer__tooltip-text">{CONTACT.phone}</span>
              <button
                className="footer__tooltip-copy"
                onClick={(e) => { e.preventDefault(); copyToClipboard(CONTACT.phone, 'phone'); }}
                aria-label="Copy phone"
              >
                {copied === 'phone' ? <FiCheck size={12} /> : <FiCopy size={12} />}
              </button>
            </div>
          </div>
        </div>

        {/* Back to top */}
        <button className="footer__top-btn" onClick={scrollToTop} aria-label="Back to top" id="back-to-top">
          <FiArrowUp size={18} />
        </button>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} {profile.firstName} {profile.lastName}. Built with React &amp; ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
