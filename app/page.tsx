export default function Home() {
  return (
    <div className="p.wrap">
      <header>
        <h1><a href="#home">{"<DevCoder/>"}</a></h1>
        <nav>
          <ul>
            <li><a href="#about">[About]</a></li>
            <li><a href="#projects">[Projects]</a></li>
            <li><a href="#skills">[Skills]</a></li>
            <li><a href="#contact">[Contact]</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <article id="about">
          <h2>&gt; About</h2>
          <p>
            Full-stack software developer based in USA, passionate about building efficient and scalable web applications. Experienced in JavaScript, TypeScript, and cloud technologies.
          </p>
          <p>
            <em>Status:</em> <em className="star">Online and ready to code!</em>
          </p>
        </article>

        <article id="projects">
          <h2>&gt; Projects</h2>
          <ul>
            <li>
              <h3>🧩 NextJS Full-Stack Project</h3>
              <p>Developed a comprehensive educational platform using Next.js 15, featuring user authentication, course management, and interactive learning modules. Integrated with a RESTful API backend for seamless data handling and real-time updates.</p>
            </li>
            <li>
              <h3>🚀 MERN Full-Stack Project</h3>
              <p>Created a robust e-commerce application with React frontend, Node.js/Express backend, and MongoDB database. Implemented features like user registration, product catalog, shopping cart, payment integration, and order management.</p>
            </li>
            <li>
              <h3>🔧 Developer Tools</h3>
              <p>Collection of productivity-enhancing tools for developers, including CLI utilities for code generation, VS Code extensions for improved workflow, and automation scripts for repetitive tasks.</p>
            </li>
          </ul>
        </article>

        <article id="skills">
          <h2>&gt; Skills</h2>
          <div>
            <h3>Languages:</h3>
            <ul>
              <li>JavaScript/TypeScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>Go</li>
            </ul>
          </div>
          <div>
            <h3>Technologies:</h3>
            <ul>
              <li>React/Next.js</li>
              <li>Node.js/Express</li>
              <li>PostgreSQL/MongoDB</li>
              <li>Docker/Kubernetes</li>
            </ul>
          </div>
        </article>

        <article id="contact">
          <h2>&gt; Contact</h2>
          <p>Let's connect!</p>
          <p>Email: <a href="mailto:devcoder.me@gmail.com">devcoder.me@gmail.com</a></p>
          <p>Bluesky: <a href="https://bsky.app/profile/devcoder.bsky.social" target="_blank" rel="noopener noreferrer">@devcoder</a></p>
          <p>Instagram: <a href="https://instagram.com/devcoder00" target="_blank" rel="noopener noreferrer">@devcoder00</a></p>
          <p>Threads: <a href="https://www.threads.com/@devcoder00" target="_blank" rel="noopener noreferrer">@devcoder00</a></p>
        </article>
      </main>

      <article>
        <p>Built by DevCoder</p>
        <p>&copy; {new Date().getFullYear()}</p>
      </article>
    </div>
  );
}
