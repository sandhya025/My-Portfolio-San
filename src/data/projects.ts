export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tech: string[];
  github: string | null;
  demo: string | null;
  demoVideo: string | null;
  featured: boolean;
  date: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "returns-compliance-agent",
    title: "Returns & Complaint Resolution Agent",
    shortDesc: "A 5-agent AI pipeline that resolves e-commerce return disputes end-to-end in under 3 minutes.",
    fullDesc: `## Overview
Built a sequential multi-agent system using CrewAI and Claude API to handle e-commerce return and complaint resolution end-to-end.

## Highlights
- 5-agent architecture for retrieval, evaluation, and decisioning
- RAG-based policy retrieval across Amazon, Flipkart, eBay, and Meesho
- Context chaining to handle complex seller disputes and expired return windows
- Reduced manual resolution time from 35+ minutes to under 3 minutes
- Achieved 88% policy accuracy across 12 evaluated test cases

## Impact
The system improved email response quality by 77% while eliminating policy hallucination through grounded retrieval.
`,
    tech: ["CrewAI", "Claude API", "LangChain", "RAG", "Python", "Agentic AI"],
    github: null,
    demo: null,
    demoVideo: null,
    featured: true,
    date: "2025-01",
    category: "Agentic AI",
  },
  {
    id: "adas-scenario-generation",
    title: "ADAS Scenario Generation with RAG",
    shortDesc: "A retrieval-augmented system that reduces edge-case driving scenario creation time by 80%.",
    fullDesc: `## Overview
Designed a RAG pipeline to combine scenario retrieval from a curated database with LLM-based natural language prompt generation for Level 3 ADAS validation.

## Features
- Scenario retrieval from curated knowledge base
- LLM-driven prompt creation for edge-case simulation
- Reduced scenario creation time by 80%
- Used for validation of autonomous driving behavior under diverse real-world conditions

## Tech Stack
- Retrieval augmented generation
- Natural language prompt synthesis
- ADAS validation workflows
- Deep learning and simulation pipelines
`,
    tech: ["Python", "RAG", "LLM", "ADAS", "Prompt Engineering"],
    github: null,
    demo: null,
    demoVideo: null,
    featured: true,
    date: "2024-10",
    category: "AI Systems",
  },
  {
    id: "pems-ml-monitoring",
    title: "Predictive Emission Monitoring System",
    shortDesc: "A machine-learning monitoring solution that reduced NOx and COx monitoring costs significantly.",
    fullDesc: `## Overview
Developed a predictive emission monitoring system for industrial operations to track emissions more accurately than traditional CEMS.

## Achievements
- Achieved up to 60% cost savings in NOx and COx monitoring
- Improved regulatory compliance and data accuracy for sustainable operations
- Delivered real-time industrial analytics through modular dashboard widgets
- Reduced decision-making time by 25%

## Stack
- Predictive modeling
- Data preprocessing and visualization
- Industrial analytics dashboards
- Machine learning workflows
`,
    tech: ["Python", "Machine Learning", "Dashboarding", "Data Analysis", "SQL"],
    github: null,
    demo: null,
    demoVideo: null,
    featured: true,
    date: "2023-06",
    category: "Industrial ML",
  },
];
