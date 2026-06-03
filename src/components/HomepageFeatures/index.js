import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'SAP Modules & Solutions',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <div className={styles.linkContainer}>
        <Link className={styles.linkItem} to="/docs/modules-sap/fico">
          SAP FICO
        </Link>
        <Link className={styles.linkItem} to="/docs/modules-sap/materials-management">
          SAP MM
        </Link>
        <Link className={styles.linkItem} to="/docs/modules-sap/plant-maintenance">
          SAP Plant Maintenance
        </Link>
        <Link className={styles.linkItem} to="/docs/modules-sap/sales-distribution">
          SAP Sales & Distribution
        </Link>
      </div>
    ),
  },
  {
    title: 'Enterprise resource planning',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <div className={styles.linkContainer}>
        <Link className={styles.linkItem} to="/docs/enterprise-resource/sap-public-cloud">
          SAP S/4HANA Cloud Public Edition
        </Link>
        <Link className={styles.linkItem} to="/docs/enterprise-resource/private">
          SAP S/4HANA Cloud Private Edition
        </Link>
        <Link className={styles.linkItem} to="/docs/enterprise-resource/s4hana">
          SAP S/4HANA
        </Link>
        <Link className={styles.linkItem} to="/docs/enterprise-resource/sap-erp">
          SAP ERP
        </Link>
      </div>
    ),
  },
  {
    title: 'Business Technology Platform',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <div className={styles.linkContainer}>
        <Link className={styles.linkItem} to="/docs/business-technology-platform/business-applications">
          Business applications
        </Link>
        <Link className={styles.linkItem} to="/docs/business-technology-platform/data-and-analytics">
          Data
        </Link>
        <Link className={styles.linkItem} to="/docs/business-technology-platform/integration">
          Integration
        </Link>
        <Link className={styles.linkItem} to="/docs/business-technology-platform/artificial-intelligence">
          Artificial Intelligence
        </Link>
      </div>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
