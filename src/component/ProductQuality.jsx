import Residential from "../assets/residential.png";
import Commercial from "../assets/commercial.png";
import Industrial from "../assets/industrial-park.png";
import Civil from "../assets/civil.png";

export const ProductQuality = () => {
  return (
    <>
    <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-4">
            <h2 className="fw-bold text-orange" style={{ fontSize:"3rem",color:"#f65000"}}>No compromise<br />on product quality.</h2>
          </div>
          <div className="col-md-8">
            <div className="row text-center">
              <div className="col-3 border-end">
                <img src={Residential} alt="Residential" className="mb-2" height="60" />
                <p className="fw-semibold mb-0">Residential<br />Projects</p>
              </div>
              <div className="col-3 border-end">
                <img src={Commercial} alt="Commercial" className="mb-2" height="60" />
                <p className="fw-semibold mb-0">Commercial<br />Projects</p>
              </div>
              <div className="col-3 border-end">
                <img src={Industrial} alt="Industrial" className="mb-2" height="60" />
                <p className="fw-semibold mb-0">Industrial<br />Projects</p>
              </div>
              <div className="col-3">
                <img src={Civil} alt="Civil" className="mb-2" height="60" />
                <p className="fw-semibold mb-0">Civil<br />Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
