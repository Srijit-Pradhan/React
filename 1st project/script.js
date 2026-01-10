// --- Components ---

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 120"
          width="200"
          height="120"
        >
          <text
            x="50%"
            y="55%"
            dy=".35em"
            font-family="systema, sans-serif"
            font-size="110"
            font-weight="400"
            text-anchor="middle"
            fill="#1c1c1c"
            letter-spacing="-2"
          >
            SP
          </text>
        </svg>
      </div>

      <ul className="nav-links">
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Services</li>
        <li>Blog</li>
      </ul>
      <div className="cta-btn">
        Book A Call <span>↗</span>
      </div>
    </nav>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar-left">
      <span className="rotated-text">web developer</span>
      <span className="year">2026</span>
    </div>
  );
};

const HeroContent = () => {
  return (
    <div className="hero-text">
      <div className="stats-row">
        <div className="stat-item">
          <h3>20+</h3>
          <p>Project completed</p>
        </div>
        <div className="stat-item">
          <h3>5+</h3>
          <p>Skills</p>
        </div>
      </div>

      <h1 className="big-title">Hello</h1>
      <p className="subtitle">— It's creating by simple react</p>

      <div className="scroll-down">
        Scroll down <span>↓</span>
      </div>
    </div>
  );
};

const HeroImage = () => {
  return (
    <div className="hero-image">
      <img src="./my image.jpeg" alt="Portrait" />
    </div>
  );
};

// --- Main App Component ---

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Sidebar />
        <HeroContent />
        <HeroImage />
      </main>
    </div>
  );
};

// --- Render ---
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
