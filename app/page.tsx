export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f23] text-[#cccccc] font-mono text-sm leading-relaxed">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header with ASCII art */}
        <header className="mb-8">
          <pre className="terminal-green text-xs mb-4 overflow-x-auto">
{`    ____  ________   ____________  ____  __________
   / __ \\/ ____/ | / / ____/ __ \\/ __ \\/ ____/ __ \\
  / / / / __/  | |/ / /   / / / / / / / __/ / /_/ /
 / /_/ / /___  |   / /___/ /_/ / /_/ / /___/ _, _/ 
/_____/_____/  |__/\\____/\\____/_____/_____/_/ |_|  
                                                   `}
          </pre>
          <div className="border-b border-[#333] pb-4">
            <h1 className="terminal-yellow text-2xl font-bold mb-2">
              {'<'} <span className="terminal-green">DevCoder</span> {'/>'}
            </h1>
            <p className="terminal-green">
              Software Engineer | Problem Solver | Code Enthusiast
            </p>
          </div>
        </header>

        {/* Main content */}
        <main>
          <section className="mb-8">
            <h2 className="terminal-yellow text-lg mb-4">
              --- <span className="terminal-gold">About</span> ---
            </h2>
            <div className="code-block">
              <p className="mb-3">
                Welcome to my digital workspace! I'm a passionate software engineer
                based in the USA who loves solving complex problems and building innovative solutions.
              </p>
              <p className="mb-3">
                <span className="highlight terminal-blue">Specialties:</span> Full-stack development,
                algorithms, system design, and creating elegant code solutions.
              </p>
              <p>
                <span className="highlight terminal-red">Status:</span> 
                <span className="terminal-green"> Online and ready to code!</span>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="terminal-yellow text-lg mb-4">
              --- <span className="terminal-gold">Projects</span> ---
            </h2>
            <div className="space-y-4">
              <div className="code-block">
                <h3 className="terminal-blue mb-2">🎄 Advent of Code Solutions</h3>
                <p className="mb-2">
                  Collection of algorithmic solutions for AoC challenges
                </p>
                <p className="terminal-green text-xs">
                  Language: Python, JavaScript, TypeScript
                </p>
              </div>
              
              <div className="code-block">
                <h3 className="terminal-blue mb-2">🚀 Full-Stack Applications</h3>
                <p className="mb-2">
                  Modern web applications built with cutting-edge technologies
                </p>
                <p className="terminal-green text-xs">
                  Stack: React, Next.js, Node.js, PostgreSQL
                </p>
              </div>
              
              <div className="code-block">
                <h3 className="terminal-blue mb-2">🔧 Developer Tools</h3>
                <p className="mb-2">
                  Productivity tools and utilities for fellow developers
                </p>
                <p className="terminal-green text-xs">
                  Tools: CLI utilities, VS Code extensions, automation scripts
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="terminal-yellow text-lg mb-4">
              --- <span className="terminal-gold">Skills</span> ---
            </h2>
            <div className="code-block">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="terminal-blue mb-2">Languages:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="terminal-green">• JavaScript/TypeScript</li>
                    <li className="terminal-green">• Python</li>
                    <li className="terminal-green">• Java</li>
                    <li className="terminal-green">• Go</li>
                  </ul>
                </div>
                <div>
                  <h4 className="terminal-blue mb-2">Technologies:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="terminal-green">• React/Next.js</li>
                    <li className="terminal-green">• Node.js/Express</li>
                    <li className="terminal-green">• PostgreSQL/MongoDB</li>
                    <li className="terminal-green">• Docker/Kubernetes</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="terminal-yellow text-lg mb-4">
              --- <span className="terminal-gold">Contact</span> ---
            </h2>
            <div className="code-block">
              <p className="mb-3">
                Ready to collaborate on your next project? Let's build something amazing together!
              </p>
              <div className="space-y-2">
                <p>
                  <span className="terminal-blue">Email:</span> 
                  <a href="mailto:devcoder.me@gmail.com" className="ml-2 hover:text-yellow-400">
                    devcoder.me@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-[#333] text-center">
          <p className="terminal-green text-xs">
            © 2025 DevCoder | Built with ❤️ and lots of ☕
          </p>
          <p className="terminal-yellow text-xs mt-2">
            {'{'} Happy Coding! {'}'}
          </p>
        </footer>
      </div>
    </div>
  );
}
