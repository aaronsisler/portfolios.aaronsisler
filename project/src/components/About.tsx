import React from 'react';
import { User, Code, Globe, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code following industry best practices."
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-600" />,
      title: "Web Excellence",
      description: "Creating responsive, accessible, and performant web applications with modern frameworks."
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "API Design",
      description: "Building robust REST APIs with proper authentication, validation, and documentation."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <User className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">My Journey</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              With years of experience in web development, I've recently expanded my skillset by mastering 
              a new programming language that has opened up exciting possibilities for building more efficient 
              and scalable REST APIs.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I believe in continuous learning, clean architecture, and delivering solutions that make a 
              real difference. Whether it's crafting pixel-perfect user interfaces or designing robust 
              backend systems, I approach every project with attention to detail and a commitment to excellence.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'Python', 'REST APIs', 'Database Design'].map((tech) => (
                <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;