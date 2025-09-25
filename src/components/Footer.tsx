import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal, Heart, Server } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-green-400/30 bg-black/80 backdrop-blur-sm relative overflow-hidden"
    >
      {/* Background floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-20 w-12 h-12 bg-gray-900/40 border border-cyan-400/30"
          style={{
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
          animate={{
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-40 w-8 h-8 bg-amber-400/20 border border-amber-400/40"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Matrix-style background effect */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
              backgroundSize: "30px 30px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                animate={{
                  textShadow: [
                    "0 0 5px #22c55e",
                    "0 0 15px #22c55e",
                    "0 0 5px #22c55e",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Terminal className="h-8 w-8 text-green-400" />
              </motion.div>
              <span className="font-mono text-green-400 text-lg tracking-wider">
                [SYSTEM.END]
              </span>
            </div>

            <div className="bg-black/60 border border-green-400/50 rounded-lg p-4 mb-6 font-mono">
              <div className="text-green-400 text-sm mb-2">
                &gt; cat about.txt
              </div>
              <p className="text-cyan-300 text-sm leading-relaxed">
                IT student passionate about creating
                <br />
                innovative solutions through technology.
                <br />
                <span className="text-amber-400">[STATUS]</span> Always
                learning, always building.
              </p>
            </div>

            <div className="flex space-x-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="border border-green-400/30 hover:border-green-400 hover:bg-green-400/10 text-green-400"
                >
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10 text-cyan-400"
                >
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="border border-amber-400/30 hover:border-amber-400 hover:bg-amber-400/10 text-amber-400"
                >
                  <a href="mailto:your.email@example.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-6 font-mono text-cyan-400 text-lg">
              &gt; NAVIGATION.DIR
            </h3>
            <div className="bg-black/60 border border-cyan-400/50 rounded-lg p-4 font-mono">
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#about"
                    className="text-green-300 hover:text-green-400 transition-colors flex items-center"
                  >
                    <span className="text-cyan-400 mr-2">&gt;</span> ./about.exe
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-green-300 hover:text-green-400 transition-colors flex items-center"
                  >
                    <span className="text-cyan-400 mr-2">&gt;</span>{" "}
                    ./projects.dir
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-green-300 hover:text-green-400 transition-colors flex items-center"
                  >
                    <span className="text-cyan-400 mr-2">&gt;</span>{" "}
                    ./contact.bat
                  </a>
                </li>
                <li>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="text-green-300 hover:text-green-400 transition-colors flex items-center"
                  >
                    <span className="text-cyan-400 mr-2">&gt;</span>{" "}
                    ./resume.pdf
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6 font-mono text-amber-400 text-lg">
              &gt; CONNECT.SYS
            </h3>
            <div className="bg-black/60 border border-amber-400/50 rounded-lg p-4 mb-6 font-mono">
              <div className="text-amber-400 text-sm mb-2">
                &gt; initialize_contact.exe
              </div>
              <p className="text-green-300 text-sm leading-relaxed mb-4">
                Interested in collaborating or have a<br />
                project in mind? Let's connect!
              </p>
              <div className="text-cyan-400 text-xs">
                [READY] Awaiting transmission...
              </div>
            </div>

            <Button
              asChild
              className="bg-amber-600/20 border border-amber-400 text-amber-400 hover:bg-amber-600/30 font-mono w-full"
            >
              <a href="mailto:your.email@example.com">
                <Mail className="h-4 w-4 mr-2" />
                ./send_message.sh
              </a>
            </Button>
          </motion.div>
        </div>

        <Separator className="my-8 bg-green-400/30" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-black/60 border border-green-400/30 rounded-lg p-4 font-mono"
        >
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <div className="text-green-400 mb-4 md:mb-0">
              © 2025 Your_Name.exe | All_Rights_Reserved.sys
            </div>
            <div className="flex items-center space-x-2 text-cyan-300">
              <Server className="h-4 w-4" />
              <span>Built with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  color: ["#ef4444", "#f59e0b", "#ef4444"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="h-4 w-4 fill-current" />
              </motion.div>
              <span>using React.js && Tailwind.css</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
