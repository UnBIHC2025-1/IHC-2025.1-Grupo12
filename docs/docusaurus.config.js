// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pocket',
  tagline: 'Checklist de Acessibilidade',
  favicon: 'img/checklisticon.svg',

  // ───────────────────────────── Deploy ─────────────────────────────
  deploymentBranch: 'gh-pages',
  url: 'https://unbihc2025-1.github.io',
  baseUrl: '/IHC-2025.1-Grupo12/',
  organizationName: 'UnBIHC2025-1',   // owner do repositório
  projectName: 'IHC-2025.1-Grupo12', // nome do repositório
  trailingSlash: false,

  // ───────────────────────────── Qualidade ──────────────────────────
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // ───────────────────────────── Idioma ─────────────────────────────
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  // ──────────────────────────── Presets ─────────────────────────────
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // ──────────────────────────── Tema ────────────────────────────────
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Início',
        // logo: {
        //   alt: 'Logo do Projeto',
        //   src: 'img/checklisticon.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Introdução',
          },
          {
    to: '/docs/devweb', // ou URL externa
    label: 'Início da Checklist',
    position: 'left',
    activeBasePath: 'docs/checklist', // mantém estado “ativo”
  },
          {
            href: 'https://github.com/UnBIHC2025-1/IHC-2025.1-Grupo12',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Checklist', to: '/docs/intro'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
