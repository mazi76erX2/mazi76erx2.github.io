// Core packages
import Image from "next/image";

import Badges from "../../utils/badge.list.util";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Career scss
import career from "../../../styles/sections/index/career.module.scss";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="I am current managing, designing, and developing all consumer and digital product initiatives at My Supply Co."
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>
                  Dotdigital (Software Engineer - Full Stack Engineer, Remote)
                </h3>
                <h4>Contract Full-time</h4>
                <h4>Apr 2019 - Present · 6 months</h4>
                <h5>Cape Town, Western Cape, South Africa</h5>
              </span>
              <p>
                At Dotdigital, I work as a Full Stack Engineer, collaborating
                within agile teams to develop and scale a high-performance,
                multitenant platform handling vast amounts of data. My role
                involves designing and implementing backend services using
                Django, Node.js, and Python while integrating front-end
                interfaces with React. I ensure system security and reliability
                by enforcing best practices throughout the development
                lifecycle. Additionally, I optimize large-scale data
                interactions, streamline queries, and enhance database schemas.
                I also contribute to automated deployments and CI/CD workflows,
                ensuring rapid, reliable releases while working closely with
                product managers, designers, and QA engineers to refine and
                enhance digital solutions.
              </p>
              <Badges
                list={dotdigital}
                block="stack"
                fullContainer="fullContainer"
              />
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>
                    iOLAP (Software Engineer - Full Stack Engineer, Hybrid)
                  </h3>
                  <h4>Full-time</h4>
                  <h4>Oct 2023 – May 2024 · 8 months</h4>
                  <h5>Johannesburg, Gauteng, South Africa</h5>
                </span>
                <p>
                  During my time at iOLAP, I played a key role in designing and
                  implementing robust software solutions using FastAPI for
                  backend development and React with Material UI for the front
                  end. I focused on integrating data storage solutions,
                  optimizing database interactions, and implementing caching
                  mechanisms to improve performance. I collaborated closely with
                  the design team to create seamless UI/UX experiences and
                  provided mentorship to junior developers by conducting code
                  reviews and offering technical guidance. Additionally, I
                  prepared technical documentation and worked with international
                  clients, helping to bridge the gap between business
                  requirements and technical implementations for scalable
                  solutions.
                </p>
                <Badges
                  list={iolap}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Apollo (Freelance Software Engineer - Full Stack)</h3>
                  <h4>Full-time</h4>
                  <h4>July 2022 – Sept 2023 · 1 year 3 months</h4>
                  <h5>Johannesburg, Gauteng, South Africa</h5>
                </span>
                <p>
                  As a freelance Full Stack Engineer at Apollo, I took on
                  diverse projects, including configuring AWS virtual machines
                  and setting up on-premise servers for RFID devices. I
                  developed Flask APIs and React-based user interfaces,
                  integrating various authentication mechanisms for secure
                  access. My role also involved working with payment solutions,
                  implementing real-time communication using event-driven
                  architectures, and managing SQL-based databases. Additionally,
                  I developed automated testing suites to ensure code quality.
                  This experience allowed me to refine my problem-solving
                  skills, work with a wide range of technologies, and handle the
                  full development cycle from infrastructure setup to
                  application deployment.
                </p>
                <Badges
                  list={apollo}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Healthforce (Backend Engineer)</h3>
                  <h4>Full-time</h4>
                  <h4>Novs 2021 – June 2022 · 8 months</h4>
                  <h5>Johannesburg, Gauteng, South Africa</h5>
                </span>
                <p>
                  At Healthforce, I worked as a Backend Engineer, focusing on
                  designing and implementing database models and performing
                  migrations using Django ORM. My work involved writing unit and
                  integration tests to ensure the reliability and functionality
                  of backend applications. I developed and maintained
                  authentication and authorization systems while optimizing
                  application performance through caching and query
                  optimizations. I also implemented CI/CD pipelines to automate
                  deployment processes and worked on securing applications by
                  applying best practices such as CSRF protection, input
                  validation, and secure communication protocols. In addition, I
                  participated in code reviews and collaborated with
                  cross-functional teams to enhance overall system performance.
                </p>
                <Badges
                  list={healthforce}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>
                    Tentpole DataSciences (Software Developer - Full Stack)
                  </h3>
                  <h4>Contract Full-time</h4>
                  <h4>June 2021 – June 2022 · 1 year 1 month</h4>
                  <h5>Johannesburg, Gauteng, South Africa</h5>
                </span>
                <p>
                  During my time at iOLAP, I played a key role in designing and
                  implementing robust software solutions using FastAPI for
                  backend development and React with Material UI for the front
                  end. I focused on integrating data storage solutions,
                  optimizing database interactions, and implementing caching
                  mechanisms to improve performance. I collaborated closely with
                  the design team to create seamless UI/UX experiences and
                  provided mentorship to junior developers by conducting code
                  reviews and offering technical guidance. Additionally, I
                  prepared technical documentation and worked with international
                  clients, helping to bridge the gap between business
                  requirements and technical implementations for scalable
                  solutions.
                </p>
                <Badges
                  list={tentpole}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>
                    1609 Group (Software Developer - Backend/Fullstack Engineer)
                  </h3>
                  <h4>Contract Full-time</h4>
                  <h4>Jan 2019 – May 2021 · 2 year 5 months</h4>
                  <h5>Johannesburg, Gauteng, South Africa</h5>
                </span>
                <p>
                  At 1609 Group, I initially focused on backend development
                  using Python, Django, and PostgreSQL before expanding my skill
                  set to include PHP and Phalcon. Over time, I transitioned into
                  full-stack development, working with HTML, CSS, and
                  JavaScript, later incorporating React. I gained proficiency in
                  designing and integrating APIs for both backend and frontend
                  applications. My responsibilities included implementing new
                  features, maintaining the admin site, and documenting project
                  details using Confluence. Working in an Agile environment, I
                  utilized Jira for project tracking and collaborated with teams
                  to enhance system functionality, ensuring seamless user
                  experiences and optimized performance.
                </p>
                <Badges
                  list={group}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>
                    DDIMM & Digital Republic Consulting (Data Analyst & Software
                    Developer)
                  </h3>
                  <h4>Contract Full-time</h4>
                  <h4>February 2018 – January 2019 · 1 year</h4>
                  <h5>Johannesburg, Gauteng, South Africa</h5>
                </span>
                <p>
                  At DDIMM and Digital Republic Consulting, I focused on data
                  analytics and software development, working extensively with
                  Python and Pandas to process and analyze large datasets from
                  social media, print, and online sources. I automated reporting
                  processes using Python-pptx, generating dynamic PowerPoint
                  presentations with media insights. Additionally, I developed
                  an API wrapper for Mention, streamlining media monitoring and
                  data retrieval. My role also involved sentiment analysis, data
                  cleaning, and report writing, ensuring accurate and actionable
                  insights. This experience allowed me to merge data analytics
                  with software development, reinforcing my ability to create
                  data-driven solutions in dynamic environments.
                </p>
                <Badges
                  list={ddimm}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>
        </section>
      </Container>
    </Section>
  );
}

