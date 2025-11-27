import Head from "next/head";
import Link from "next/link";
import { GrRedo } from "react-icons/gr";
import styles from "../../styles/Nader.module.css";
import stylesHome from "../../styles/Home.module.css";

const dataDocsCode = [
  {
    id: 1,
    title: "Next.js Documentation",
    link: "https://nextjs.org/docs",
    category: "Framework"
  },
  {
    id: 2,
    title: "React Documentation",
    link: "https://react.dev/",
    category: "Framework"
  },
  {
    id: 3,
    title: "TypeScript Handbook",
    link: "https://www.typescriptlang.org/docs/",
    category: "Language"
  },
  {
    id: 4,
    title: "NestJS Documentation",
    link: "https://docs.nestjs.com/",
    category: "Backend"
  },
  {
    id: 5,
    title: "FastAPI Documentation",
    link: "https://fastapi.tiangolo.com/",
    category: "Backend"
  },
  {
    id: 6,
    title: "Vue.js Documentation",
    link: "https://vuejs.org/",
    category: "Framework"
  },
  {
    id: 7,
    title: "Nuxt.js Documentation",
    link: "https://nuxt.com/docs",
    category: "Framework"
  },
  {
    id: 8,
    title: "Tailwind CSS",
    link: "https://tailwindcss.com/docs",
    category: "Styling"
  },
  {
    id: 9,
    title: "MDN Web Docs",
    link: "https://developer.mozilla.org/",
    category: "Reference"
  },
  {
    id: 10,
    title: "Web.dev - Modern Web Development",
    link: "https://web.dev/",
    category: "Best Practices"
  },
  {
    id: 11,
    title: "Node.js Documentation",
    link: "https://nodejs.org/docs/",
    category: "Backend"
  },
  {
    id: 12,
    title: "PostgreSQL Documentation",
    link: "https://www.postgresql.org/docs/",
    category: "Database"
  },
  {
    id: 13,
    title: "Git Documentation",
    link: "https://git-scm.com/doc",
    category: "Tools"
  },
  {
    id: 14,
    title: "Docker Documentation",
    link: "https://docs.docker.com/",
    category: "DevOps"
  },
  {
    id: 15,
    title: "Vercel Documentation",
    link: "https://vercel.com/docs",
    category: "Deployment"
  },
  {
    id: 16,
    title: "GitHub Actions",
    link: "https://docs.github.com/en/actions",
    category: "CI/CD"
  },
  {
    id: 17,
    title: "Web Performance",
    link: "https://web.dev/performance/",
    category: "Best Practices"
  },
  {
    id: 18,
    title: "JavaScript.info",
    link: "https://javascript.info/",
    category: "Language"
  },
  {
    id: 19,
    title: "React Patterns",
    link: "https://reactpatterns.com/",
    category: "Patterns"
  },
  {
    id: 20,
    title: "Clean Code JavaScript",
    link: "https://github.com/ryanmcdermott/clean-code-javascript",
    category: "Best Practices"
  },
  {
    id: 21,
    title: "System Design Primer",
    link: "https://github.com/donnemartin/system-design-primer",
    category: "Architecture"
  },
  {
    id: 22,
    title: "OWASP Security",
    link: "https://owasp.org/www-project-top-ten/",
    category: "Security"
  },
  {
    id: 23,
    title: "Testing Library",
    link: "https://testing-library.com/",
    category: "Testing"
  },
  {
    id: 24,
    title: "GraphQL Documentation",
    link: "https://graphql.org/learn/",
    category: "API"
  },
  {
    id: 25,
    title: "REST API Best Practices",
    link: "https://restfulapi.net/",
    category: "API"
  },
  {
    id: 26,
    title: "Web3 Development",
    link: "https://ethereum.org/en/developers/",
    category: "Emerging Tech"
  },
  {
    id: 27,
    title: "AI/ML Resources",
    link: "https://www.fast.ai/",
    category: "Emerging Tech"
  },
  {
    id: 28,
    title: "Progressive Web Apps",
    link: "https://web.dev/progressive-web-apps/",
    category: "Best Practices"
  },
  {
    id: 29,
    title: "Clean Architecture",
    link: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html",
    category: "Architecture"
  },
  {
    id: 30,
    title: "Microservices Architecture",
    link: "https://microservices.io/",
    category: "Architecture"
  },
  {
    id: 31,
    title: "Domain-Driven Design",
    link: "https://martinfowler.com/bliki/DomainDrivenDesign.html",
    category: "Architecture"
  },
  {
    id: 32,
    title: "Software Architecture Patterns",
    link: "https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/",
    category: "Architecture"
  },
  {
    id: 33,
    title: "Event-Driven Architecture",
    link: "https://martinfowler.com/articles/201701-event-driven.html",
    category: "Architecture"
  },
  {
    id: 34,
    title: "Hexagonal Architecture",
    link: "https://alistair.cockburn.us/hexagonal-architecture/",
    category: "Architecture"
  },
  {
    id: 35,
    title: "AWS Architecture Center",
    link: "https://aws.amazon.com/architecture/",
    category: "Architecture"
  },
  {
    id: 36,
    title: "12-Factor App Methodology",
    link: "https://12factor.net/",
    category: "Architecture"
  },
  {
    id: 37,
    title: "SOLID Principles",
    link: "https://en.wikipedia.org/wiki/SOLID",
    category: "Architecture"
  },
  {
    id: 38,
    title: "Design Patterns (Gang of Four)",
    link: "https://refactoring.guru/design-patterns",
    category: "Architecture"
  },
  {
    id: 39,
    title: "Serverless Architecture",
    link: "https://aws.amazon.com/serverless/",
    category: "Architecture"
  },
  {
    id: 40,
    title: "Monorepo Architecture",
    link: "https://monorepo.tools/",
    category: "Architecture"
  }
];

const DocsCode = () => {
  return (
    <>
      <Head>
        <title>Nader | Best of Docs</title>
      </Head>
      <div>
        <h1 className={stylesHome.title}>Best of Docs</h1>
        <p className={stylesHome.text} style={{ marginBottom: "30px" }}>
          Curated collection of essential documentation and resources for modern web development, 
          emerging technologies, and best practices. Stay updated with the latest in tech!
        </p>
        <div>
          {dataDocsCode.map((ele) => (
            <div key={ele.id} className={styles.single}>
              <Link href={`/docscode/${ele.id}`} target="_self" className={stylesHome.aTag}>
                <div className={stylesHome.titleDiv}>
                  <h3>{ele.title}</h3>
                  <span style={{ 
                    fontSize: "12px", 
                    color: "#777", 
                    marginLeft: "10px",
                    fontStyle: "italic"
                  }}>
                    {ele.category}
                  </span>
                </div>
              </Link>
              <div className={styles.titleDiv}>
                <Link
                  href={ele.link}
                  target="_blank"
                  className={styles.iconCss}
                >
                  <GrRedo
                    style={{
                      fontSize: "30px",
                    }}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link href="/" className={stylesHome.btn}>
        Home
      </Link>
    </>
  );
};

export default DocsCode;
