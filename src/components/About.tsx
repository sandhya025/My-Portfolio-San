import { FiAward, FiBookOpen, FiBriefcase } from 'react-icons/fi';
import './About.css';

const ROLES = [
  {
    company: 'Visa Inc.',
    title: 'Associate Data Scientist',
    dates: 'Aug 2025 — Present',
    location: 'Bangalore, India',
    points: [
      'CI/CD for AI/ML services with Jenkins and GitHub Actions',
      'Anomaly detection on transactional Prometheus metrics, scaled from 10 to 60 clients',
      'Sentiment analysis on client incidents to prioritize high-risk accounts',
      'LLM observability SDK adopted across 15 internal applications (25% faster debugging)',
      'LangGraph agentic RAG with multi-hop reasoning — 30% higher response accuracy',
      'Mentored 2 interns across AI/ML and data engineering',
    ],
  },
  {
    company: 'Mercedes-Benz Research and Development India (MBRDI)',
    title: 'AI/ML Engineer',
    dates: 'Aug 2023 — July 2025',
    location: 'Bangalore, India',
    points: [
      'RAG pipeline that cut Level 3 ADAS scenario creation time by 80%',
      'LSTM lead-vehicle prediction in the ego planner: 10% faster response, 15% fewer abrupt maneuvers',
      'TensorRT on Jetson Xavier: 6× speedup, FP16, 20ms inference on live video',
    ],
  },
  {
    company: 'Baker Hughes',
    title: 'Data Science Intern',
    dates: 'Jan 2023 — June 2023',
    location: 'Bangalore, India',
    points: [
      'Predictive Emission Monitoring System with up to 60% cost savings versus traditional CEMS',
      'Dashboard widgets for real-time industrial analytics — 25% faster decisions',
    ],
  },
];

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <p className="section-label">Background</p>
        <h2 className="section-title">
          Experience &amp; <span className="gradient-text">Education</span>
        </h2>
        <p className="section-subtitle">
          Production AI across fintech, autonomous driving, and industrial ML — from
          prototypes to systems serving 60+ enterprise clients.
        </p>

        <div className="about__patent glass-card">
          <div className="about__patent-icon">
            <FiAward size={22} />
          </div>
          <div>
            <p className="about__patent-label">Patent granted · Jan 2025</p>
            <h3 className="about__patent-title">
              Lead Vehicle Behaviour filtration for smoother ego acceleration profile
            </h3>
            <p className="about__patent-meta">
              MBRDI · Patent Number 2024ID03059 — multimodal fusion of map, lead vehicle,
              and surrounding objects for a safer ego acceleration profile.
            </p>
          </div>
        </div>

        <div className="about__timeline">
          {ROLES.map((role) => (
            <article key={role.company} className="glass-card about__role">
              <div className="about__role-icon">
                <FiBriefcase size={20} />
              </div>
              <div className="about__role-body">
                <div className="about__role-head">
                  <h3 className="about__role-title">{role.title}</h3>
                  <span className="about__role-dates">{role.dates}</span>
                </div>
                <p className="about__role-company">
                  {role.company} · {role.location}
                </p>
                <ul className="about__role-points">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="about__edu">
          <article className="glass-card about__edu-card">
            <FiBookOpen size={20} />
            <h3>M.Tech, Signal Processing and Machine Learning</h3>
            <p>NIT Karnataka, Surathkal</p>
            <span>Sept 2021 — June 2023</span>
          </article>
          <article className="glass-card about__edu-card">
            <FiBookOpen size={20} />
            <h3>B.Tech, Electrical Engineering</h3>
            <p>HBTU, Kanpur</p>
            <span>Aug 2015 — June 2019</span>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
