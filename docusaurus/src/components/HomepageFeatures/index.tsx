import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: any;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fast, Secure WordPress Hosting',
    description: (
      <>
        Offer fully managed, secure, high-performance WordPress hosting to deliver a fast and secure experience for your clients.
      </>
    ),
  },
  {
    title: 'Domains & DNS Management',
    description: (
      <>
        Easily manage your clients' domains and DNS settings. Connect domains, manage records, and ensure your clients' websites are always available.
      </>
    ),
  },
  {
    title: 'User Management',
    description: (
      <>
        Manage user access to your clients' websites. Add, remove, and manage users with different roles and permissions.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
