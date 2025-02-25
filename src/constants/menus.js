import CalendarIcon from 'icons/calendar.inline.svg';
import TransactionsIcon from 'icons/transactions.inline.svg';

import LINKS from './links';

export default {
  header: [
    {
      text: 'Docs',
      to: LINKS.docs,
    },
    {
      text: 'Branching',
      to: LINKS.branching,
    },
    {
      text: 'Company',
      items: [
        {
          iconName: 'aboutUs',
          text: 'About us',
          description: 'Meet the team',
          to: LINKS.aboutUs,
        },
        {
          iconName: 'careers',
          text: 'Careers',
          description: 'Become a member',
          to: LINKS.careers,
        },
      ],
    },
    {
      text: 'Blog',
      to: LINKS.blog,
    },
    {
      text: 'Community',
      to: LINKS.discourse,
      // items: [
      // {
      //   iconName: 'discord',
      //   text: 'Discord',
      //   description: 'Join our community',
      //   to: LINKS.discord,
      // },
      //   {
      //     iconName: 'discussions',
      //     text: 'Community',
      //     description: 'Get help',
      //     to: LINKS.discourse,
      //   },
      // ],
    },
    {
      text: 'Pricing',
      to: LINKS.pricing,
    },
  ],
  footer: [
    {
      heading: 'Company',
      links: [
        {
          text: 'Blog',
          to: LINKS.blog,
        },
        {
          text: 'About us',
          to: LINKS.aboutUs,
        },
        {
          text: 'Careers',
          to: LINKS.careers,
        },
        {
          text: 'Partners',
          to: LINKS.partners,
        },
        {
          text: 'Pricing',
          to: LINKS.pricing,
        },
        {
          text: 'Contact Sales',
          to: LINKS.contactSales,
        },

        // {
        //   text: 'Release notes',
        //   to: LINKS.releaseNotes,
        // },
      ],
    },
    {
      heading: 'Resources',
      links: [
        {
          text: 'Docs',
          to: LINKS.docs,
        },
        {
          text: 'Release notes',
          to: LINKS.releaseNotes,
        },
        // {
        //   text: 'PostgreSQL docs',
        //   to: LINKS.postgresDocs,
        // },
        {
          text: 'Support',
          to: LINKS.support,
        },
        {
          text: 'Security',
          to: LINKS.security,
        },
      ],
    },
    {
      heading: 'Community',
      links: [
        {
          text: 'Twitter',
          to: LINKS.twitter,
          icon: 'twitter-icon',
        },
        {
          text: 'LinkedIn',
          to: LINKS.linkedin,
          icon: 'linkedin-icon',
        },
        // {
        //   text: 'Discord',
        //   to: LINKS.discord,
        // },
        {
          text: 'GitHub',
          to: LINKS.github,
          icon: 'github-icon',
        },
        {
          text: 'Discourse',
          to: LINKS.discourse,
          icon: 'discourse-icon',
        },
        {
          text: 'YouTube',
          to: LINKS.youtube,
          icon: 'youtube-icon',
        },
      ],
    },
    {
      heading: 'Legal',
      links: [
        {
          text: 'Privacy Policy',
          to: LINKS.privacy,
        },
        {
          text: 'Terms of Service',
          to: LINKS.terms,
        },
      ],
    },
  ],
  mobile: [
    {
      text: 'Docs',
      to: LINKS.docs,
    },
    {
      text: 'Branching',
      to: LINKS.branching,
    },
    {
      text: 'About us',
      to: LINKS.aboutUs,
    },
    {
      text: 'Careers',
      to: LINKS.careers,
    },
    {
      text: 'Blog',
      to: LINKS.blog,
    },
    {
      text: 'Pricing',
      to: LINKS.pricing,
    },
    // {
    //   iconName: 'discord',
    //   text: 'Discord',
    //   description: 'Join our community',
    //   to: LINKS.discord,
    // },
    {
      text: 'GitHub',
      to: LINKS.github,
    },
    {
      text: 'Community',
      to: LINKS.discourse,
    },
  ],
  docSidebar: [
    {
      icon: TransactionsIcon,
      title: 'API Reference',
      slug: LINKS.apiReference,
    },
    {
      icon: CalendarIcon,
      title: 'Release notes',
      slug: LINKS.releaseNotes,
    },
  ],
};
