import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getHomeContent, getProjects, getProjectBySlug } from '@/utils/contentLoader'
import ProjectCard from '@/components/ui/ProjectCard'

const HomePage = () => {
  const { title, subtitle, featuredProjects } = getHomeContent()
  const allProjects = getProjects()
  
  const featured = featuredProjects
    .map(slug => getProjectBySlug(slug))
    .filter(project => project !== undefined) as Array<ReturnType<typeof getProjectBySlug> & {}>
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero section */}
      <section className="bg-gradient-to-r from-primary-50 to-accent-50 py-16 sm:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <motion.div
              className="inline-block mb-6 p-3 bg-white/70 backdrop-blur-md rounded-xl shadow-workshop"
              whileHover={{ rotate: [-1, 1, -1, 0], transition: { duration: 0.5 } }}
            >
              <span className="text-lg font-medium text-primary-600">UX Product Designer</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-serif font-bold gradient-text mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {title}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-neutral-700 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {subtitle}
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/projects" className="btn btn-primary">
                  View My Work
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about" className="btn btn-secondary">
                  About Me
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured projects section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-serif font-bold mb-4">Featured Projects</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              A selection of my recent work in product design, UX strategy, and digital storytelling.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {featured.map(project => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.featuredImage}
                  slug={project.slug}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
            >
              <span>View all projects</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default HomePage