const resumeUrl = 'http://localhost:3000//logo192.png';


const Resume = () => {
    const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL'];

    const downloadFile = (url) => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      }
      
     
  
    return (
    <div className="resume">
        <h1>Resume</h1>
        <p>
            Click the button below to download resume
        </p>
        <p>
          <button className="download-button" onClick={() => { downloadFile(resumeUrl) }}>Download Resume</button>
        </p>
        <h3>Proficiencies</h3>
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
    );
  };
 
export default Resume;