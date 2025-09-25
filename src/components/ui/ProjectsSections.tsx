import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import { Folder, Terminal } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Web App",
    description: "Full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1742072594003-abf6ca86e154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzU4NzI4MzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/ecommerce-app",
    liveUrl: "https://your-ecommerce-demo.com",
    demoUrl: "https://your-ecommerce-demo.com/demo"
  },
  {
    title: "Task Management Mobile App",
    description: "Cross-platform mobile application built with React Native. Includes offline sync, push notifications, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1640694514279-090bb1b09ee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU4NzQxMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux", "Expo"],
    githubUrl: "https://github.com/yourusername/task-manager",
    demoUrl: "https://expo.dev/@yourusername/task-manager"
  },
  {
    title: "Data Analytics Dashboard",
    description: "Real-time analytics dashboard for business intelligence. Features interactive charts, data filtering, and automated reporting capabilities.",
    image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHNlcnZlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4NjkzMDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/yourusername/analytics-dashboard",
    liveUrl: "https://your-analytics-demo.com",
    demoUrl: "https://your-analytics-demo.com/dashboard"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Background floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 left-10 w-20 h-20 bg-gray-900/30 border border-green-400/20"
          style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-60 right-20 w-16 h-16 bg-black/40 border border-cyan-400/30"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-40 right-1/4 w-24 h-24 bg-gray-800/20 border-2 border-amber-400/20"
          animate={{ 
            rotate: [0, -360],
            x: [0, 40, 0]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Terminal grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <div className="bg-black/60 border border-green-400/50 rounded-lg p-4 font-mono">
              <div className="flex items-center space-x-2 mb-2">
                <Terminal className="h-5 w-5 text-green-400" />
                <span className="text-green-400">projects@portfolio:~$</span>
              </div>
              <div className="text-left">
                <span className="text-cyan-400">ls -la /projects/</span><br/>
                <span className="text-amber-400">drwxr-xr-x 3 dev dev 4096 Sep 25 2025 .</span><br/>
                <span className="text-green-300">total 3 directories found</span>
              </div>
            </div>
          </motion.div>
          
          <motion.h2 
            className="mb-6 font-mono text-4xl text-green-400"
            animate={{ 
              textShadow: [
                '0 0 5px #22c55e',
                '0 0 15px #22c55e',
                '0 0 5px #22c55e'
              ]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            &gt; FEATURED_PROJECTS.DIR
          </motion.h2>
          <p className="text-cyan-300 max-w-2xl mx-auto font-mono leading-relaxed">
            <span className="text-amber-400">[INFO]</span> Displaying latest builds from development workspace.<br/>
            <span className="text-green-400">[STATUS]</span> All systems operational. Ready for deployment.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-black/60 border border-cyan-400/50 rounded-lg p-6 max-w-lg mx-auto font-mono">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Folder className="h-5 w-5 text-cyan-400" />
              <span className="text-cyan-400">REPOSITORY_ACCESS.EXE</span>
            </div>
            <p className="text-green-300 mb-4">
              &gt; Access full project repository?
            </p>
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600/20 border border-green-400 text-green-400 px-6 py-3 rounded hover:bg-green-600/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>./github --browse-all</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-amber-400"
              >
                &gt;&gt;
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}