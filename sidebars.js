module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
    },
    {
      type: 'category',
      label: 'Principles',
      collapsed: false,
      items: [
        'principles/goals-principles',
        'principles/voice-chart',
      ],
    },
    {
      type: 'category',
      label: 'Best Practices and Tools',
      collapsed: false,
      items: [
        'best-practices/process',
        'best-practices/i18n',
        'best-practices/a11y',
        'best-practices/word-list',
        'best-practices/contribute'
      ],
    },
    {
      type: 'category',
      label: 'Text Patterns',
      collapsed: false,
      items: [
        'text-patterns/titles',
        'text-patterns/page-description',
        'text-patterns/buttons',
        'text-patterns/empty-states',
        'text-patterns/labels',
        'text-patterns/controls',
        'text-patterns/text-input',
        'text-patterns/transitional-text',
        'text-patterns/confirmation-messages',
        'text-patterns/notifications',
        'text-patterns/errors',
        'text-patterns/apis',
        'text-patterns/toolbelt-cli'
      ],
    },
  ],
};
