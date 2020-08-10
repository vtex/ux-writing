module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
    },
    {
      type: 'category',
      label: 'First Steps',
      collapsed: false,
      items: ['first-steps/contribute', 'first-steps/process'],
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
        'text-patterns/apis'
      ],
    },
    {
      type: 'category',
      label: 'Best Practices and Tools',
      collapsed: false,
      items: [
        'best-practices/a11y',
        'best-practices/i18n',
        'best-practices/word-list',
      ],
    },
  ],
};
