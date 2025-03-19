import { useState } from 'react'
import { motion } from 'framer-motion'
import { getProjects } from '@/utils/contentLoader'
import ProjectCard from '@/components/ui/ProjectCard'

const ProjectsPage = () => {
  const projects = getProjects()
  const [selectedFilter, setSelectedFilter] = useState('all')

  // For a real implementation, you'd have project categories
  const filteredProjects = projects

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-50 to-accent-50 py-12 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              My Projects
            </h1>
            <p className="text-lg text-neutral-700">
              A collection of my work in UX design, product strategy, and interactive storytelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            <FilterButton 
              label="All" 
              isActive={selectedFilter === 'all'} 
              onClick={() => setSelectedFilter('all')} 
            />
            <FilterButton 
              label="UX Design" 
              isActive={selectedFilter === 'ux'} 
              onClick={() => setSelectedFilter('ux')} 
            />
            <FilterButton 
              label="Product Strategy" 
              isActive={selectedFilter === 'strategy'} 
              onClick={() => setSelectedFilter('strategy')} 
            />
            <FilterButton 
              label="Data Visualization" 
              isActive={selectedFilter === 'data'} 
              onClick={() => setSelectedFilter('data')} 
            />
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map(project => (
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
        </div>
      </section>
    </motion.div>
  )
}

interface FilterButtonProps {
  label: string
  isActive: boolean
  onClick: () => void
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`px-4 py-2 rounded-full whitespace-nowrap ${
        isActive 
          ? 'bg-primary-600 text-white shadow-playful' 
          : 'bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  )
}

export default ProjectsPage