import React from 'react';
import { Code, Database, Globe, Server, Wrench, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js"],
      color: "blue"
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-emerald-600" />,
      skills: ["Node.js", "Express", "Go", "Python", "RESTful APIs", "GraphQL", "Microservices", "Docker"],
      color: "emerald"
    },
    {
      title: "Database & Storage",
      icon: <Database className="h-8 w-8 text-purple-600" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase", "AWS S3", "Database Design", "Query Optimization"],
      color: "purple"
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench className="h-8 w-8 text-orange-600" />,
      skills: ["Git", "GitHub Actions", "Docker", "AWS", "Nginx", "Linux", "CI/CD", "Monitoring"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-blue-200 bg-blue-50 hover:border-blue-300",
      emerald: "border-emerald-200 bg-emerald-50 hover:border-emerald-300",
      purple: "border-purple-200 bg-purple-50 hover:border-purple-300",
      orange: "border-orange-200 bg-orange-50 hover:border-orange-300"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`p-8 rounded-xl border-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${getColorClasses(category.color)}`}
            >
              <div className="flex items-center space-x-4 mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-slate-800">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 text-slate-700 font-medium text-center hover:shadow-md transition-shadow duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional highlights */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-3 rounded-full">
            <Zap className="h-5 w-5" />
            <span className="font-semibold">Always learning and exploring new technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;