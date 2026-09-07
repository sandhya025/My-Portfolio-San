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
    id: "caching-strategies",
    title: "Caching Strategies in Distributed Systems",
    excerpt:
      "A deep dive into cache invalidation patterns, TTL strategies, and avoiding cache stampedes in high-scale systems.",
    content: `## Introduction

Caching is one of the most powerful tools in a distributed system's arsenal. Done right, it can reduce latency by orders of magnitude. Done wrong, it can introduce subtle bugs and stale data.

## Common Caching Patterns

### 1. Cache-Aside (Lazy Loading)
The application checks the cache first. On a miss, it fetches from the database and populates the cache.

\`\`\`python
def get_user(user_id):
    user = cache.get(f"user:{user_id}")
    if not user:
        user = db.query(User, id=user_id)
        cache.set(f"user:{user_id}", user, ttl=300)
    return user
\`\`\`

**Pros:** Only cache what's needed.  
**Cons:** Cold start problem. First request is always slow.

### 2. Write-Through
Data is written to the cache and the database simultaneously.

**Pros:** Cache always up to date.  
**Cons:** Write latency increases.

### 3. Write-Behind (Write-Back)
Data is written to cache immediately, and asynchronously synced to the database.

**Pros:** Very fast writes.  
**Cons:** Risk of data loss if cache goes down.

## Cache Stampede Problem

When a popular key expires, thousands of requests simultaneously hit the database before any of them can repopulate the cache. This is called a **cache stampede** (or thundering herd).

### Fix: Probabilistic Early Expiration

\`\`\`python
import math, random

def fetch_with_early_expiry(key, ttl, beta=1):
    value, expiry = cache.get_with_expiry(key)
    now = time.time()
    if now - beta * math.log(random.random()) >= expiry:
        # Recompute early
        value = recompute(key)
        cache.set(key, value, ttl=ttl)
    return value
\`\`\`

## Conclusion

Choose your caching strategy based on your read/write ratio and consistency requirements. Always monitor cache hit rates and set alerts when they drop.`,
    category: "System Design",
    tags: ["Redis", "Caching", "Distributed Systems", "Backend"],
    date: "2026-07-20",
    readTime: "8 min",
  },
  {
    id: "api-design-best-practices",
    title: "REST API Design Best Practices",
    excerpt:
      "From naming conventions to versioning strategies — how to design APIs that developers love to use.",
    content: `## Introduction

A well-designed API is a joy to consume. A poorly designed one causes hours of frustration. Here are the principles I follow when designing REST APIs.

## 1. Use Nouns, Not Verbs

\`\`\`
❌ GET /getUser
✅ GET /users/{id}

❌ POST /createOrder
✅ POST /orders
\`\`\`

## 2. HTTP Methods Semantics

| Method | Use Case |
|--------|----------|
| GET | Read resource |
| POST | Create resource |
| PUT | Replace resource |
| PATCH | Partial update |
| DELETE | Remove resource |

## 3. Versioning

Always version your API. Use URL versioning for simplicity:

\`\`\`
/api/v1/users
/api/v2/users
\`\`\`

## 4. Consistent Error Responses

\`\`\`json
{
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "No user found with id 123",
    "status": 404
  }
}
\`\`\`

## 5. Pagination

Never return unbounded lists:

\`\`\`
GET /users?page=1&limit=20
\`\`\`

## Conclusion

Good API design is about empathy — think from your consumer's perspective. Document everything, version from day one, and be consistent.`,
    category: "Backend",
    tags: ["API Design", "REST", "Backend", "Best Practices"],
    date: "2026-06-15",
    readTime: "6 min",
  },
  {
    id: "python-async-patterns",
    title: "Async Patterns in Python — asyncio Deep Dive",
    excerpt:
      "How to write efficient async Python with asyncio — event loops, coroutines, tasks, and common pitfalls.",
    content: `## Introduction

Python's \`asyncio\` library enables concurrent I/O-bound code without threads. But it has quirks that trip up developers.

## Coroutines vs Tasks

A coroutine is just a function defined with \`async def\`. It doesn't run until you await it or schedule it as a Task.

\`\`\`python
import asyncio

async def fetch_data(url):
    await asyncio.sleep(1)  # simulates I/O
    return {"url": url, "data": "..."}

# Run one coroutine
asyncio.run(fetch_data("https://api.example.com"))
\`\`\`

## Running Concurrently with gather

\`\`\`python
async def main():
    results = await asyncio.gather(
        fetch_data("https://api1.com"),
        fetch_data("https://api2.com"),
        fetch_data("https://api3.com"),
    )
    return results
\`\`\`

All three requests run concurrently — total time ≈ 1s, not 3s.

## Common Pitfall: Blocking the Event Loop

\`\`\`python
# ❌ This blocks the entire event loop
async def bad():
    time.sleep(2)  # use asyncio.sleep instead!

# ✅ Correct
async def good():
    await asyncio.sleep(2)
\`\`\`

## When NOT to use asyncio

asyncio shines for **I/O-bound** tasks (network calls, file reads). For **CPU-bound** tasks (data processing, ML), use \`multiprocessing\` instead.

## Conclusion

asyncio is powerful but requires discipline. Keep your coroutines non-blocking, use \`gather\` for concurrency, and reach for \`run_in_executor\` when you must call blocking code.`,
    category: "Backend",
    tags: ["Python", "asyncio", "Concurrency", "Backend"],
    date: "2026-05-10",
    readTime: "10 min",
  },
];
