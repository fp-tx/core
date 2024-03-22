import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes as prismThemes } from 'prism-react-renderer'

import pkg from './package.json'

const config: Config = {
  title: `@fp-tx/core`,
  tagline:
    'fp-tx is a continuation of fp-ts, a functional programming library for TypeScript inspired by PureScript and Haskell.',
  url: 'https://fp-tx.org',
  baseUrl: '/',

  organizationName: 'fp-tx',
  projectName: 'core',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          editUrl: 'https://github.com/fp-tx/core/blob/main',
        },
        blog: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'https://avatars.githubusercontent.com/u/151417963?s=200&v=4',
    navbar: {
      title: `documenter v${pkg.version}`,
      logo: {
        alt: 'fp-tx/core Logo',
        src: 'https://avatars.githubusercontent.com/u/151417963?s=200&v=4',
      },
      items: [
        {
          href: 'https://github.com/fp-tx/core',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Jacob Alford`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
