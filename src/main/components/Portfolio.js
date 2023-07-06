import Project from './PortfolioCard';

const Portfolio = () => {
    const projects = [
        {
          title: 'Project 1: Horiseon',
          description: 'This is the description of Project 1.',
          image: 'First-Project-image.png',
          githubLink: 'https://github.com/Anotnio-Lu/Antonio-Lu-Portfolio/',
          websiteLink: 'https://anotnio-lu.github.io/convenient-marketing-data-processor/'
        },
        {
          title: 'Project 2: Random Password Generator',
          description: "This is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package. The application is designed to quickly and easily generate a high-quality README file for open source projects on GitHub. The README file includes important information about the app, such as its purpose, how to use it, how to install it, how to report issues, and how to make contributions.",
          image: 'Password Generator.png',
          githubLink: 'https://github.com/Anotnio-Lu/JavaScript-Challenge-Password-Generator',
          websiteLink: 'https://anotnio-lu.github.io/JavaScript-Challenge-Password-Generator/'
        },
        {
            title: 'Project 3: Text Editor - Progressive Web Application (PWA)',
            description: "Welcome to my text editor project! I have built a text editor that runs in the browser and meets the criteria of a Progressive Web Application (PWA). This application allows users to create notes or code snippets, with or without an internet connection, ensuring reliability and accessibility.",
            image: 'J.A.T.E.png',
            githubLink: 'https://github.com/Anotnio-Lu/Progressive-Web-Applications-PWA-Text-Editor',
            websiteLink: 'https://text-editor-pwa-app-ac346f5da575.herokuapp.com/'
        },
        {
            title: 'Project 4: RepairFind',
            description: 'RepairFind is a live web application designed to help motorists streamline the process to find mechanical assistance.',
            image: 'RepairFind.png',
            githubLink: 'https://github.com/Anotnio-Lu/RepairFind',
            websiteLink: 'https://anotnio-lu.github.io/RepairFind/'
        },
        {
            title: 'Project 5: Ebook Library',
            description: "The eBook Library project is a web application that allows users to browse and access a collection of eBooks. It provides a user-friendly interface for navigating through different sections of the library and managing a user's cart. The project is built using HTML, CSS, JavaScript, and utilizes the Bootstrap framework for responsive design.",
            image: 'Elibrary.png',
            githubLink: 'https://github.com/Saria995/team-9-project-2',
            websiteLink: 'https://team9-ebook-library.herokuapp.com/'
        },
        {
            title: 'Project 6',
            description: 'This is the description of Project 2.',
            image: 'project2.jpg',
            githubLink: 'https://github.com/username/repo2',
            websiteLink: ''
        },   
    ];

    return (
    <div className="portfolio">
        <h1>Portfolio</h1>
        <div className="projects">
        {projects.map((project, index) => (
            <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
            />
        ))}
        </div>
    </div>
    );
}
 
export default Portfolio;