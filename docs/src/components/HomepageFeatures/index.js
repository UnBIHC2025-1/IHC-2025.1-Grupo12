import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center padding-vert--lg">
          {/* subtítulo orientado à ação */}
          <Heading as="h1">Como funciona a avaliação?</Heading>

          {/* proposta de valor resumida */}
          <p className="text--center margin-bottom--md">
            Cheque rapidamente a conformidade com a WCAG 2.2, a NBR 17225 e <br/>as boas práticas internacionais de acessibilidade.
          </p>
        </div>
      </div>
    </section>
  );
}
