import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import stylesHome from "../../styles/Home.module.css";

export async function getServerSideProps(context) {
  const { id } = context.query;
  return { props: { id } };
}

const Details = ({ id }) => {
  const [theData, setTheData] = useState({});
  
  useEffect(() => {
    detailsDataId.filter((ele) => {
      if (ele.id === Number(id)) {
        setTheData(ele);
      }
    });
  }, [id]);

  return (
    <div>
      <Head>
        <title>Nader | {theData.title}</title>
      </Head>
      <div>
        <h1 className={styles.title}>{theData.title}</h1>
        <div 
          className={styles.text}
          style={{
            textAlign: "left",
            maxWidth: "900px",
            margin: "0 auto",
            whiteSpace: "pre-line",
            lineHeight: "1.8"
          }}
        >
          {theData.disc}
        </div>
      </div>
      <Link href="/docscode" className={stylesHome.btn}>
        Best of Docs
        </Link>
    </div>
  );
};

export default Details;

const detailsDataId = [
  {
    id: 1,
    title: "Next.js Documentation",
    disc: `Next.js is a React framework for production. It makes building full-stack React applications easy and fun.

Key Features:
• Server-Side Rendering (SSR) and Static Site Generation (SSG)
• API Routes for backend functionality
• Automatic code splitting and optimization
• Built-in CSS and Sass support
• Image optimization
• TypeScript support out of the box

Next.js enables you to create full-stack web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.`
  },
  {
    id: 2,
    title: "React Documentation",
    disc: `React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".

Why React:
• Component-based architecture
• Virtual DOM for performance
• One-way data binding
• Rich ecosystem and community
• Great developer tools

React has revolutionized frontend development and continues to evolve with new features like Server Components, Concurrent Rendering, and Suspense.`
  },
  {
    id: 3,
    title: "TypeScript Handbook",
    disc: `TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static type definitions to JavaScript.

Benefits:
• Type safety catches errors at compile time
• Better IDE support with autocomplete
• Improved code documentation
• Easier refactoring
• Enhanced developer experience

TypeScript has become the standard for large-scale JavaScript applications and is widely adopted in modern frameworks.`
  },
  {
    id: 4,
    title: "NestJS Documentation",
    disc: `NestJS is a progressive Node.js framework for building efficient, reliable and scalable server-side applications.

Features:
• Built with TypeScript
• Modular architecture
• Dependency injection
• Supports REST and GraphQL
• Microservices ready
• Excellent for enterprise applications

NestJS provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications.`
  },
  {
    id: 5,
    title: "FastAPI Documentation",
    disc: `FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.

Why FastAPI:
• Fast: Very high performance, on par with NodeJS and Go
• Easy to use: Designed to be easy to use and learn
• Standards-based: Based on (and fully compatible with) the open standards for APIs
• Automatic documentation: Interactive API docs
• Type hints: Full support for type hints

FastAPI is one of the fastest Python frameworks available, making it perfect for high-performance APIs.`
  },
  {
    id: 6,
    title: "Vue.js Documentation",
    disc: `Vue.js is a progressive JavaScript framework for building user interfaces. It is designed from the ground up to be incrementally adoptable.

Key Features:
• Approachable: Easy to learn and integrate
• Versatile: Scales between a library and a full-featured framework
• Performant: 20KB min+gzip runtime, fast virtual DOM
• Reactive data binding
• Component-based architecture

Vue.js offers a gentle learning curve and excellent documentation, making it a great choice for both beginners and experienced developers.`
  },
  {
    id: 7,
    title: "Nuxt.js Documentation",
    disc: `Nuxt is an intuitive Vue framework that makes web development simple and powerful.

Features:
• Server-Side Rendering (SSR)
• Static Site Generation (SSG)
• Auto-imports for components and composables
• File-based routing
• Built-in TypeScript support
• Powerful module ecosystem

Nuxt provides a great developer experience with conventions over configuration, making Vue.js development even more productive.`
  },
  {
    id: 8,
    title: "Tailwind CSS",
    disc: `Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.

Benefits:
• Rapid UI development
• Highly customizable
• No CSS conflicts
• Responsive design utilities
• Dark mode support
• PurgeCSS for small bundle sizes

Tailwind CSS has changed how developers approach styling, offering a modern utility-first approach that speeds up development significantly.`
  },
  {
    id: 9,
    title: "MDN Web Docs",
    disc: `MDN Web Docs is an open-source, collaborative project documenting web platform technologies.

Resources:
• Comprehensive JavaScript documentation
• HTML and CSS references
• Web APIs documentation
• Best practices and guides
• Browser compatibility data
• Learning resources

MDN is the most trusted resource for web developers, maintained by Mozilla and the web community.`
  },
  {
    id: 10,
    title: "Web.dev - Modern Web Development",
    disc: `Web.dev is Google's resource for modern web development best practices.

Topics Covered:
• Performance optimization
• Accessibility
• SEO best practices
• Progressive Web Apps (PWA)
• Security
• Core Web Vitals
• Modern CSS techniques

Web.dev provides actionable guidance to help you build modern, fast, and secure websites.`
  },
  {
    id: 11,
    title: "Node.js Documentation",
    disc: `Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

Capabilities:
• Server-side JavaScript
• Event-driven, non-blocking I/O
• NPM ecosystem
• Microservices architecture
• Real-time applications
• API development

Node.js enables JavaScript to run on the server, creating a unified language for full-stack development.`
  },
  {
    id: 12,
    title: "PostgreSQL Documentation",
    disc: `PostgreSQL is a powerful, open source object-relational database system.

Features:
• ACID compliance
• Advanced data types
• Full-text search
• JSON support
• Extensibility
• High performance

PostgreSQL is one of the most advanced open-source databases, perfect for complex applications requiring robust data management.`
  },
  {
    id: 13,
    title: "Git Documentation",
    disc: `Git is a distributed version control system for tracking changes in source code.

Essential Concepts:
• Version control
• Branching and merging
• Collaboration workflows
• Commit history
• Remote repositories

Git is the industry standard for version control, essential for any developer working on collaborative projects.`
  },
  {
    id: 14,
    title: "Docker Documentation",
    disc: `Docker is a platform for developing, shipping, and running applications using containerization.

Benefits:
• Consistent environments
• Easy deployment
• Scalability
• Resource efficiency
• Microservices architecture

Docker has revolutionized how applications are deployed, making it easier to build, ship, and run applications anywhere.`
  },
  {
    id: 15,
    title: "Vercel Documentation",
    disc: `Vercel is a platform for frontend developers, providing the tools and infrastructure to build faster.

Features:
• Zero-configuration deployments
• Automatic HTTPS
• Global CDN
• Serverless functions
• Preview deployments
• Analytics

Vercel makes it incredibly easy to deploy Next.js, React, and other frontend frameworks with optimal performance.`
  },
  {
    id: 16,
    title: "GitHub Actions",
    disc: `GitHub Actions is a CI/CD platform that allows you to automate your build, test, and deployment pipeline.

Capabilities:
• Automated testing
• Continuous deployment
• Code quality checks
• Multi-platform builds
• Workflow automation
• Integration with GitHub

GitHub Actions enables powerful automation directly in your GitHub repository, streamlining the development workflow.`
  },
  {
    id: 17,
    title: "Web Performance",
    disc: `Web performance is critical for user experience and SEO. Learn how to optimize your websites.

Key Areas:
• Core Web Vitals
• Image optimization
• Code splitting
• Caching strategies
• Lazy loading
• Bundle size optimization

Performance optimization is essential for modern web applications, directly impacting user satisfaction and business metrics.`
  },
  {
    id: 18,
    title: "JavaScript.info",
    disc: `JavaScript.info is a comprehensive resource for learning modern JavaScript from basics to advanced topics.

Content:
• JavaScript fundamentals
• Advanced concepts
• DOM manipulation
• Async programming
• ES6+ features
• Best practices

This is one of the best resources for learning JavaScript thoroughly, with clear explanations and practical examples.`
  },
  {
    id: 19,
    title: "React Patterns",
    disc: `React Patterns is a collection of design patterns and best practices for React development.

Patterns Covered:
• Component composition
• Higher-order components
• Render props
• Custom hooks
• State management
• Performance optimization

Understanding React patterns helps you write more maintainable, scalable, and efficient React applications.`
  },
  {
    id: 20,
    title: "Clean Code JavaScript",
    disc: `Clean Code JavaScript is a guide to writing readable, reusable, and refactorable code in JavaScript.

Principles:
• Meaningful names
• Functions should do one thing
• Comments should explain why, not what
• Error handling
• Testing
• Code organization

Following clean code principles makes your codebase more maintainable and easier for teams to work with.`
  },
  {
    id: 21,
    title: "System Design Primer",
    disc: `System Design Primer is a comprehensive guide to designing scalable systems.

Topics:
• Scalability basics
• Load balancing
• Caching strategies
• Database design
• Distributed systems
• Microservices architecture

Understanding system design is crucial for building applications that can handle growth and scale effectively.`
  },
  {
    id: 22,
    title: "OWASP Security",
    disc: `OWASP Top 10 is a standard awareness document for developers and web application security.

Security Risks:
• Injection attacks
• Broken authentication
• Sensitive data exposure
• XML external entities
• Broken access control
• Security misconfiguration

Security should be a priority from the start. OWASP provides essential guidance for building secure applications.`
  },
  {
    id: 23,
    title: "Testing Library",
    disc: `Testing Library is a family of packages that helps you test UI components in a user-centric way.

Philosophy:
• Test behavior, not implementation
• Accessible queries
• User-centric testing
• Framework agnostic
• Simple and intuitive API

Testing Library encourages testing practices that give you confidence that your components work for users.`
  },
  {
    id: 24,
    title: "GraphQL Documentation",
    disc: `GraphQL is a query language for APIs and a runtime for executing those queries.

Advantages:
• Fetch exactly what you need
• Single endpoint
• Strongly typed
• Introspection
• Real-time subscriptions
• Better developer experience

GraphQL provides a more efficient, powerful, and flexible alternative to REST APIs.`
  },
  {
    id: 25,
    title: "REST API Best Practices",
    disc: `REST API Best Practices provides guidelines for designing and implementing RESTful APIs.

Principles:
• Resource-based URLs
• HTTP methods (GET, POST, PUT, DELETE)
• Status codes
• Versioning
• Pagination
• Error handling

Following REST best practices ensures your APIs are intuitive, maintainable, and easy to consume.`
  },
  {
    id: 26,
    title: "Web3 Development",
    disc: `Web3 represents the next evolution of the internet, built on blockchain technology.

Concepts:
• Decentralized applications (dApps)
• Smart contracts
• Cryptocurrency
• NFTs
• DeFi (Decentralized Finance)
• Blockchain fundamentals

Web3 is an emerging technology that's reshaping how we think about digital ownership and decentralized systems.`
  },
  {
    id: 27,
    title: "AI/ML Resources",
    disc: `Artificial Intelligence and Machine Learning are transforming software development.

Applications:
• Natural language processing
• Computer vision
• Predictive analytics
• Recommendation systems
• Automation
• Intelligent applications

AI/ML integration in web development is becoming increasingly important, enabling smarter and more personalized user experiences.`
  },
  {
    id: 28,
    title: "Progressive Web Apps",
    disc: `Progressive Web Apps (PWAs) combine the best of web and mobile apps.

Features:
• Offline functionality
• Installable
• Push notifications
• App-like experience
• Responsive design
• Fast loading

PWAs provide a native app-like experience while maintaining the reach and accessibility of web applications.`
  },
  {
    id: 29,
    title: "Clean Architecture",
    disc: `Clean Architecture is a software design philosophy that separates the software into layers, with dependencies pointing inward.

Principles:
• Independent of frameworks
• Testable
• Independent of UI
• Independent of database
• Independent of external agencies
• Business logic at the core

Clean Architecture helps create systems that are independent, testable, and maintainable, with clear separation of concerns.`
  },
  {
    id: 30,
    title: "Microservices Architecture",
    disc: `Microservices architecture is an approach to building applications as a collection of small, independent services.

Benefits:
• Independent deployment
• Technology diversity
• Fault isolation
• Scalability
• Team autonomy
• Easier to understand

Microservices enable teams to work independently and deploy services separately, making large applications more manageable.`
  },
  {
    id: 31,
    title: "Domain-Driven Design",
    disc: `Domain-Driven Design (DDD) is an approach to software development that centers the development on programming a domain model.

Key Concepts:
• Ubiquitous language
• Bounded contexts
• Entities and value objects
• Aggregates
• Domain services
• Repositories

DDD helps developers create software that reflects a deep understanding of the business domain and its requirements.`
  },
  {
    id: 32,
    title: "Software Architecture Patterns",
    disc: `Software architecture patterns provide reusable solutions to common problems in software design.

Common Patterns:
• Layered architecture
• Microkernel architecture
• Microservices architecture
• Event-driven architecture
• Space-based architecture

Understanding architecture patterns helps you make informed decisions about how to structure your applications for scalability and maintainability.`
  },
  {
    id: 33,
    title: "Event-Driven Architecture",
    disc: `Event-Driven Architecture (EDA) is a software architecture pattern promoting the production, detection, consumption of, and reaction to events.

Characteristics:
• Asynchronous communication
• Loose coupling
• Scalability
• Real-time processing
• Event sourcing
• CQRS support

EDA is ideal for applications that need to respond to events in real-time and handle high volumes of concurrent operations.`
  },
  {
    id: 34,
    title: "Hexagonal Architecture",
    disc: `Hexagonal Architecture (Ports and Adapters) isolates the core application logic from external concerns.

Benefits:
• Testability
• Independence from frameworks
• Independence from UI
• Independence from database
• Business logic isolation
• Easy to swap adapters

Hexagonal Architecture allows your application to be driven by users, programs, automated tests, or batch scripts, and to be developed and tested in isolation.`
  },
  {
    id: 35,
    title: "AWS Architecture Center",
    disc: `AWS Architecture Center provides reference architectures, best practices, and design patterns for building on AWS.

Resources:
• Reference architectures
• Well-Architected Framework
• Solution architectures
• Best practices
• Design patterns
• Case studies

AWS Architecture Center helps you build secure, high-performing, resilient, and efficient infrastructure for your applications.`
  },
  {
    id: 36,
    title: "12-Factor App Methodology",
    disc: `The Twelve-Factor App is a methodology for building software-as-a-service applications.

Twelve Factors:
1. Codebase
2. Dependencies
3. Config
4. Backing services
5. Build, release, run
6. Processes
7. Port binding
8. Concurrency
9. Disposability
10. Dev/prod parity
11. Logs
12. Admin processes

Following the 12-factor methodology helps you build applications that are portable, scalable, and maintainable.`
  },
  {
    id: 37,
    title: "SOLID Principles",
    disc: `SOLID is an acronym for five object-oriented design principles that make software designs more understandable, flexible, and maintainable.

Principles:
• S - Single Responsibility Principle
• O - Open/Closed Principle
• L - Liskov Substitution Principle
• I - Interface Segregation Principle
• D - Dependency Inversion Principle

SOLID principles are fundamental to writing clean, maintainable, and scalable object-oriented code.`
  },
  {
    id: 38,
    title: "Design Patterns (Gang of Four)",
    disc: `Design Patterns are reusable solutions to commonly occurring problems in software design.

Categories:
• Creational patterns (Factory, Singleton, Builder)
• Structural patterns (Adapter, Decorator, Facade)
• Behavioral patterns (Observer, Strategy, Command)

Design patterns provide a shared vocabulary and proven solutions to common design problems, making code more maintainable and understandable.`
  },
  {
    id: 39,
    title: "Serverless Architecture",
    disc: `Serverless architecture is a cloud computing execution model where the cloud provider manages the server infrastructure.

Benefits:
• No server management
• Automatic scaling
• Pay-per-use pricing
• Faster time to market
• Reduced operational overhead
• Built-in high availability

Serverless architecture allows developers to focus on writing code without worrying about infrastructure management, perfect for modern cloud-native applications.`
  },
  {
    id: 40,
    title: "Monorepo Architecture",
    disc: `Monorepo is a software development strategy where code for many projects is stored in the same repository.

Advantages:
• Code sharing
• Atomic changes
• Simplified dependency management
• Consistent tooling
• Easier refactoring
• Better collaboration

Monorepos are increasingly popular in large organizations, enabling better code reuse and coordination across multiple projects.`
  }
];
