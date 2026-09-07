export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
}

export const blogs: BlogPost[] = [
  {
    id: "langgraph-agentic-rag",
    title: "Why We Moved Client RAG from LangChain to LangGraph",
    excerpt:
      "Multi-hop reasoning, self-reflection, and adaptive retrieval improved answer accuracy by 30% in a production knowledge system.",
    content: `## The problem

A first-generation RAG stack is often a retrieve-then-generate chain. That works for FAQ-style questions. It breaks when the user needs several hops, when the first retrieval is incomplete, or when the model should admit uncertainty instead of hallucinating.

On a client-facing knowledge system, that showed up as confident but incomplete answers and as support tickets that a human would have resolved by reading two related articles.

## What LangGraph changed

We rebuilt the pipeline as a graph instead of a linear chain:

1. **Route** — classify whether the query needs lookup, comparison, or a generated article.
2. **Retrieve** — pull candidates, then decide whether to retrieve again with a rewritten query.
3. **Reason** — multi-hop synthesis over the retrieved set.
4. **Reflect** — a self-check pass that looks for missing citations or contradictions.
5. **Answer** — only then emit the user-facing response.

Adaptive retrieval meant simple questions stayed cheap. Hard questions paid for extra hops.

## Results

Response accuracy improved by about 30% versus the LangChain baseline. The same stack later powered automated FAQ and knowledge-article generation, with a self-serve UI so Product and Business teams could publish without waiting on engineering.

## Takeaway

If your RAG failures are "the model didn't look far enough" rather than "the embedding model is bad," an agentic graph with an explicit reflection node is usually a better investment than another prompt rewrite.`,
    category: "Agentic AI",
    tags: ["LangGraph", "RAG", "LLMs", "Production AI"],
    date: "2026-03-12",
    readTime: "7 min",
  },
  {
    id: "llm-observability",
    title: "LLM Observability: What to Measure After the Demo",
    excerpt:
      "Outputs, latency, tokens, and failure patterns — the signals that cut debugging time by 25% across 15 internal apps.",
    content: `## Demos hide the production problem

An LLM feature that looks great in a notebook can fail quietly in production: slow tails, exploding token bills, truncated JSON, or a sudden quality drop after a prompt change. Without shared telemetry, every team debugs in isolation.

## The SDK we shipped

We built a small observability SDK that teams could drop into FastAPI services. It standardized four signal groups:

- **Outputs** — sampled completions and structured parse success/failure
- **Latency** — end-to-end and per-stage (retrieve, generate, post-process)
- **Tokens** — prompt vs completion, by model and by application
- **Failures** — timeouts, empty retrievals, safety refusals, schema errors

Metrics landed in Prometheus and dashboards in Grafana so on-call looked like any other service, not a science project.

## Why it mattered

The SDK was adopted across 15 internal applications. Shared dashboards made regressions obvious. Debugging time dropped by about 25% because people stopped reconstructing traces from application logs.

## What I would instrument first

If you only add three things: request id through the whole graph, token cost per route, and a labeled failure taxonomy. Quality evals (RAGAS, LLM-as-judge) come next — they are useless if you cannot join them to a specific production trace.`,
    category: "MLOps",
    tags: ["LLM Observability", "Prometheus", "Grafana", "FastAPI"],
    date: "2026-01-20",
    readTime: "6 min",
  },
  {
    id: "tensorrt-edge-adas",
    title: "Getting ADAS Perception Under 20ms on Jetson Xavier",
    excerpt:
      "TensorRT FP16 optimization delivered a 6× speedup on real-time video — what actually moved the latency needle.",
    content: `## Constraint

Level 3 ADAS perception has to run on vehicle hardware, not a datacenter GPU. On NVIDIA Jetson Xavier, an unoptimized PyTorch graph was too slow for a live camera feed.

## What we did

We converted the trained model through TensorRT with FP16 precision, fused layers where the builder allowed it, and measured on the real video pipeline rather than a synthetic benchmark.

That combination produced:

- roughly **6× speedup** versus the original graph
- **~20ms** inference latency on the live feed
- enough headroom to keep planning and control in the same cycle budget

## Lessons

FP16 is not free accuracy. We validated against the FP32 baseline on the same sequences before locking the engine. The other large win was eliminating host-device copies in the pre/post-process path — TensorRT alone does not fix a chatty camera pipeline.

## Why it still matters

Agentic and LLM work often lives in the cloud. Perception still has to live at the edge. The same discipline — measure the real pipeline, then optimize the compiler path — transfers to any on-device model you ship.`,
    category: "Autonomous Driving",
    tags: ["TensorRT", "Jetson", "ADAS", "Edge ML"],
    date: "2025-08-04",
    readTime: "5 min",
  },
];
