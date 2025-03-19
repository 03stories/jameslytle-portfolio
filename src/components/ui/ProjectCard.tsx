import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  imageSrc: string
  slug: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc, slug }) => {
  return (
    <motion.div 
      className="card group"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link to={`/projects/${slug}`} className="block">
        <div className="overflow-hidden rounded-md mb-4 border border-neutral-200">
          <motion.img
            src={imageSrc}
            alt={`${title} project thumbnail`}
            className="w-full h-48 object-cover object-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-neutral-600 line-clamp-2">{description}</p>
        
        <div className="mt-4 flex items-center text-primary-600 font-medium">
          <span>View Project</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProjectCard