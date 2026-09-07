import { FiCode, FiServer, FiCpu, FiTrendingUp } from 'react-icons/fi';
import './Skills.css';

const SKILL_GROUPS = [
  {
    icon: <FiCode size={22} />,
    label: 'Agentic AI & LLMs',
    color: 'violet',
    skills: ['LangGraph', 'CrewAI', 'Claude API', 'LangChain', 'RAG', 'LLM Observability'],
  },
  {
    icon: <FiServer size={22} />,
    label: 'ML & Deep Learning',
    color: 'cyan',
    skills: ['LSTM', 'TensorRT', 'Multimodal Fusion', 'Anomaly Detection', 'Sentiment Analysis', 'Time-Series'],
  },
  {
    icon: <FiCpu size={22} />,
    label: 'MLOps & Deployment',
    color: 'violet',
    skills: ['CI/CD', 'Jenkins', 'GitHub Actions', 'Docker', 'FastAPI', 'NVIDIA Jetson Xavier'],
  },
  {
    icon: <FiTrendingUp size={22} />,
    label: 'Data & Observability',
    color: 'cyan',
    skills: ['Prometheus', 'Grafana', 'RAGAS', 'SQL', 'Model Monitoring', 'Dashboard Development'],
  },
];

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">
          Skills &amp; <span className="gradient-text">Tech Stack</span>
        </h2>
        <p className="section-subtitle">
          A curated set of technologies I use to build reliable, scalable software.
        </p>

        <div className="skills__grid">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label} className={`glass-card skills__card skills__card--${group.color}`}>
              <div className={`skills__card-icon skills__card-icon--${group.color}`}>
                {group.icon}
              </div>
              <h3 className="skills__card-title">{group.label}</h3>
              <div className="skills__tags">
                {group.skills.map((skill) => (
                  <span key={skill} className={`tag ${group.color === 'cyan' ? 'tag-accent' : ''}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
