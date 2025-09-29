export default function Home() {
  return (
    <div className="p.wrap">
      <header>
        <h1><a href="#">{"<DevCoder/>"}</a></h1>
        <nav>
          <ul>
            <li><a href="#about">[About]</a></li>
            <li><a href="#projects">[Projects]</a></li>
            <li><a href="#skills">[Skills]</a></li>
            <li><a href="#books">[Books]</a></li>
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
              <p>Developed a comprehensive educational platform using Next.js 15, featuring secure user authentication, course management, and interactive learning modules. Integrated with a RESTful API backend for seamless data handling and real-time updates, providing a dynamic and engaging learning experience.</p>
            </li>
            <li>
              <h3>🚀 MERN Full-Stack Project</h3>
              <p>Built a full-stack e-commerce application with a React frontend, Node.js/Express backend, and MongoDB database. Implemented key features including user registration, product catalog, shopping cart, secure payment integration, and order management, ensuring a smooth end-to-end shopping experience.</p>
            </li>
            <li>
              <h3>🐍 Django Python Flights</h3>
              <p>Developed a RESTful API for flight information retrieval and booking management using Django and Python. Designed endpoints for searching flights, booking tickets, and managing reservations, while ensuring scalability and clean API design.</p>
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

        <article id="books">
          <h2>&gt; Books</h2>
          <ul>
            <li>
              <h3>📚 Dune</h3>
              <p>A science fiction novel by Frank Herbert, set in a distant future amidst a huge interstellar empire, focusing on the young Paul Atreides.</p>
            </li>
            <li>
              <h3>📚 The Hitchhiker's Guide to the Galaxy</h3>
              <p>A comedic science fiction series by Douglas Adams, following the misadventures of Arthur Dent as he travels through space.</p>
            </li>
            <li>
              <h3>📚 Foundation</h3>
              <p>A science fiction series by Isaac Asimov, exploring the rise and fall of civilizations through the lens of psychohistory.</p>
            </li>
            <li>
              <h3>📚 The Martian</h3>
              <p>A hard science fiction novel by Andy Weir about an astronaut stranded on Mars who must use his engineering skills and scientific knowledge to survive.</p>
            </li>
          </ul>
        </article>

        <article id="contact">
          <h2>&gt; Contact</h2>
          <p>Let's connect!</p>
          <p>Email: <a href="mailto:devcoder.me@gmail.com">devcoder.me@gmail.com</a></p>
          <p>Bluesky: <a href="https://bsky.app/profile/devcoder.bsky.social" target="_blank" rel="noopener noreferrer">@devcoder</a></p>
        </article>
      </main>

      <article>
        <p>Built by DevCoder</p>
        <p>&copy; {new Date().getFullYear()}</p>
      </article>
    </div>
  );
}
