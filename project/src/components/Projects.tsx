import React, { useState } from 'react';
import { ExternalLink, Github, Globe, Server, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      type: "website",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management API",
      description: "RESTful API built with my newly learned language, featuring JWT authentication, CRUD operations, and comprehensive documentation.",
      type: "api",
      technologies: ["Go", "PostgreSQL", "JWT", "Docker"],
      documentation: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive maps, and responsive design.",
      type: "website",
      technologies: ["React", "TypeScript", "Weather API", "Tailwind"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "User Analytics API",
      description: "High-performance analytics API with real-time data processing, custom metrics, and detailed reporting endpoints.",
      type: "api",
      technologies: ["Go", "Redis", "MongoDB", "GraphQL"],
      documentation: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Modern portfolio website with smooth animations, responsive design, and optimized performance.",
      type: "website",
      technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "File Storage API",
      description: "Secure file storage and management API with encryption, version control, and flexible access permissions.",
      type: "api",
      technologies: ["Go", "AWS S3", "PostgreSQL", "Docker"],
      documentation: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: <Filter className="h-4 w-4" /> },
    { key: 'website', label: 'Websites', icon: <Globe className="h-4 w-4" /> },
    { key: 'api', label: 'REST APIs', icon: <Server className="h-4 w-4" /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my latest work in web development and API design
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100 shadow-md'
              }`}
            >
              {filter.icon}
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                project.featured ? 'ring-2 ring-blue-200' : ''
              }`}
            >
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                  <div className="flex items-center space-x-1">
                    {project.type === 'website' ? (
                      <Globe className="h-5 w-5 text-blue-600" />
                    ) : (
                      <Server className="h-5 w-5 text-emerald-600" />
                    )}
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    )}
                    {project.documentation && (
                      <a 
                        href={project.documentation}
                        className="flex items-center space-x-1 text-emerald-600 hover:text-emerald-700 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm font-medium">API Docs</span>
                      </a>
                    )}
                  </div>
                  
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      className="p-2 text-slate-500 hover:text-slate-700 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;