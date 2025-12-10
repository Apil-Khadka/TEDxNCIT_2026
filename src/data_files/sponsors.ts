

import comingSoon from '@images/coming.webp'

// Define Types
interface Sponsor {
  id: string;
  name: string;
  type: string;
  description: string;
  longDescription: string;
  url: string;
  img: ImageMetadata;
}

// 4. Data Generation
export const goldSponsors: Sponsor[] = [
  { 
    id: 'g1', 
    name: 'TechGiant Corp', 
    type: 'Title Sponsor', 
    description: 'Leading the way in AI innovation.', 
    longDescription: 'TechGiant Corp is a world leader in Artificial Intelligence, dedicated to shaping the future through neural networks and deep learning. They are the primary backbone of this event.',
    url: '#', 
    img: comingSoon 
  },
  { 
    id: 'g2', 
    name: 'MegaBank Ltd.', 
    type: 'Financial Partner', 
    description: 'Empowering future generations.', 
    longDescription: 'MegaBank Ltd provides secure financial solutions across the globe. Their commitment to student growth and hackathons helps fund the prizes and logistics.',
    url: '#', 
    img: comingSoon 
  },
];

export const silverSponsors: Sponsor[] = [
  { 
    id: 's1', name: 'CodeStream', type: 'Streaming', 
    description: 'High quality streaming.', 
    longDescription: 'CodeStream ensures our event reaches a global audience with ultra-low latency 4K streaming services.',
    url: '#', img: comingSoon 
  },
  { 
    id: 's2', name: 'SoftStack', type: 'Software', 
    description: 'Digital backbone.', 
    longDescription: 'SoftStack provides the API infrastructure and cloud credits used by participants to build their prototypes.',
    url: '#', img: comingSoon 
  },
  { 
    id: 's3', name: 'LogiEx', type: 'Logistics', 
    description: 'Moving things fast.', 
    longDescription: 'LogiEx handles all shipping of swag, hardware, and prizes to winners efficiently.',
    url: '#', img: comingSoon 
  },
  { 
    id: 's4', name: 'EventPro', type: 'Management', 
    description: 'Managing experiences.', 
    longDescription: 'EventPro offers the software suite that handles registration and ticketing for the event.',
    url: '#', img: comingSoon 
  },
  { 
    id: 's5', name: 'CloudNet', type: 'Cloud', 
    description: 'Serverless solutions.', 
    longDescription: 'CloudNet is offering free tier credits for their serverless architecture to all attendees.',
    url: '#', img: comingSoon 
  },
];

export const bronzeSponsors: Sponsor[] = [
  { 
    id: 'b1', name: 'BevCo', type: 'Refreshments', 
    description: 'Hydration partner.', 
    longDescription: 'BevCo is supplying energy drinks and water to keep hackers hydrated throughout the 48 hours.',
    url: '#', img: comingSoon 
  },
  { 
    id: 'b2', name: 'PrintHouse', type: 'Print Media', 
    description: 'High quality prints.', 
    longDescription: 'PrintHouse managed all banners, ID cards, and sticker printing for the venue.',
    url: '#', img: comingSoon 
  },
  { 
    id: 'b3', name: 'SecurityFirst', type: 'Security', 
    description: 'Keeping us safe.', 
    longDescription: 'SecurityFirst ensures the digital safety of our wifi networks and participant data.',
    url: '#', img: comingSoon 
  },
  { 
    id: 'b4', name: 'NetConnect', type: 'ISP', 
    description: 'High speed internet.', 
    longDescription: 'NetConnect provides the gigabit fiber connection for the venue.',
    url: '#', img: comingSoon 
  },
  { 
    id: 'b5', name: 'DecorMate', type: 'Decor', 
    description: 'Making things beautiful.', 
    longDescription: 'DecorMate designed the stage and booth setups.',
    url: '#', img: comingSoon 
  },
  { 
    id: 'b6', name: 'SoundSys', type: 'Audio', 
    description: 'Crystal clear sound.', 
    longDescription: 'SoundSys provided the PA system and microphones for the presentations.',
    url: '#', img: comingSoon 
  },
];

export const communitySponsors: Sponsor[] = Array.from({ length: 18 }).map((_, i) => ({
  id: `c${i}`,
  name: `Community Partner ${i + 1}`,
  type: 'Support',
  description: 'Supporting the local ecosystem.',
  longDescription: 'A valued member of our local tech ecosystem helping spread the word.',
  url: '#',
  img: comingSoon,
}));
