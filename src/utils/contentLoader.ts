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

// In a real implementation, these would load data from files
// For now, we'll return mock data for demonstration

export const getProjects = (): Project[] => {
  // This would actually load all project markdown files
  // For now, return mock data
  return [
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
      featuredImage: '/content/projects/coca-cola/800px-coca-cola_logo.png',
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
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  const projects = getProjects();
  return projects.find(project => project.slug === slug);
};

export const getAboutContent = (): AboutContent => {
  // This would load from a markdown file
  return {
    title: 'About James Lytle',
    content: '# About James Lytle\n\nI\'m a product designer with over 10 years of experience...',
    image: '/content/about/jl-headshot-sm.jpg',
    resume: '/content/about/james-lytle-resume-2020.pdf'
  };
};

export const getHomeContent = (): HomeContent => {
  // This would load from a markdown file
  return {
    title: 'James Lytle',
    subtitle: 'Product Designer & UX Strategist',
    featuredProjects: ['finestra-art-app', 'juicebox']
  };
};