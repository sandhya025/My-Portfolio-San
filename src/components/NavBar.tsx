import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMenu, FiX, FiMail, FiPhone, FiCopy, FiCheck } from 'react-icons/fi';
import './NavBar.css';

const CONTACT = {
  email: 'sandhya025lko@gmail.com',
  phone: '+91-8840813974',
  linkedin: 'https://www.linkedin.com/in/vermasandhya',
};

const NavBar = () => {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [dropOpen, setDropOpen]       = useState(false);
  const [copied, setCopied]           = useState<'email' | 'phone' | null>(null);
  const location   = useLocation();
  const dropRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const navLinks = [
    { label: 'About',    href: '/#about' },
    { label: 'Skills',   href: '/#skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog',     href: '/blog' },
    { label: 'Contact',  href: '/#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo"><span className="navbar__logo-bracket">&lt;</span><span className="navbar__logo-name">Sandhya</span><span className="navbar__logo-bracket"> /&gt;</span></Link>

        {/* Desktop links */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social + CTA */}
        <div className="navbar__actions">
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="navbar__icon" aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>
          <a href={`mailto:${CONTACT.email}`} className="navbar__icon" aria-label="Email">
            <FiMail size={20} />
          </a>

          {/* Hire Me dropdown */}
          <div className="hire-wrap" ref={dropRef}>
            <button
              className="btn-primary navbar__cta"
              id="hire-me-btn"
              onClick={() => setDropOpen(!dropOpen)}
              aria-expanded={dropOpen}
            >
              Hire Me
            </button>

            {dropOpen && (
              <div className="hire-dropdown" role="dialog" aria-label="Contact details">
                <p className="hire-dropdown__label">Get in touch</p>

                <div className="hire-dropdown__row">
                  <FiMail size={15} className="hire-dropdown__icon" />
                  <span className="hire-dropdown__value">{CONTACT.email}</span>
                  <button
                    className="hire-dropdown__copy"
                    onClick={() => copyToClipboard(CONTACT.email, 'email')}
                    aria-label="Copy email"
                    title="Copy"
                  >
                    {copied === 'email' ? <FiCheck size={14} /> : <FiCopy size={14} />}
                  </button>
                </div>

                <div className="hire-dropdown__row">
                  <FiPhone size={15} className="hire-dropdown__icon" />
                  <span className="hire-dropdown__value">{CONTACT.phone}</span>
                  <button
                    className="hire-dropdown__copy"
                    onClick={() => copyToClipboard(CONTACT.phone, 'phone')}
                    aria-label="Copy phone"
                    title="Copy"
                  >
                    {copied === 'phone' ? <FiCheck size={14} /> : <FiCopy size={14} />}
                  </button>
                </div>

                <a href="/#contact" className="hire-dropdown__footer-link" onClick={() => setDropOpen(false)}>
                  Send a message ↓
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="navbar-hamburger"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="navbar__mobile-link">
              {link.label}
            </a>
          ))}
          <div className="navbar__mobile-socials">
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="navbar__icon">
              <FiLinkedin size={20} />
            </a>
            <a href={`mailto:${CONTACT.email}`} className="navbar__icon" aria-label="Email">
              <FiMail size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;