const dotdigital = [
  {
    key: "python",
    name: "Python",
    type: "devicon",
  },
  {
    key: "django",
    name: "Django",
    type: "devicon",
  },
  {
    key: "postgresql",
    name: "postgreSQL",
    type: "devicon",
  },
  {
    key: "javascript",
    name: "JavaScript",
    type: "devicon",
  },
  {
    key: "react",
    name: "React",
    type: "devicon",
  },
  {
    key: "nodejs",
    name: "NodeJS",
    type: "devicon",
  },
  {
    key: "html5",
    name: "HTML5",
    type: "devicon",
  },
  {
    key: "css3",
    name: "CSS3",
    type: "devicon",
  },
  {
    key: "jest",
    name: "Jest",
    type: "devicon",
  },
  {
    key: "mocha",
    name: "Mocha",
    type: "devicon",
  },
  {
    key: "storybook",
    name: "Storybook",
    type: "devicon",
  }
];

const iolap = [
  {
    key: "python",
    name: "Python",
    type: "devicon",
  },
  {
    key: "fastapi",
    name: "FastAPI",
    type: "devicon",
  },
  {
    key: "postgresql",
    name: "postgreSQL",
    type: "devicon",
  },
  {
    key: "javascript",
    name: "JavaScript",
    type: "devicon",
  },
  {
    key: "react",
    name: "React",
    type: "devicon",
  },
  {
    key: "materialui",
    name: "Material UI",
    type: "devicon",
  },
  {
    key: "html5",
    name: "HTML5",
    type: "devicon",
  },
  {
    key: "css3",
    name: "CSS3",
    type: "devicon",
  },
  {
    key: "amazonwebservices",
    name: "AWS)",
    type: "devicon",
  }
];

