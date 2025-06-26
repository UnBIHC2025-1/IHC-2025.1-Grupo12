import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

/* ---------- catálogo dos cartões ---------- */
const cards = [
  {
    to: '/docs/devweb',
    title: '1. Desenvolvimento Web',
    desc: 'Estrutura, ARIA, mídia'
  },
  {
    to: '/docs/design',
    title: '2. Design Visual',
    desc: 'Cor, contraste, tipografia'
  },
  {
    to: '/docs/heuri-nielsen',
    title: '3. Heurísticas de Nielsen',
    desc: '10 princípios de usabilidade'
  },
  {
    to: '/docs/geracaoconteudo',
    title: '4. Geração de Conteúdo',
    desc: 'Textos, mídia, SEO'
  },
  {
    to: '/docs/gestaoprojetos',
    title: '5. Gestão de Projetos',
    desc: 'Fluxos, check-ins, QA'
  },
  {
    to: '/docs/ferramentas',
    title: '6. Ferramentas',
    desc: 'Linters, extensões, simulações'
  }
];

/* ---------- hero + botão “Introdução” ---------- */
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* NOVO wrapper centralizado */}
        <div className={styles.heroInner}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Introdução
          </Link>
        </div>
      </div>
    </header>
  );
}


/* ---------- contexto + grid de cartões + CTA ---------- */
function HomepageFeatures() {
  return (
    <>
      {/* Contexto rápido */}
      <section className={styles.context}>
        <div className="container">
          <p className="text--center">
            O <strong>Checklist</strong> reúne verificações curtas e acionáveis
            para tornar seus projetos mais acessíveis — do código à gestão.
          </p>
        </div>
      </section>

      {/* Grade de acesso rápido */}
      <section className={styles.cards}>
        <div className="container">
          <div className="row">
            {cards.map(({ to, title, desc }) => (
              <div className="col col--4 margin-vert--md" key={to}>
                <Link
                  to={to}
                  className={clsx('card padding--lg h-100', styles.card)}
                  aria-label={title}>
                  <h3 className="text--center">{title}</h3>
                  <p className="text--center">{desc}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- página principal ---------- */
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Pocket Checklist de Acessibilidade — guia rápido e prático">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
