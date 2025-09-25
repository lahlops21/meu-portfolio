import { motion } from "framer-motion";
import { ArrowDown, Terminal, Code, Cpu, Database } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gray-900/30 border border-green-500/20"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gray-800/40 border border-cyan-400/30"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-black/20 border-2 border-amber-500/20"
          style={{
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
          animate={{
            rotate: [0, -360],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute top-1/3 right-10 w-20 h-20 bg-gray-900/50 border border-green-400/40"
          style={{ borderRadius: "50% 20% 50% 20%" }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              className="flex items-center justify-center space-x-3 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Terminal className="h-8 w-8 text-green-400" />
              <span className="font-mono text-green-400 text-lg tracking-wider">
                &gt; IT_STUDENT.EXE --DEVELOPER
              </span>
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h1 className="font-mono text-6xl md:text-8xl leading-tight mb-4">
                <motion.span
                  className="block text-amber-400"
                  animate={{
                    textShadow: [
                      "0 0 5px #fbbf24",
                      "0 0 20px #fbbf24",
                      "0 0 5px #fbbf24",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  SYSTEM
                </motion.span>
                <motion.span
                  className="block text-cyan-400"
                  animate={{
                    textShadow: [
                      "0 0 5px #22d3ee",
                      "0 0 20px #22d3ee",
                      "0 0 5px #22d3ee",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  ONLINE
                </motion.span>
              </h1>
            </motion.div>

            <motion.div
              className="mb-8 font-mono"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="bg-black/60 border border-green-400/50 rounded-lg p-6 text-left max-w-2xl mx-auto">
                <div className="flex items-center mb-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="ml-4 text-green-400">
                    terminal@portfolio:~$
                  </span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 2 }}
                  className="overflow-hidden"
                >
                  <p className="text-green-300 leading-relaxed">
                    <span className="text-cyan-400">user@developer:~$</span>{" "}
                    whoami
                    <br />
                    <span className="text-white">
                      Passionate IT student crafting innovative solutions
                    </span>
                    <br />
                    <span className="text-cyan-400">user@developer:~$</span> cat
                    skills.txt
                    <br />
                    <span className="text-amber-300">
                      Web Development | Mobile Apps | Emerging Tech
                    </span>
                    <br />
                    <span className="text-green-400">
                      user@developer:~$
                    </span>{" "}
                    <span className="animate-pulse">_</span>
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-black font-mono px-8 py-4 text-lg border border-green-400"
              >
                <a href="#projects">
                  <Code className="mr-2 h-5 w-5" />
                  ./view_projects.sh
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-mono px-8 py-4 text-lg"
              >
                <a href="#contact">
                  <Database className="mr-2 h-5 w-5" />
                  ./contact.exe
                </a>
              </Button>
            </motion.div>

            {/* Tech icons floating */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute top-1/4 left-1/4"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 0,
                }}
              >
                <Cpu className="h-8 w-8 text-green-400/50" />
              </motion.div>

              <motion.div
                className="absolute top-1/3 right-1/4"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 1,
                }}
              >
                <Code className="h-10 w-10 text-cyan-400/50" />
              </motion.div>

              <motion.div
                className="absolute bottom-1/3 left-1/3"
                animate={{
                  y: [0, -25, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: 2,
                }}
              >
                <Database className="h-6 w-6 text-amber-400/50" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-green-400" />
        </motion.div>
      </div>
    </section>
  );
}
