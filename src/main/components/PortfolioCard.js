const PortfolioCard = ({ title, description, image, githubLink, websiteLink }) => {
    return (
        <div className="project-card">
          <h2>{title}</h2>
          <img src={image} alt={title} />
          <p>{description}</p>
          <div className="project-links">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={websiteLink} target="_blank" rel="noopener noreferrer">Website: {title} </a>
          </div>
        </div>
      );
    };
 
export default PortfolioCard;