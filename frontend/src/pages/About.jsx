import './About.css';

function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <h1>About Me</h1>
          <div className="header-underline"></div>
          <p className="about-tagline">✨ The unusual mix that makes me who I am</p>
        </div>

        {/* Grid: Profile + Skills */}
        <div className="about-grid">
          
          <div className="about-card profile-card">
            <div className="avatar-container">
              <video 
                src="public/avatar.mp4"
                className="avatar-video"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="avatar-glow"></div>
            </div>
            <h3>Kaumini Samodhi Kapuliyadda</h3>
            <p className="profile-title">2nd Year ICT Undergraduate</p>
            <div className="about-personal">
              <p>🎓 University of Sri Jayewardenepura</p>
              <p>📍 Sri Lanka</p>
              <p>💡 Web Development Enthusiast</p>
              <p>🌱 Still learning. Still growing.</p>
            </div>
          </div>

          {/* Right - Skills */}
          <div className="about-card">
            <h3>⚡ Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                <span>React.js</span>
                <div className="skill-bar"><div className="skill-progress" style={{width: '50%'}}></div></div>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                <span>Node.js</span>
                <div className="skill-bar"><div className="skill-progress" style={{width: '45%'}}></div></div>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                <span>Java</span>
                <div className="skill-bar"><div className="skill-progress" style={{width: '70%'}}></div></div>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                <span>Python</span>
                <div className="skill-bar"><div className="skill-progress" style={{width: '40%'}}></div></div>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                <span>MongoDB</span>
                <div className="skill-bar"><div className="skill-progress" style={{width: '40%'}}></div></div>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                <span>Git & DevOps</span>
                <div className="skill-bar"><div className="skill-progress" style={{width: '45%'}}></div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="interests-section">
          <h3>🎯 Areas of Interest</h3>
          <div className="interests-grid">
            <div className="interest-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              <span>Frontend</span>
            </div>
            <div className="interest-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
              <span>Backend</span>
            </div>
            <div className="interest-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
              <span>Database</span>
            </div>
            <div className="interest-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
              <span>Container</span>
            </div>
            <div className="interest-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
              <span>CI/CD</span>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="about-quote">
          💡 "The bug was in my code all along — and so was the solution."
        </div>

        {/* Contact Section - All Real Logos */}
        <div className="contact-section">
          <h3>Let's Connect</h3>
          <p className="contact-subtitle">Reach out to me through any of these platforms</p>
          <div className="contact-grid">
            <a href="mailto:kaumini@example.com" className="contact-item" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" 
                alt="Email" 
                className="contact-icon"
              />
              <span>Email</span>
            </a>
            
            <a href="https://github.com/kauminisk123-ux" className="contact-item" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                alt="GitHub" 
                className="contact-icon"
              />
              <span>GitHub</span>
            </a>
            
            <a href="https://www.linkedin.com/in/kaumini-samodhi-kapuliyadda-235101317" className="contact-item" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                alt="LinkedIn" 
                className="contact-icon"
              />
              <span>LinkedIn</span>
            </a>
            
            <div className="contact-item">
              <img 
                src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/map-marker.svg" 
                alt="Location" 
                className="contact-icon location-icon"
                />
              <span>Sri Lanka</span>
            </div>
          </div>
          
          <div className="status-badge-wrapper">
            <span className="status-badge">🚀 Open to internships & collaborations</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;