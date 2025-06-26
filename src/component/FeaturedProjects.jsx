import { FaSearch } from "react-icons/fa";
const projects = [
  {
    title: "Blue Ocean Residency Zanzibar",
    type: "Residential",
    image: "./110-resi-landing.jpg",
  },
  {
    title: "Champwani Island Zanzibar",
    type: "Residential",
    image: "./project-landing.jpg",
    highlight: true,
  },
  {
    title: "Old Town Market, Darajani",
    type: "Civil",
    image: "./project-landing-2.jpg",
  },
  {
    title: "Africab Business Park",
    type: "Commercial",
    image: "./icon-project-landing.jpg",
  },
];

export const FeaturedProjects = () => {
  return (
    <>
    <section>
      <div className="featured-projects container py-5 ">
        <h2 className="display-1 responsive-heading position-relative text-start" style={{ color: "#f0f0f0", fontWeight: 700,fontSize:"10rem", }}>featured projects
              <span className="position-absolute" style={{ top: '80%', left: 0, transform: 'translateY(-50%)', color: '#000', fontSize: '2rem', fontWeight: 600 }}>Completion of projects in a time frame, Continuous human resources<br/>
              development, and a strong commitment to client satisfaction.</span>
            </h2>
           

            <div className="d-flex justify-content-center align-items-center mt-5 flex-wrap gap-1">
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  className={`project-card position-relative ${
                    proj.highlight ? "highlight" : ""
                  }`}
                  style={{
                    backgroundImage: `url(${proj.image})`,
                  }}
                >
                  {idx === 0 && (
                    <div className="nav-arrow left">&#10229; <br/>PREV</div>
                  )}
                  <div className="project-type text-uppercase">{proj.type}</div>
                  {proj.highlight && (
                    <div className="highlight-overlay d-flex justify-content-center align-items-center">
                      <FaSearch color="white" size={20} /> 
                    </div>
                  )}
                  <div className="project-title fw-bold">
                    {proj.title}
                  </div>
                  {idx === projects.length - 1 && (
                    <div className="nav-arrow right">NEXT<br/> &#10230;</div>
                  )}
                </div>
              ))}
            </div>
          </div>
      </section>
    </>
  )
}
