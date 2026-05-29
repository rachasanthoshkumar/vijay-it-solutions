export const navLinks = [
  { label: 'Why Us', href: '#about' },
  { label: 'Results', href: '#stats' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' }
];

export const serviceLinks = [
  { label: 'IT Infrastructure and Networking', href: '/it-infrastructure-and-networking' },
  { label: 'Cloud Services', href: '/cloud-services' },
  { label: 'Web App Development', href: '/web-app-development' },
  { label: 'IT Consulting', href: '/it-consulting' },
  { label: 'Testing', href: '/testing' },
  { label: 'Sales & Support', href: '/sales-and-support' }
];

export const servicePages = {
  '/it-infrastructure-and-networking': {
    eyebrow: 'Infrastructure and networking',
    title: 'IT Infrastructure and Networking',
    summary:
      'Plan, build, modernise, and support the infrastructure that keeps your teams, systems, and devices connected.',
    description:
      'Inspired by Vijay IT Solutions’ infrastructure and networking service, this page focuses on end-to-end design, implementation, and support across hardware, network components, software environments, cloud networks, and AI-ready systems.',
    highlights: [
      'Network architecture and implementation',
      'Hardware and system infrastructure planning',
      'Secure device and endpoint connectivity',
      'Cloud network integration',
      'Ongoing infrastructure maintenance and support',
      'Cost-conscious upgrades for existing environments'
    ],
    outcomes: [
      'A healthier, more dependable IT estate',
      'Lower friction when teams, offices, or systems scale',
      'Practical network improvements without unnecessary disruption'
    ],
    accent: 'from-cobalt/22 via-mint/18 to-white'
  },
  '/cloud-services': {
    eyebrow: 'Cloud services',
    title: 'Cloud Services',
    summary:
      'Move from fragmented systems to secure, scalable cloud environments that are easier to manage and ready to grow.',
    description:
      'Based on the Vijay IT Solutions cloud services offer, this page presents cloud IT infrastructure design and implementation tailored to business requirements, with a modern emphasis on migration, resilience, governance, and long-term support.',
    highlights: [
      'Cloud readiness and migration planning',
      'Cloud infrastructure design and implementation',
      'Microsoft 365 and productivity environment support',
      'Backup, recovery, and resilience planning',
      'Cloud security and access controls',
      'Performance optimisation and ongoing cloud support'
    ],
    outcomes: [
      'Cleaner cloud operations and fewer manual workarounds',
      'Better resilience for critical business systems',
      'Scalable infrastructure matched to real demand'
    ],
    accent: 'from-mint/24 via-cobalt/14 to-white'
  },
  '/web-app-development': {
    eyebrow: 'Web app development',
    title: 'Web App Development',
    summary:
      'Design and develop scalable web applications, customer portals, dashboards, and digital products around real operational needs.',
    description:
      'Based on Vijay IT Solutions’ development service, this page focuses on full-cycle software delivery, from requirements analysis and design through robust, scalable, maintainable web and mobile application development.',
    highlights: [
      'Requirements discovery and solution design',
      'Bespoke software development',
      'Web and mobile application development',
      'Product development and iteration',
      'Scalable application architecture',
      'Long-term support and enhancement planning'
    ],
    outcomes: [
      'Software shaped around the way your team works',
      'Cleaner customer and internal digital experiences',
      'A maintainable product foundation for future growth'
    ],
    accent: 'from-coral/24 via-cobalt/12 to-white'
  },
  '/it-consulting': {
    eyebrow: 'IT consulting',
    title: 'IT Consulting',
    summary:
      'Get practical, independent advice on software architecture, infrastructure choices, delivery planning, and technology improvement.',
    description:
      'Inspired by Vijay IT Solutions’ consulting offer, this page keeps the focus on unbiased technical consulting that improves software architecture, removes operational friction, and helps teams choose the right path before they invest.',
    highlights: [
      'Technology audits and current-state reviews',
      'Software architecture recommendations',
      'Infrastructure and cloud advisory',
      'Delivery roadmap planning',
      'Vendor and platform decision support',
      'Practical improvement plans for SMEs'
    ],
    outcomes: [
      'More confidence before major technology decisions',
      'Sharper priorities across systems, teams, and budgets',
      'A realistic roadmap your business can act on'
    ],
    accent: 'from-cobalt/20 via-coral/14 to-white'
  },
  '/testing': {
    eyebrow: 'Testing',
    title: 'Testing',
    summary:
      'Improve confidence before launch with manual testing, automation, compatibility checks, and practical release assurance.',
    description:
      'Based on Vijay IT Solutions’ testing service, this page covers manual and automated functionality testing, browser compatibility, regression checks, and the quality processes needed to keep web products dependable.',
    highlights: [
      'Manual functionality testing',
      'Automated regression testing',
      'Browser and device compatibility checks',
      'Release readiness reviews',
      'Performance and usability observations',
      'Clear defect reporting and retesting'
    ],
    outcomes: [
      'Fewer avoidable defects reaching customers',
      'More predictable launches and product updates',
      'Better visibility into product quality risks'
    ],
    accent: 'from-mint/20 via-coral/12 to-white'
  },
  '/sales-and-support': {
    eyebrow: 'Sales and support',
    title: 'Sales & Support',
    summary:
      'Keep systems healthy with reliable online and offline support, security management, monitoring, migration help, and storage services.',
    description:
      'Based on Vijay IT Solutions’ Sales & Support page, this service focuses on trusted IT support tailored through discussion with customers, covering the practical work needed to maintain systems and protect technology investments.',
    highlights: [
      'IT security management',
      'Update and patch support',
      'Remote system monitoring',
      'Reliable SLA-led support',
      'IT networking support',
      'Migration and storage services'
    ],
    outcomes: [
      'Support available when teams need it most',
      'Healthier systems with fewer recurring issues',
      'A practical support model matched to your requirements'
    ],
    accent: 'from-coral/22 via-mint/14 to-white'
  }
};

export const careerCards = [
  {
    slug: 'consulting-agency-for-your-business',
    title: 'Consulting Agency for Your Business',
    description: 'Rapidiously engage fully tested e-commerce with progressive architectures.'
  },
  {
    slug: 'consulting-agency-for-your-business-2',
    title: 'Consulting Agency for Your Business',
    description: 'Rapidiously engage fully tested e-commerce with progressive architectures.'
  },
  {
    slug: 'consulting-agency-for-your-business-3',
    title: 'Consulting Agency for Your Business',
    description: 'Rapidiously engage fully tested e-commerce with progressive architectures.'
  }
];

export const careerDetailPages = careerCards.reduce((pages, card, index) => {
  pages[`/careers/${card.slug}`] = {
    ...card,
    eyebrow: `Opportunity ${String(index + 1).padStart(2, '0')}`,
    summary:
      'Review the role details, capabilities, and support information from the Vijay IT Solutions careers detail page.',
    details: [
      'Phosfluorescently disseminate magnetic e-business for user-centric "outside the box" thinking. Compellingly integrate client-based synergy after cutting-edge solutions. Objectively foster economically sound partnerships with timely meta-services. Globally develop market positioning methods of empowerment before ubiquitous niches. Energistically build extensive experiences after real-time channels.',
      'Seamlessly coordinate high-quality functionalities and bricks-and-clicks methods of empowerment. Authoritatively cultivate adaptive bandwidth and collaborative intellectual capital. Uniquely build open-source experiences without market positioning customer service. Dramatically strategize resource sucking outsourcing through state of the art vortals. Quickly aggregate enterprise portals with cross-platform e-business.',
      'Enthusiastically matrix future-proof internal or "organic" sources through covalent communities. Synergistically incubate reliable metrics whereas client-focused technologies. Completely embrace multifunctional scenarios without orthogonal benefits. Competently enhance equity invested data with performance based niches. Assertively aggregate professional catalysts for change metrics.'
    ],
    requirements: [
      { label: 'Foreclosure', text: 'consultant Human consulting' },
      { label: 'Corporate', text: 'Immigration, Information' },
      { label: 'SEO', text: 'Optimization consultant' },
      { label: 'Rapidiously', text: 'conceptualize communities' },
      { label: 'Consultant', text: 'pharmacist Creative consultant' },
      { label: 'Monotonectally', text: 'customize B2B core competencies' }
    ],
    help: {
      title: 'Need Help?',
      description: 'We are available in 24/7 hours for dedicated support',
      details: [
        'Ilford Business Hub\nForest House\n16-20 Clements Road\n4th Floor\nIlford\nIG1 1BA',
        '+447587605253',
        'Laxmantaduri888@gmail.com'
      ]
    },
    newsletter: {
      title: 'Newsletter',
      description: 'Enter your email address below to subscribe to my newsletter'
    },
    cta: {
      title: 'Consulting Agency for Your Business',
      description: 'Rapidiously engage fully tested e-commerce with progressive architectures.'
    }
  };

  return pages;
}, {});

export const services = [
  {
    title: 'IT Infrastructure and Networking',
    href: '/it-infrastructure-and-networking',
    description:
      'Plan, build, modernise, and support the infrastructure that keeps your teams, systems connected.',
    accent: 'bg-cobalt'
  },
  {
    title: 'Cloud Services',
    href: '/cloud-services',
    description:
      'Move from fragmented systems to secure, scalable cloud environments that are easier to manage and ready to grow.',
    accent: 'bg-mint'
  },
  {
    title: 'Web App Development',
    href: '/web-app-development',
    description:
      'Design and develop scalable web applications, customer portals, dashboards, and digital products around real operational needs.',
    accent: 'bg-coral'
  },
  {
    title: 'IT Consulting',
    href: '/it-consulting',
    description:
      'Get practical, independent advice on software architecture, infrastructure choices, delivery planning, and technology improvement.',
    accent: 'bg-ink'
  },
  {
    title: 'Testing',
    href: '/testing',
    description:
      'Improve confidence before launch with manual testing, automation, compatibility checks, and practical release assurance.',
    accent: 'bg-cobalt'
  },
  {
    title: 'Sales & Support',
    href: '/sales-and-support',
    description:
      'Keep systems healthy with reliable online and offline support, security management, monitoring, migration help, and storage services.',
    accent: 'bg-ink'
  }
];

export const stats = [
  { value: '280+', label: 'Projects launched' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '24/7', label: 'Support coverage' }
];

export const testimonials = [
  {
    quote:
      'The team translated a messy technical brief into a calm, modern platform that our staff actually enjoy using.',
    name: 'Amelia Hart',
    role: 'Operations Director, Northline Group'
  },
  {
    quote:
      'Their support feels strategic, not reactive. We finally have cloud, security, and product delivery moving together.',
    name: 'Marcus Ellison',
    role: 'Founder, Veridian Labs'
  },
  {
    quote:
      'Sharp thinking, clean execution, and clear communication from discovery through launch.',
    name: 'Priya Mehta',
    role: 'Head of Product, BrightDesk'
  }
];

export const contactDetails = [
  { label: 'Email', value: 'Laxmantaduri888@gmail.com' },
  { label: 'Phone', value: '+447587605253' },
  {
    label: 'Office',
    value: 'Ilford Business Hub\nForest House\n16-20 Clements Road\n4th Floor\nIlford\nIG1 1BA'
  }
];
