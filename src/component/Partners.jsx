import hma from "../assets/hma-arch-logo.png";
import gazelle from "../assets/gazalle-logo.png";
import project from "../assets/proj-desi-sol-logo.png";
import woodpecker from "../assets/woodpecker-inv-logo.png";
import lucky from "../assets/lucky-cement-logo.png";

export const Partners = () => {
  return (
    <>
    <section>
         <div className="container text-center my-5">
            <h2 className="fw-bold mb-4">Manufacturing &amp; Fabrication Partners</h2>
            <div className="row justify-content-center align-items-center">
              {[hma, gazelle, project, woodpecker, lucky].map((logo, index) => (
                <div className="col-6 col-sm-4 col-md-2 mx-3 my-2" key={index}>
                  <img src={logo} alt={`Partner ${index + 1}`} className="partner-logo" />
                </div>
              ))}
            </div>
          </div>
       </section>
    </>
  )
}
