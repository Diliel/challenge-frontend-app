import mock from "/src/@fake-db/mock";
/* eslint-disable global-require */
const data = {
  knowledgeBase: [
    {
      id: 1,
      category: 'sales-automation',
      title: 'Sales Automation',
      desc: 'There is perhaps no better demonstration of the folly of image of our tiny world.',
    },
    {
      id: 2,
      category: 'marketing-automation',
      title: 'Marketing Automation',
      desc: 'Look again at that dot. That’s here. That’s home. That’s us. On it everyone you love.',
    },
    {
      id: 3,
      category: 'api-questions',
      title: 'API Questions',
      desc: 'every hero and coward, every creator and destroyer of civilization.',
    },
    {
      id: 4,
      category: 'personalization',
      title: 'Personalization',
      desc: 'It has been said that astronomy is a humbling and character experience.',
    },
    {
      id: 5,
      category: 'email-marketing',
      title: 'Email Marketing',
      desc: 'There is perhaps no better demonstration of the folly of human conceits.',
    },
    {
      id: 6,
      category: 'demand-generation',
      title: 'Demand Generation',
      desc: 'Competent means we will never take anything for granted.',
    },
  ],
}
/* eslint-disable global-require */
mock.onGet('/ticket/data').reply(() => [200, data.pricing])
