import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { getProjectBySlug } from '@/utils/contentLoader'

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const project = getProjectBySlug(slug || '')
  
  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <p className="mb-8">The project you're looking for doesn't exist or has been moved.</p>
        <Link to="/projects" className="btn btn-primary">
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Project header */}
      <section className="bg-gradient-to-r from-primary-50 to-accent-50 py-12 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-neutral-700 hover:text-primary-600 mb-8"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            <span>Back</span>
          </motion.button>
          
          <motion.div 
            className="max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <span className="text-sm font-mono bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full text-neutral-500 border border-neutral-200">
                {new Date(project.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long' 
                })}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              {project.title}
            </h1>
            
            <p className="text-lg text-neutral-700">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured image */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="rounded-xl overflow-hidden shadow-workshop border border-neutral-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={project.featuredImage}
              alt={`${project.title} hero image`}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ReactMarkdown>
              {project.content}
            </ReactMarkdown>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <Link 
              to="/projects" 
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              <span>All Projects</span>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default ProjectDetailPage