export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-none sm:max-w-[45em] lg:max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
      {/* Header - Fully responsive */}
      <header className="w-full pt-4 pb-6 sm:pb-8 lg:pb-12 border-b border-transparent">
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-start sm:justify-between lg:items-center">
          {/* Logo/Title */}
          <h1 className="flex-shrink-0">
            <a 
              href="#" 
              className="text-lg sm:text-xl lg:text-2xl font-normal inline-block"
            >
              {"<DevCoder/>"}
            </a>
          </h1>
          
          {/* Navigation */}
          <nav className="flex-shrink-0 sm:ml-4 lg:ml-8">
            <ul className="flex flex-wrap gap-x-1 gap-y-2 sm:gap-x-2 lg:gap-x-4 text-sm sm:text-base">
              <li><a href="#about" className="hover:text-green-400 transition-colors">[About]</a></li>
              <li><a href="#projects" className="hover:text-green-400 transition-colors">[Projects]</a></li>
              <li><a href="#skills" className="hover:text-green-400 transition-colors">[Skills]</a></li>
              <li><a href="#books" className="hover:text-green-400 transition-colors">[Books]</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">[Contact]</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full space-y-6 sm:space-y-8 lg:space-y-12 py-4 sm:py-6 lg:py-8">
        
        {/* About Section */}
        <article id="about" className="w-full">
          <h2 className="text-white text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 font-normal">&gt; About</h2>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-none break-words">
              Full-stack software developer based in USA, passionate about building efficient and scalable web applications. 
              Experienced in JavaScript, TypeScript, and cloud technologies.
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              <em className="text-white">Status:</em> <em className="star text-yellow-300">Online and ready to code!</em>
            </p>
          </div>
        </article>

        {/* Projects Section */}
        <article id="projects" className="w-full">
          <h2 className="text-white text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 font-normal">&gt; Projects</h2>
          <ul className="space-y-4 sm:space-y-6 lg:space-y-8">
            <li className="w-full">
              <h3 className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 break-words font-normal">
                🧩 NextJS Full-Stack Project
              </h3>
              <p className="text-sm sm:text-base leading-relaxed max-w-none break-words pl-0 sm:pl-4 lg:pl-6">
                Developed a comprehensive educational platform using Next.js 15, featuring secure user authentication, 
                course management, and interactive learning modules. Integrated with a RESTful API backend for seamless 
                data handling and real-time updates, providing a dynamic and engaging learning experience.
              </p>
            </li>
            <li className="w-full">
              <h3 className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 break-words font-normal">
                🚀 MERN Full-Stack Project
              </h3>
              <p className="text-sm sm:text-base leading-relaxed max-w-none break-words pl-0 sm:pl-4 lg:pl-6">
                Built a full-stack e-commerce application with a React frontend, Node.js/Express backend, and MongoDB database. 
                Implemented key features including user registration, product catalog, shopping cart, secure payment integration, 
                and order management, ensuring a smooth end-to-end shopping experience.
              </p>
            </li>
            <li className="w-full">
              <h3 className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 break-words font-normal">
                🐍 Django Python Flights
              </h3>
              <p className="text-sm sm:text-base leading-relaxed max-w-none break-words pl-0 sm:pl-4 lg:pl-6">
                Developed a RESTful API for flight information retrieval and booking management using Django and Python. 
                Designed endpoints for searching flights, booking tickets, and managing reservations, while ensuring 
                scalability and clean API design.
              </p>
            </li>
          </ul>
        </article>

        {/* Skills Section */}
        <article id="skills" className="w-full">
          <h2 className="text-white text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 font-normal">&gt; Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="w-full">
              <h3 className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 font-normal">Languages:</h3>
              <ul className="custom-list space-y-1 sm:space-y-2 text-sm sm:text-base pl-6">
                <li>JavaScript/TypeScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>Go</li>
              </ul>
            </div>
            <div className="w-full">
              <h3 className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 font-normal">Technologies:</h3>
              <ul className="custom-list space-y-1 sm:space-y-2 text-sm sm:text-base pl-6">
                <li>React/Next.js</li>
                <li>Node.js/Express</li>
                <li>PostgreSQL/MongoDB</li>
                <li>Docker/Kubernetes</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Books Section */}
        <article id="books" className="w-full">
          <h2 className="text-white text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 font-normal">&gt; Books</h2>
          <ul className="space-y-4 sm:space-y-6">
            <li className="w-full">
              <h3 className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 break-words font-normal">📚 Dune</h3>
              <p className="text-sm sm:text-base leading-relaxed max-w-none break-words pl-0 sm:pl-4 lg:pl-6">
                A science fiction novel by Frank Herbert, set in a distant future amidst a huge interstellar empire, 
                focusing on the young Paul Atreides.
              </p>
            </li>
            <li className="w-full">
              <h3 className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 break-words font-normal">📚 The Hitchhiker's Guide to the Galaxy</h3>
              <p className="text-sm sm:text-base leading-relaxed max-w-none break-words pl-0 sm:pl-4 lg:pl-6">
                A comedic science fiction series by Douglas Adams, following the misadventures of Arthur Dent as he travels through space.
              </p>
            </li>
            <li className="w-full">
              <h3 className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 break-words font-normal">📚 Foundation</h3>
              <p className="text-sm sm:text-base leading-relaxed max-w-none break-words pl-0 sm:pl-4 lg:pl-6">
                A science fiction series by Isaac Asimov, exploring the rise and fall of civilizations through the lens of psychohistory.
              </p>
            </li>
            <li className="w-full">
              <h3 className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 break-words font-normal">📚 The Martian</h3>
              <p className="text-sm sm:text-base leading-relaxed max-w-none break-words pl-0 sm:pl-4 lg:pl-6">
                A hard science fiction novel by Andy Weir about an astronaut stranded on Mars who must use his engineering skills and scientific knowledge to survive.
              </p>
            </li>
          </ul>
        </article>

        {/* Contact Section */}
        <article id="contact" className="w-full">
          <h2 className="text-white text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 font-normal">&gt; Contact</h2>
          <div className="space-y-2 sm:space-y-3">
            <p className="text-sm sm:text-base lg:text-lg">Let's connect!</p>
            <p className="text-sm sm:text-base break-all">
              Email: <a href="mailto:devcoder.me@gmail.com" className="hover:text-green-400 transition-colors">devcoder.me@gmail.com</a>
            </p>
            <p className="text-sm sm:text-base break-words">
              Bluesky: <a 
                href="https://bsky.app/profile/devcoder.bsky.social" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                @devcoder
              </a>
            </p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-600/30 pt-4 sm:pt-6 mt-8 sm:mt-12 pb-6 sm:pb-8">
        <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm lg:text-base opacity-70">
          <p>Built by DevCoder {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
