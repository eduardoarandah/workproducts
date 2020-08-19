const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vim Workgroup',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Solutions',
        link: '/solutions/',
      },
      {
        text: 'Key Mappings',
        link: '/keymappings/',
      },
      {
        text: 'Link Collection',
        link: '/linkcollection/',
      },
      {
        text: 'Contribute',
        link: '/contribute/',
      },
    ],
    sidebar: {
      '/solutions/': [
        {
          title: 'Solutions',
          collapsable: false,
          children: [
            '',
            '_language_independent',
            '_template',
            'c++',
            'c',
            'coc',
            'go',
            'html',
            'javascript',
            'langserver',
            'lua',
            'perl',
            'python',
            'ruby',
            'rust',
          ],
        },
      ],
      '/keymappings/': [
        {
          title: 'Key Mappings',
          collapsable: false,
          children: [''],
        },
      ],
      '/linkcollection/': [
        {
          title: 'Link Collection',
          collapsable: false,
          children: [''],
        },
      ],
      '/contribute/': [
        {
          title: 'Contribute',
          collapsable: false,
          children: [''],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
