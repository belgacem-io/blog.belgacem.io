const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'Hassene BELGACEM',
    image: '/avatar.png',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'Cloud Architect / Trainer',
    bio: 'Specialisations : Entreprise Architect, Solutions Architect, Multi-Cloud Architect, Devops, Kubernetes, Red hat Openshift, Google Cloud Platform ( GCP ) , Microsoft Azure, Amazon web services ( AWS ), Cloud architect, API architect, Google Authorized Trainer, Microsoft Certified Trainer , AWS Authorized Instructor',
    email: '',
    linkedin: 'hassene-belgacem',
    github: 'belgacem-io',
    instagram: '',
  },
  projects: [
    {
      name: `hassene.belgacem.io`,
      href: 'https://github.com/belgacem-io/blog.github.io'
    }
  ],
  // blog setting (required)
  blog: {
    title: 'Hassene BELGACEM',
    description: 'welcome to my blog!',
    theme: 'light' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://hassene.belgacem.io',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  seo: {
    keywords: ['Blog', 'Hassene BELGACEM','Cloud','Cyber security'],
  },

  // notion configuration (required)
  notionConfig: {
   pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'belgacem-io/hassene.belgacem.io',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: true
}
module.exports = CONFIG
