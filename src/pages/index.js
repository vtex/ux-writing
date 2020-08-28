import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Topic({ title, description, linkTo }) {
  return (
    <div className={clsx("col", styles.topic)}>
      <h3>{title}</h3>
      <p className={styles.topic__description}>{description}</p>
      <Link
        className={clsx("button button--lg", styles.button__secondary)}
        to={useBaseUrl(linkTo)}
      >
        EXPLORE
      </Link>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="UX Writing guidelines used in VTEX"
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <div className="row">
            <div className="col col--8">

          <h1 className={styles.hero__title}>The right words, <br />with the right voice.</h1>
          <p className={styles.hero__subtitle}>We craft precise microcopy, that transmits our brand’s voice, and achieves our user’s goals. Through this guide, you will master the art of UX Writing at VTEX. </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              GET Started
            </Link>
          </div>
          </div>
          </div>
        </div>
      </header>
      <main>
        <div className={styles.topics}>
        <div className="container">
          <div className={clsx("row")}>
            <Topic
              title="Getting Started"
              description="What is UX Writing, why this guide exists, and how to get  the most out of it."
              linkTo="/docs"
            />
            <Topic
              title="Our Principles"
              description="Our brand's voice and strategy must be recognizable in every medium our users interact with."
              linkTo="/docs/principles/goals-principles"
            />
            <Topic
              title="Text Patterns"
              description="The starting point to writing precise text for buttons, titles, error messages and more."
              linkTo="/docs/text-patterns/titles"
            />
            <Topic
              title="Tools and Best Practices"
              description="Resources to guide you in drafting, editing and choosing the best microcopy."
              linkTo="/docs/best-practices/a11y"
            />
          </div>
        </div>
        </div>
       
      </main>
    </Layout>
  );
}

export default Home;
