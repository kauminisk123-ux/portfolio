import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">🚀 Welcome to my digital space</div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Kaumini Samodhi Kapuliyadda</span>
          </h1>
          
          <div className="hero-roles">
            <span className="role-tag">✨ 2nd Year ICT Undergraduate</span>
            <span className="role-tag">💻 Full Stack Developer</span>
            <span className="role-tag">🎯 DevOps Enthusiast</span>
          </div>

          <p className="hero-description">
            Turning coffee into code ☕ | Breaking things and fixing them 🔧
            <br />
            Physics + ICT = The unusual mix that makes me think like an engineer 
            and build like a developer
          </p>

          {/* Real Technology Logos */}
          <div className="tech-stack">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
              alt="React" 
              className="tech-logo"
            />
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
              alt="Node.js" 
              className="tech-logo"
            />
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" 
              alt="Express" 
              className="tech-logo"
            />
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
              alt="MongoDB" 
              className="tech-logo"
            />
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
              alt="Java" 
              className="tech-logo"
            />
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
              alt="Python" 
              className="tech-logo"
            />
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
              alt="Git" 
              className="tech-logo"
            />
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
              alt="Docker" 
              className="tech-logo"
            />
          </div>

          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary">📁 Explore My Work</Link>
            <Link to="/about" className="btn-secondary">👤 About Me</Link>
            <Link to="/admin" className="btn-admin">⚙️ Admin</Link>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Years Learning</span>
            </div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Lines of Code</span>
            </div>
            <div className="stat">
              <span className="stat-number">🚀</span>
              <span className="stat-label">Always Learning</span>
            </div>
          </div>

          {/* Social Links with Real Logos */}
          <div className="social-links">
            <a href="https://github.com/kauminisk123-ux" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                alt="GitHub" 
              />
            </a>
            <a href="https://www.linkedin.com/in/kaumini-samodhi-kapuliyadda-235101317" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                alt="LinkedIn" 
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;