
const Footer = () => {
  const developer = {
    github: 'https://github.com/Anotnio-Lu',
    linkedin: 'https://linkedin.com/in/username',
    thirdPlatform: 'https://thirdplatform.com/username',
  };


  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <a href={developer.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={developer.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={developer.thirdPlatform} target="_blank" rel="noopener noreferrer">
              Third Platform
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
