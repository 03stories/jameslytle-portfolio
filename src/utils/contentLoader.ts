export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  featuredImage: string;
  content: string;
  slug: string;
}

export interface AboutContent {
  title: string;
  content: string;
  image: string;
  resume: string;
}

export interface HomeContent {
  title: string;
  subtitle: string;
  featuredProjects: string[];
}

// Fallback mock data
const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Finestra Art App',
    date: '2011-01-01',
    description: 'A mobile app for discovering and experiencing local art',
    featuredImage: '/content/projects/finestra-art-app/finestra-header.png',
    content: '# Finestra Art App\n\nDetailed content here...',
    slug: 'finestra-art-app'
  },
  {
    id: '2',
    title: 'Coca-Cola',
    date: '2012-01-14',
    description: 'Redesigning the digital experience for Coca-Cola',
    featuredImage: '/content/projects/coca-cola/coca-cola-final1.png',
    content: '# Coca-Cola\n\nDetailed content here...',
    slug: 'coca-cola'
  },
  {
    id: '3',
    title: 'Silverpop',
    date: '2013-10-01',
    description: 'Marketing automation platform design',
    featuredImage: '/content/projects/silverpop/p_silverpop_f_symbol_lf_10g.png',
    content: '# Silverpop\n\nDetailed content here...',
    slug: 'silverpop'
  },
  {
    id: '4',
    title: 'Juicebox',
    date: '2020-06-27',
    description: 'Data storytelling platform',
    featuredImage: '/content/projects/juicebox/jb-header.png',
    content: '# Juicebox\n\nDetailed content here...',
    slug: 'juicebox'
  }
];

const mockAboutContent: AboutContent = {
  title: 'About James Lytle',
  content: '# About James Lytle\n\nI\'m a product designer with over 10 years of experience...',
  image: '/content/about/jl-headshot-sm.jpg',
  resume: '/content/about/james-lytle-resume-2020.pdf'
};

const mockHomeContent: HomeContent = {
  title: 'James Lytle',
  subtitle: 'Product Designer & UX Strategist',
  featuredProjects: ['finestra-art-app', 'juicebox']
};

// Check if we're in a production build with preloaded content
const hasPreloadedContent = typeof __PROJECTS__ !== 'undefined' && 
                           typeof __ABOUT_CONTENT__ !== 'undefined' && 
                           typeof __HOME_CONTENT__ !== 'undefined';

export const getProjects = (): Project[] => {
  // Use preloaded content in production
  if (hasPreloadedContent && __PROJECTS__) {
    return __PROJECTS__;
  }
  
  // Development fallback
  console.error('Using fallback project data (no preloaded content available)');
  return mockProjects;
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  // Use preloaded content in production
  if (hasPreloadedContent && __PROJECTS__) {
    return __PROJECTS__.find(project => project.slug === slug);
  }
  
  // Development fallback
  console.error(`Using fallback for project ${slug} (no preloaded content available)`);
  return mockProjects.find(project => project.slug === slug);
};

export const getAboutContent = (): AboutContent => {
  // Use preloaded content in production
  if (hasPreloadedContent && __ABOUT_CONTENT__) {
    return __ABOUT_CONTENT__;
  }
  
  // Development fallback
  console.error('Using fallback about content (no preloaded content available)');
  return mockAboutContent;
};

export const getHomeContent = (): HomeContent => {
  // Use preloaded content in production
  if (hasPreloadedContent && __HOME_CONTENT__) {
    return __HOME_CONTENT__;
  }
  
  // Development fallback
  console.error('Using fallback home content (no preloaded content available)');
  return mockHomeContent;
};