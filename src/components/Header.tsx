import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-green-400/30 relative overflow-hidden"
    >
      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-20 w-6 h-6 bg-cyan-400/20 border border-cyan-400/40"
          animate={{ 
            rotate: [0, 360],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-2 left-1/3 w-4 h-4 bg-amber-400/20"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          animate={{ 
            y: [0, -5, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ 
                textShadow: [
                  '0 0 5px #22c55e',
                  '0 0 15px #22c55e',
                  '0 0 5px #22c55e'
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Terminal className="h-8 w-8 text-green-400" />
            </motion.div>
            <span className="font-mono text-green-400 text-lg tracking-wider">
              [PORTFOLIO.SYS]
            </span>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8 font-mono">
            <motion.a 
              href="#about" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors relative"
              whileHover={{ scale: 1.1 }}
            >
              &gt; ABOUT.EXE
            </motion.a>
            <motion.a 
              href="#projects" 
              className="text-amber-400 hover:text-amber-300 transition-colors relative"
              whileHover={{ scale: 1.1 }}
            >
              &gt; PROJECTS.DIR
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-green-400 hover:text-green-300 transition-colors relative"
              whileHover={{ scale: 1.1 }}
            >
              &gt; CONTACT.BAT
            </motion.a>
          </nav>
          
          <div className="flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="ghost" 
                size="icon" 
                asChild
                className="border border-green-400/30 hover:border-green-400 hover:bg-green-400/10 text-green-400"
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="ghost" 
                size="icon" 
                asChild
                className="border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10 text-cyan-400"
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="ghost" 
                size="icon" 
                asChild
                className="border border-amber-400/30 hover:border-amber-400 hover:bg-amber-400/10 text-amber-400"
              >
                <a href="mailto:your.email@example.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}