const apollo = [
  {
    key: "python",
    name: "Python",
    type: "devicon",
  },
  {
    key: "flask",
    name: "Flask",
    type: "devicon",
  },
  {
    key: "postgresql",
    name: "postgreSQL",
    type: "devicon",
  },
  {
    key: "javascript",
    name: "JavaScript",
    type: "devicon",
  },
  {
    key: "react",
    name: "React",
    type: "devicon",
  },
  {
    key: "html5",
    name: "HTML5",
    type: "devicon",
  },
  {
    key: "css3",
    name: "CSS3",
    type: "devicon",
  },
  {
    key: "git",
    name: "Git",
    type: "devicon",
  },
  {
    key: "amazonwebservices",
    name: "AWS",
    type: "devicon",
  }
];

const healthforce = [
  {
    key: "python",
    name: "Python",
    type: "devicon",
  },
  {
    key: "fastapi",
    name: "FastAPI",
    type: "devicon",
  },
  {
    key: "postgresql",
    name: "postgreSQL",
    type: "devicon",
  },
  {
    key: "git",
    name: "Git(Hub)",
    type: "devicon",
  }
];

const tentpole = [
  {
    key: "python",
    name: "Python",
    type: "devicon",
  },
  {
    key: "django",
    name: "Django",
    type: "devicon",
  },
  {
    key: "postgresql",
    name: "postgreSQL",
    type: "devicon",
  },
  {
    key: "javascript",
    name: "JavaScript",
    type: "devicon",
  },
  {
    key: "react",
    name: "React",
    type: "devicon",
  },
  {
    key: "materialui",
    name: "Material UI",
    type: "devicon",
  },
  {
    key: "html5",
    name: "HTML5",
    type: "devicon",
  },
  {
    key: "css3",
    name: "CSS3",
    type: "devicon",
  },
  {
    key: "pandas",
    name: "Pandas",
    type: "devicon",
  },
  {
    key: "git",
    name: "Gitlab",
    type: "devicon",
  },
  ,
  {
    key: "amazonwebservices",
    name: "AWS",
    type: "devicon",
  }
];

const group = [
  {
    key: "python",
    name: "Python",
    type: "devicon",
  },
  {
    key: "django",
    name: "Django",
    type: "devicon",
  },
  {
    key: "postgresql",
    name: "postgreSQL",
    type: "devicon",
  },
  {
    key: "javascript",
    name: "JavaScript",
    type: "devicon",
  },
  {
    key: "react",
    name: "React",
    type: "devicon",
  },
  {
    key: "materialui",
    name: "Material UI",
    type: "devicon",
  },
  {
    key: "html5",
    name: "HTML5",
    type: "devicon",
  },
  {
    key: "css3",
    name: "CSS3",
    type: "devicon",
  },
  {
    key: "pandas",
    name: "Pandas",
    type: "devicon",
  },
  {
    key: "git",
    name: "Gitlab",
    type: "devicon",
  },
  {
    key: "amazonwebservices",
    name: "AWS",
    type: "devicon",
  }
];

const ddimm = [
  {
    key: "python",
    name: "Python",
    type: "devicon",
  },
  {
    key: "html5",
    name: "HTML5",
    type: "devicon",
  },
  {
    key: "pandas",
    name: "Pandas",
    type: "devicon",
  },
  {
    key: "google",
    name: "Google Sheets",
    type: "devicon",
  },
  {
    key: "jupyter",
    name: "Jupyter",
    type: "devicon",
  },
  {
    key: "chrome",
    name: "Chrome",
    type: "devicon",
  }
];
