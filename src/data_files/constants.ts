import ogImageSrc from '@images/mainlogo.svg?url'

export const SITE = {
  title: 'TEDxNCIT',
  tagline: 'TED event',
  description:
    'TEDxNCIT is an independently organized TED event that we are hosting here at the Nepal College of Information Technology (NCIT). Like other TEDx events, TEDxNCIT operates under a license from TED, a nonprofit organization devoted to spreading ideas in the form of short, powerful talks.',
  description_short:
    'TEDxNCIT, hosted by Nepal College of Information Technology (NCIT), is an independently organized TED event. It features short, powerful talks under a license from TED. ',
  url: 'https://tedx.ncit.edu.np/',
  author: 'Apil Khadka',
}

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: 'en-US',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
}

export const OG = {
  locale: 'en_US',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title}: : An Independently organized TED event`,
  description:
    'TEDxNCIT is an independently organized TED event that we are hosting here at the Nepal College of Information Technology (NCIT). Like other TEDx events, TEDxNCIT operates under a license from TED, a nonprofit organization devoted to spreading ideas in the form of short, powerful talks.',
  image: ogImageSrc,
}

export const INSIGHTS_SEO = {
  title: 'Insights | TEDxNCIT',
  description:
    'Explore inspiring talks and ideas from TEDxNCIT. Our insights feature diverse perspectives to foster innovation and creativity in our community.',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Insights | TEDxNCIT',
    description:
      'Explore inspiring talks and ideas from TEDxNCIT. Our insights feature diverse perspectives to foster innovation and creativity in our community.',
    url: `${SITE.url}insights`,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
}

export const HOMEPAGE_SEO = {
  title: 'TEDxNCIT | Ideas Worth Spreading',
  description:
    'Join TEDxNCIT for a day of inspiring talks and innovative ideas. Discover the power of ideas worth spreading.',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'TEDxNCIT | Ideas Worth Spreading',
    description:
      'Join TEDxNCIT for a day of inspiring talks and innovative ideas. Discover the power of ideas worth spreading.',
    url: SITE.url,
    publisher: {
      '@type': 'Organization',
      name: SITE.title,
      logo: {
        '@type': 'ImageObject',
        url: OG.image,
      },
    },
  },
}

export const CONTACT_SEO = {
  title: 'Contact Us | TEDxNCIT',
  description:
    'Get in touch with TEDxNCIT for inquiries, collaborations, or more information about our events.',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Us | TEDxNCIT',
    description:
      'Get in touch with TEDxNCIT for inquiries, collaborations, or more information about our events.',
    url: `${SITE.url}contact`,
  },
}

export const REGISTER_SEO = {
  title: 'Register for TEDxNCIT',
  description:
    'Secure your spot at TEDxNCIT and be part of an inspiring event filled with innovative ideas and powerful talks.',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'TEDxNCIT',
    description:
      'Secure your spot at TEDxNCIT and be part of an inspiring event filled with innovative ideas and powerful talks.',
    startDate: '2026-01-02T00:00:00Z',
    location: {
      '@type': 'Place',
      name: 'Nepal College of Information Technology',
      address: 'Balkumari, Lalitpur, Nepal',
    },
    url: `${SITE.url}register`,
  },
}

export const SPEAKERS_SEO = {
  title: 'Speakers | TEDxNCIT',
  description:
    'Meet the brilliant minds behind TEDxNCIT. Our speakers bring unique perspectives and stories to inspire change.',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Speakers | TEDxNCIT',
    description:
      'Meet the brilliant minds behind TEDxNCIT. Our speakers bring unique perspectives and stories to inspire change.',
    url: `${SITE.url}speakers`,
  },
}

export const TEAMS_SEO = {
  title: 'Our Team | TEDxNCIT',
  description:
    'Get to know the dedicated team behind TEDxNCIT. Together, we bring ideas worth spreading to life.',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Our Team | TEDxNCIT',
    description:
      'Get to know the dedicated team behind TEDxNCIT. Together, we bring ideas worth spreading to life.',
    url: `${SITE.url}teams`,
  },
}
