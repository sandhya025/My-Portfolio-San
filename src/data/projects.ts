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
    id: "returns-complaint-agent",
    title: "Returns & Complaint Resolution Agent",
    shortDesc: "A 5-agent CrewAI pipeline that resolves e-commerce return disputes in under 3 minutes.",
    fullDesc: `## Overview
An agentic AI system that takes e-commerce return disputes from intake to a policy-grounded email response. A sequential 5-agent pipeline (CrewAI + Claude API) completes the workflow in under 3 minutes versus 35+ minutes of manual handling — a 94% time reduction.

## Features
- Five specialized agents with structured handoffs via context chaining
- RAG-based policy retrieval across Amazon, Flipkart, eBay, and Meesho
- Edge-case handling for expired return windows and seller disputes
- 88% policy accuracy across 12 evaluated test cases
- 77% improvement in email response quality versus single-prompt baselines

## Architecture
- **Policy retrieval** — RAG over platform-specific return policies to eliminate hallucinations
- **Agent orchestration** — sequential CrewAI agents for intake, policy lookup, decisioning, drafting, and review
- **Evaluation** — test cases covering multi-platform policies and dispute edge cases
`,
    tech: ["CrewAI", "Claude API", "RAG", "Python", "Multi-Agent Systems"],
    github: null,
    demo: null,
    demoVideo: null,
    featured: true,
    date: "2025-12",
    category: "Agentic AI",
  },
  {
    id: "agentic-rag-visa",
    title: "Agentic RAG Knowledge Pipeline",
    shortDesc: "LangGraph RAG with multi-hop reasoning and self-reflection, improving response accuracy by 30%.",
    fullDesc: `## Overview
A LangGraph-based agentic RAG pipeline built at Visa for client-facing knowledge systems. It replaced a LangChain-based setup with multi-hop reasoning, self-reflection loops, and adaptive retrieval, improving response accuracy by 30%.

## Features
- Multi-hop reasoning over internal knowledge sources
- Self-reflection loops before final answers
- Adaptive retrieval based on query complexity
- Automated FAQ and knowledge article generation
- Self-serve UI so Product and Business teams can publish without engineering

## Impact
Saved 5–10 hours of manual effort per week and removed engineering dependency for content publishing.
`,
    tech: ["LangGraph", "LLMs", "RAG", "FastAPI", "Python"],
    github: null,
    demo: null,
    demoVideo: null,
    featured: true,
    date: "2025-10",
    category: "Agentic AI",
  },
  {
    id: "llm-observability-sdk",
    title: "LLM Observability SDK",
    shortDesc: "An SDK adopted across 15 internal apps, cutting model debugging time by 25%.",
    fullDesc: `## Overview
An LLM observability SDK built at Visa and adopted across 15 internal applications. It streams real-time signals on model outputs, latency, token usage, and failure patterns so teams can debug production LLM apps faster.

## Features
- Real-time monitoring of outputs, latency, and token usage
- Failure-pattern tracking across applications
- Prometheus-backed metrics for operational visibility
- Drop-in instrumentation for existing FastAPI services

## Impact
Reduced model debugging time by 25% and became a shared observability layer for internal AI products.
`,
    tech: ["Python", "Prometheus", "FastAPI", "Grafana", "LLMs"],
    github: null,
    demo: null,
    demoVideo: null,
    featured: true,
    date: "2025-09",
    category: "MLOps",
  },
  {
    id: "adas-rag-scenarios",
    title: "ADAS Scenario Generation RAG",
    shortDesc: "RAG + LLM prompt generation that cut Level 3 ADAS scenario creation time by 80%.",
    fullDesc: `## Overview
Designed at Mercedes-Benz Research and Development India (MBRDI) for Level 3 ADAS validation. The pipeline retrieves driving scenarios from a curated database, then uses LLM-based natural language prompt generation and simulation to produce edge-case scenarios.

## Features
- Retrieval from a curated scenario database
- LLM-based natural language prompt generation
- Simulation-ready edge-case driving scenarios
- 80% reduction in scenario creation time

## Domain
Autonomous driving (ADAS) validation for Level 3 systems.
`,
    tech: ["Python", "RAG", "LLMs", "ADAS", "Simulation"],
    github: null,
    demo: null,
    demoVideo: null,
    featured: false,
    date: "2024-11",
    category: "Autonomous Driving",
  },
  {
    id: "lead-vehicle-lstm",
    title: "Lead Vehicle Behaviour Prediction",
    shortDesc: "LSTM model in the ego-vehicle planner: 10% faster response and 15% fewer abrupt maneuvers.",
    fullDesc: `## Overview
An LSTM-based model that predicts lead vehicle behaviour and feeds the planning module of the ego vehicle. Built at MBRDI as part of ADAS research, and related to a granted patent on smoother ego acceleration profiles.

## Features
- Time-series prediction of lead vehicle motion
- Integration into the ego-vehicle planning stack
- 10% improvement in response time
- 15% reduction in abrupt maneuvers

## Related patent
Lead Vehicle Behaviour filtration for smoother ego acceleration profile — granted January 2025 (MBRDI, Patent Number: 2024ID03059). The patented system fuses map, lead vehicle, and surrounding-object data in time and frequency domains for a safer acceleration profile.
`,
    tech: ["Python", "LSTM", "Deep Learning", "ADAS", "Time-Series"],
    github: null,
    demo: null,
    demoVideo: null,
    featured: false,
    date: "2024-06",
    category: "Autonomous Driving",
  },
  {
    id: "tensorrt-jetson",
    title: "TensorRT Perception on Jetson Xavier",
    shortDesc: "FP16 TensorRT deployment with 6× speedup and 20ms inference on live video.",
    fullDesc: `## Overview
Optimized a deep learning perception model with TensorRT and deployed it on NVIDIA Jetson Xavier for real-time ADAS video inference.

## Results
- 6× speedup versus the unoptimized model
- FP16 precision
- 20ms inference latency on a real-time video feed
- On-device (edge) deployment suitable for vehicle hardware
`,
    tech: ["TensorRT", "NVIDIA Jetson Xavier", "Deep Learning", "Python", "FP16"],
    github: null,
    demo: null,
    demoVideo: null,
    featured: false,
    date: "2024-03",
    category: "MLOps",
  },
  {
    id: "pems-baker-hughes",
    title: "Predictive Emission Monitoring System",
    shortDesc: "ML-based PEMS that cut NOx/COx monitoring cost by up to 60% versus traditional CEMS.",
    fullDesc: `## Overview
Internship work at Baker Hughes: a Predictive Emission Monitoring System (PEMS) that estimates NOx and COx using machine learning instead of hardware-heavy Continuous Emission Monitoring Systems (CEMS).

## Features
- Predictive modelling for emission monitoring
- Up to 60% cost savings versus traditional CEMS
- Improved data accuracy and regulatory compliance
- Modular dashboard widgets for real-time industrial analytics
- 25% faster decision-making through better data accessibility
`,
    tech: ["Python", "Machine Learning", "Dashboards", "Industrial ML"],
    github: null,
    demo: null,
    demoVideo: null,
    featured: false,
    date: "2023-06",
    category: "Industrial ML",
  },
];
