import { motion } from 'motion/react';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  index: number;
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  githubUrl, 
  liveUrl, 
  demoUrl,
  index 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <Card className="h-full overflow-hidden bg-black/60 backdrop-blur-sm border-green-400/30 hover:border-cyan-400/60 transition-all duration-300">
        <div className="relative group">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {demoUrl && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <Button asChild className="rounded-full bg-green-600/80 border border-green-400 text-black font-mono">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <Play className="h-4 w-4 mr-2" />
                  RUN_DEMO.EXE
                </a>
              </Button>
            </motion.div>
          )}
        </div>
        
        <CardHeader>
          <CardTitle className="flex items-center justify-between font-mono text-green-400">
            {title}
            <div className="flex space-x-2">
              {githubUrl && (
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="icon" asChild className="border border-green-400/30 hover:border-green-400 hover:bg-green-400/10 text-green-400">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              )}
              {liveUrl && (
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="icon" asChild className="border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10 text-cyan-400">
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              )}
            </div>
          </CardTitle>
          <CardDescription className="font-mono text-cyan-300 text-sm leading-relaxed">{description}</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, techIndex) => (
              <motion.div
                key={tech}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
              >
                <Badge className="text-xs bg-amber-400/20 border border-amber-400/40 text-amber-300 font-mono">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="pt-0">
          <div className="flex w-full gap-2">
            {demoUrl && (
              <Button asChild className="flex-1 bg-green-600/20 border border-green-400 text-green-400 hover:bg-green-600/30 font-mono">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <Play className="h-4 w-4 mr-2" />
                  ./demo.sh
                </a>
              </Button>
            )}
            {liveUrl && (
              <Button asChild variant="outline" className="flex-1 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-mono">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  ./deploy.exe
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}