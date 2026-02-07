export interface ContentBlock {
  type: "paragraph" | "heading" | "quote" | "list";
  text?: string;
  items?: string[];
}

export interface ArticleData {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: ContentBlock[];
}

export const ARTICLES: ArticleData[] = [
  {
    slug: "nest-js-golden-stack",
    category: "Architecture",
    title:
      "Enterprise Backend Architecture: Scaling with NestJS and Microservices",
    author: "Sarah Chen",
    date: "Jan 23, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "In the world of high-stakes enterprise software, the cost of technical debt isn't just a slow sprint—it’s a business risk. To build systems that handle complex logic while remaining maintainable, modern architects are turning to the 'Golden Stack': NestJS, TypeScript, and Microservices.",
      },
      {
        type: "heading",
        text: "1. The Architectural Foundation: Why NestJS?",
      },
      {
        type: "paragraph",
        text: "NestJS isn't just a framework; it's a structured environment. For enterprise teams, the biggest challenge is consistency. NestJS solves this by enforcing an opinionated architecture inspired by Angular.",
      },
      {
        type: "list",
        items: [
          "Modularity: Each module manages its own controllers and services.",
          "Dependency Injection: Makes code highly testable and decoupled.",
          "Decorator-driven: Simplifies complex logic like validation and routing.",
        ],
      },
      {
        type: "heading",
        text: "2. Strategic Microservices",
      },

      {
        type: "paragraph",
        text: "Enterprise systems often outgrow a single process. NestJS provides a native abstraction layer, allowing you to switch between communication protocols like RabbitMQ, Kafka, or NATS with minimal code changes.",
      },
      {
        type: "quote",
        text: "Independent scalability is the ultimate goal. Scale your 'Search Service' without bloating your 'Account Settings' service.",
      },
      {
        type: "heading",
        text: "3. The TypeScript Advantage",
      },
      {
        type: "paragraph",
        text: "When dealing with high-stakes business logic, runtime errors are unacceptable. TypeScript provides the safety net through rigorous Interfaces and DTOs (Data Transfer Objects).",
      },
    ],
  },
  {
    slug: "postgres-vs-mongodb-prisma-bridge",
    category: "Database Design & ORM",
    title:
      "Database Design & ORM: Optimizing Data Flow with PostgreSQL, MongoDB, and Prisma",
    author: "Sarah Chen",
    date: "Feb 12, 2026",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2521&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "In the early days of web development, the 'One Database' rule was law. You chose a side—SQL or NoSQL—and lived with the consequences. But in today's microservices landscape, forcing every data type into a single engine is a recipe for performance bottlenecks. Modern architecture demands Polyglot Persistence: the practice of using different database technologies to handle different data requirements within the same application.",
      },
      {
        type: "heading",
        text: "The Relational Anchor: Why PostgreSQL?",
      },
      {
        type: "paragraph",
        text: "PostgreSQL is the 'Source of Truth' for a reason. When it comes to complex relational data—think user hierarchies, financial ledgers, and subscription states—integrity is non-negotiable. Postgres provides ACID compliance that ensures your data remains consistent even during system failures.",
      },
      {
        type: "list",
        items: [
          "Strict Schema Enforcement: Prevents 'data rot' by ensuring every row follows defined types.",
          "Advanced Indexing: Support for B-tree, Hash, GiST, and GIN indexes for rapid lookups.",
          "JSONB Support: A middle ground that allows storing semi-structured data within a relational table.",
        ],
      },
      {
        type: "heading",
        text: "Scaling at the Edge: MongoDB's Role",
      },
      {
        type: "paragraph",
        text: "If Postgres is the anchor, MongoDB is the engine. In scenarios where data arrives in high-velocity bursts—such as IoT sensor logs, social media feeds, or real-time notification streams—the rigid schema of SQL becomes a liability. MongoDB’s document model allows for horizontal scaling through sharding, making it the ideal choice for 'Write-Heavy' workloads.",
      },
      {
        type: "quote",
        text: "The goal isn't to replace SQL with NoSQL; it's to offload the high-churn, unstructured data to an engine designed to breathe under pressure.",
      },
      {
        type: "heading",
        text: "The Unified Layer: Prisma ORM",
      },
      {
        type: "paragraph",
        text: "Managing two distinct database connections usually results in 'Spaghetti Code.' This is where Prisma changes the game. By acting as a type-safe abstraction layer, Prisma allows developers to interact with both PostgreSQL and MongoDB using a unified syntax.",
      },
      {
        type: "paragraph",
        text: "With the Prisma Schema Language (PSL), you define your models once. Prisma then generates a custom Client that provides full auto-completion in your IDE, virtually eliminating runtime database errors.",
      },
      {
        type: "heading",
        text: "Architectural Strategy: The Hybrid Flow",
      },
      {
        type: "paragraph",
        text: "How do you decide what goes where? A standard enterprise pattern involves keeping 'Identity and Access Management' (IAM) and 'Core Billing' in PostgreSQL, while moving 'User Activity Logs' and 'Dynamic Content Metadata' to MongoDB.",
      },
      {
        type: "list",
        items: [
          "Step 1: Identify your 'Hot' vs 'Cold' data paths.",
          "Step 2: Map relationships in Postgres using Foreign Keys.",
          "Step 3: Flatten deeply nested hierarchies into Mongo Documents for faster reads.",
          "Step 4: Use Prisma Middleware to sync cross-database events.",
        ],
      },
    ],
  },
  {
    slug: "nextjs-ssr-seo-optimization",
    category: "Frontend Performance",
    title: "Server-Side Rendering & SEO: The Next.js Edge",
    author: "Sarah Chen",
    date: "Mar 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "In the modern web, speed isn't just a feature—it's the primary metric. Single Page Applications (SPAs) often struggle with initial load times and Search Engine Optimization (SEO). Next.js bridges this gap with Server-Side Rendering (SSR) and Server Components.",
      },
      {
        type: "heading",
        text: "Why SSR Matters for Enterprise",
      },
      {
        type: "paragraph",
        text: "traditional SPAs render content in the browser, leaving search engine crawlers with a blank page until JavaScript executes. SSR generates the HTML on the server, ensuring content is instantly available to both users and bots.",
      },
      {
        type: "list",
        items: [
          "Zero Layout Shift: Pre-rendered HTML provides a stable visual structure immediately.",
          "SEO Dominance: Perfect for marketing pages, e-commerce listings, and content-heavy platforms.",
          "Edge Caching: Rendered pages can be cached at the edge, delivering static-like performance.",
        ],
      },
      {
        type: "heading",
        text: "Server Components: The new paradigm",
      },
      {
        type: "paragraph",
        text: "With React Server Components, we can fetch data directly on the server without sending additional JavaScript to the client. This drastically reduces bundle sizes and improves Time to Interactive (TTI).",
      },
      {
        type: "quote",
        text: "Performance is user retention. Every millisecond of latency costs revenue.",
      },
    ],
  },
  {
    slug: "real-time-websockets-redis",
    category: "Real-Time Systems",
    title: "Real-Time Applications: Scaling WebSockets with Redis",
    author: "Sarah Chen",
    date: "Apr 02, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "Users expect interfaces to be alive. Whether it's a stock ticker, a chat application, or a collaborative document, real-time updates are standard. However, maintaining thousands of persistent connections is a significant architectural challenge.",
      },
      {
        type: "heading",
        text: "The Socket.io Advantage",
      },
      {
        type: "paragraph",
        text: "Socket.io allows for bi-directional, event-based communication. Unlike HTTP polling, which wastes resources checking for updates, WebSockets keep a channel open for instant data push.",
      },
      {
        type: "heading",
        text: "Scaling Horizontally with Redis",
      },
      {
        type: "paragraph",
        text: "A single server can only handle so many connections. When you scale to multiple implementation instances, a user connected to Server A cannot chat with a user on Server B. Creating a Redis Adapter solves this.",
      },
      {
        type: "list",
        items: [
          "Pub/Sub Mechanism: Redis acts as a message broker, broadcasting events across all server instances.",
          "Efficiency: Decouples the application state from the connection layer.",
          "Resilience: If one node fails, users can reconnect to another without losing the message stream.",
        ],
      },
      {
        type: "quote",
        text: "Real-time isn't just about speed; it's about synchronization at scale.",
      },
    ],
  },
  {
    slug: "secure-authentication-jwt-oauth",
    category: "Security",
    title: "Secure Authentication: JWT, OAuth2, and RBAC Strategies",
    author: "Sarah Chen",
    date: "Apr 20, 2026",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "Security is the bedrock of trust. In a distributed architecture, managing user identity securely and efficiently is paramount. We move beyond simple session cookies to robust, stateless authentication mechanisms.",
      },
      {
        type: "heading",
        text: "Stateless Auth with JWT",
      },
      {
        type: "paragraph",
        text: "JSON Web Tokens (JWT) allow us to transmit information between parties securely. Because they are signed, the backend can verify the user's identity without querying the database for every request.",
      },
      {
        type: "list",
        items: [
          "Scalability: No server-side session storage required.",
          "Cross-Domain: Works seamlessly across different domains and microservices.",
          "Mobile Ready: The standard for native mobile application authentication.",
        ],
      },
      {
        type: "heading",
        text: "Role-Based Access Control (RBAC)",
      },
      {
        type: "paragraph",
        text: "Authentication is 'who you are'; Authorization is 'what you can do'. RBAC maps users to roles (e.g., Admin, Editor, Viewer), ensuring granular control over resource access.",
      },
      {
        type: "quote",
        text: "Security is not a feature to be added; it is an architectural constraint to be respected.",
      },
    ],
  },
];
