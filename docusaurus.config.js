module.exports = {
  title: 'VTEX UX Writing Guidelines',
  tagline: 'The right words in the right time',
  url: 'https://uxwriting.vtex.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.svg',
  organizationName: 'VTEX',
  projectName: 'ux-writing',
  themeConfig: {
    gtag: {
      id: 'googleAnalyticsTag',
      trackingID: 'UA-43760863-28',
      anonymizeIP: true,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      hideOnScroll: true,
      title: 'UX Writing Guidelines',
      logo: {
        alt: 'VTEX UX Writing Guidelines',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/vtex/ux-writing',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://vtex.com',
          label: 'VTEX',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} VTEX. This work seeks to educate our community about UX Writing in VTEX's context, with non-commercial purpose`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/vtex/ux-writing/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
