import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  link: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Before the academy",
    link: "docs/before-academy/",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Before the academy, please make sure to go through the pre-requisites to
        to make the best use of the academy.
      </>
    ),
  },
  {
    title: "The Agenda",
    link: "docs/web-academy",
    Svg: require("@site/static/img/flag_cote_ivoire.svg").default,
    description: (
      <>
        Have a look at the agenda to have an idea about the topics we will cover
        during the academy.
      </>
    ),
  },
  {
    title: "Useful Resources",
    link: "docs/resources/links",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Check out the resources, and make sure to join our{" "}
        <a href="https://dhis2-dev-community.slack.com/">Slack</a> where all the
        conversations will happen during the academy.
      </>
    ),
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}>
          <Svg className={styles.featureSvg} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <a href={link}>
          <Heading as="h3">{title}</Heading>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
