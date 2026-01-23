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
      "The Golden Stack: Scaling Enterprise Backends with NestJS and Microservices",
    author: "Sarah Chen",
    date: "Jan 23, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51",
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
      "The Polyglot Pivot: Optimizing Data Flow with PostgreSQL, MongoDB, and Prisma",
    author: "Sarah Chen",
    date: "Feb 12, 2026",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
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
];
