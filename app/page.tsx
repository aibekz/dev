export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f23] text-[#cccccc] font-mono text-sm leading-relaxed">
      <div className="max-w-5xl mx-auto p-6 lg:p-8">
        <header className="mb-12">
          <div className="border-b border-[#333] pb-6">
            <div className="flex items-center gap-4 mb-6">
              <div>
                <h1 className="terminal-green text-5xl font-bold mb-2">{"<"}</h1>
                <h1 className="terminal-green text-2xl lg:text-3xl font-bold mb-2">
                  devcoder
                </h1>
                <p className="terminal-green text-lg mb-4">
                  Software Engineer | Problem Solver | Coderpreneur 
                </p>
                <nav className="flex flex-wrap gap-6">
                  <a 
                    href="#about" 
                    className="terminal-green hover:text-[#99ff99] transition-colors duration-150 text-base decoration-transparent hover:decoration-current"
                  >
                    [About]
                  </a>
                  <a 
                    href="#projects" 
                    className="terminal-green hover:text-[#99ff99] transition-colors duration-150 text-base decoration-transparent hover:decoration-current"
                  >
                    [Projects]
                  </a>
                  <a 
                    href="#skills" 
                    className="terminal-green hover:text-[#99ff99] transition-colors duration-150 text-base decoration-transparent hover:decoration-current"
                  >
                    [Skills]
                  </a>
                  <a 
                    href="#contact" 
                    className="terminal-green hover:text-[#99ff99] transition-colors duration-150 text-base decoration-transparent hover:decoration-current"
                  >
                    [Contact]
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="space-y-12">
          <section id="about">
            <h2 className="terminal-yellow text-xl mb-6 flex items-center gap-2">
              <span className="terminal-gold">{'>'}</span>
              <span className="terminal-gold">About</span>
            </h2>
            <div className="code-block bg-[#1a1a2e] border border-[#333] rounded-lg p-6">
              <p className="mb-4 text-base leading-relaxed">
                Welcome to my digital workspace! I'm a passionate software engineer
                based in the USA who loves solving complex problems and building innovative solutions.
              </p>
              <p className="mb-4 text-base leading-relaxed">
                <span className="highlight terminal-blue font-semibold">Specialties:</span> Full-stack development,
                algorithms, system design, and creating elegant code solutions.
              </p>
              <p className="text-base">
                <span className="highlight terminal-red font-semibold">Status:</span> 
                <span className="terminal-green"> Online and ready to code!</span>
              </p>
            </div>
          </section>

          <section id="projects">
            <h2 className="terminal-yellow text-xl mb-6 flex items-center gap-2">
              <span className="terminal-gold">{'>'}</span>
              <span className="terminal-gold">Projects</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="code-block bg-[#1a1a2e] border border-[#333] rounded-lg p-6 hover:border-[#555] transition-colors">
                <h3 className="terminal-blue mb-3 text-lg font-semibold">🧩 Algorithm Solutions</h3>
                <p className="mb-4 text-sm leading-relaxed">
                  Collection of algorithmic solutions and coding challenges
                </p>
                <p className="terminal-green text-xs">
                  Language: Python, JavaScript, TypeScript
                </p>
              </div>
              
              <div className="code-block bg-[#1a1a2e] border border-[#333] rounded-lg p-6 hover:border-[#555] transition-colors">
                <h3 className="terminal-blue mb-3 text-lg font-semibold">🚀 Full-Stack Applications</h3>
                <p className="mb-4 text-sm leading-relaxed">
                  Modern web applications built with cutting-edge technologies
                </p>
                <p className="terminal-green text-xs">
                  Stack: React, Next.js, Node.js, PostgreSQL
                </p>
              </div>
              
              <div className="code-block bg-[#1a1a2e] border border-[#333] rounded-lg p-6 hover:border-[#555] transition-colors md:col-span-2 lg:col-span-1">
                <h3 className="terminal-blue mb-3 text-lg font-semibold">🔧 Developer Tools</h3>
                <p className="mb-4 text-sm leading-relaxed">
                  Productivity tools and utilities for fellow developers
                </p>
                <p className="terminal-green text-xs">
                  Tools: CLI utilities, VS Code extensions, automation scripts
                </p>
              </div>
            </div>
          </section>

          <section id="skills">
            <h2 className="terminal-yellow text-xl mb-6 flex items-center gap-2">
              <span className="terminal-gold">{'>'}</span>
              <span className="terminal-gold">Skills</span>
            </h2>
            <div className="code-block bg-[#1a1a2e] border border-[#333] rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="terminal-blue mb-4 text-lg font-semibold">Languages:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="terminal-green flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      JavaScript/TypeScript
                    </li>
                    <li className="terminal-green flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Python
                    </li>
                    <li className="terminal-green flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Java
                    </li>
                    <li className="terminal-green flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Go
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="terminal-blue mb-4 text-lg font-semibold">Technologies:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="terminal-green flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      React/Next.js
                    </li>
                    <li className="terminal-green flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Node.js/Express
                    </li>
                    <li className="terminal-green flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      PostgreSQL/MongoDB
                    </li>
                    <li className="terminal-green flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Docker/Kubernetes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="contact">
            <h2 className="terminal-yellow text-xl mb-6 flex items-center gap-2">
              <span className="terminal-gold">{'>'}</span>
              <span className="terminal-gold">Contact</span>
            </h2>
            <div className="code-block bg-[#1a1a2e] border border-[#333] rounded-lg p-6">
              <p className="mb-6 text-base leading-relaxed">
                Let's connect!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="terminal-blue font-semibold min-w-[80px]">Email:</span> 
                  <a href="mailto:devcoder.me@gmail.com" className="hover:text-yellow-400 transition-colors underline">
                    devcoder.me@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="terminal-blue font-semibold min-w-[80px]">Instagram:</span> 
                  <a href="https://instagram.com/devcoder00" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors underline">
                    @devcoder00
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="terminal-blue font-semibold min-w-[80px]">Threads:</span> 
                  <a href="https://www.threads.com/@devcoder00" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors underline">
                    @devcoder00
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[#333]">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="terminal-green text-5xl font-bold">{"<"}</h1>
            <div className="terminal-green text-2xl font-bold">devcoder</div>
            <div className="space-y-2">
              <p className="terminal-green text-sm">
                © 2025 devcoder | Built with ❤️ and lots of ☕️
              </p>
              <p className="terminal-yellow text-sm">
                {'{'} Happy Coding! {'}'}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
