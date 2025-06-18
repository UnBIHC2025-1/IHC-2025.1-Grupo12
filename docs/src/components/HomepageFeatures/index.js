import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center padding-vert--lg">
          <Heading as="h2">Bem-vindo(a).</Heading>
          <p className="text--center padding-vert--lg">Esta é uma demonstração básica. Em breve, mais informações serão disponibilizadas nesta seção.</p>
        </div>
      </div>
    </section>
  );
}
