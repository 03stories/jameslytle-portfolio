import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Project, AboutContent, HomeContent } from './contentLoader'

// This file provides a real implementation of content loading
// It's not used in the current setup but shows how it would work
// in a real environment with file system access

const contentDirectory = path.join(process.cwd(), 'content')

export const getProjects = (): Project[] => {
  const projectsDirectory = path.join(contentDirectory, 'projects')
  const projectFolders = fs.readdirSync(projectsDirectory)
  
  const projects = projectFolders
    .filter(folder => !folder.startsWith('_') && 
      fs.statSync(path.join(projectsDirectory, folder)).isDirectory())
    .map(folder => {
      const projectPath = path.join(projectsDirectory, folder, 'project.md')
      
      if (!fs.existsSync(projectPath)) {
        return null
      }
      
      const fileContents = fs.readFileSync(projectPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        id: folder,
        title: data.title,
        date: data.date,
        description: data.description,
        featuredImage: data.featuredImage,
        content,
        slug: folder
      }
    })
    .filter((project): project is Project => project !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return projects
}

export const getProjectBySlug = (slug: string): Project | undefined => {
  const projectPath = path.join(contentDirectory, 'projects', slug, 'project.md')
  
  if (!fs.existsSync(projectPath)) {
    return undefined
  }
  
  const fileContents = fs.readFileSync(projectPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    id: slug,
    title: data.title,
    date: data.date,
    description: data.description,
    featuredImage: data.featuredImage,
    content,
    slug
  }
}

export const getAboutContent = (): AboutContent => {
  const aboutPath = path.join(contentDirectory, 'about', 'about.md')
  const fileContents = fs.readFileSync(aboutPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    title: data.title,
    content,
    image: data.image,
    resume: data.resume
  }
}

export const getHomeContent = (): HomeContent => {
  const homePath = path.join(contentDirectory, 'home', 'home.md')
  const fileContents = fs.readFileSync(homePath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    title: data.title,
    subtitle: data.subtitle,
    featuredProjects: data.featuredProjects || []
  }
}