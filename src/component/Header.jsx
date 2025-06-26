import hero from "../assets/hero-banner.jpg";
import { Navbar } from "../component/Navbar";

export const Header = () => {
  return (
    <>
    <header className="hero-section position-relative text-white">
        <img src={hero} alt="Hero" className="img-fluid w-100 hero-img" />       
        <Navbar/>
        <div className="position-absolute bottom-0 start-0 w-100 d-flex  mb-3" style={{ zIndex: 10 }}>
          <div className=" container d-flex gap-5 text-white fw-bold align-items-end">
            <div className="d-flex flex-column align-items-center">
              <span style={{ fontSize: "24px" }}>&#10229;</span>
              <span style={{ fontSize: "14px" }}>PREV</span>              
            </div>
            <div className="d-flex flex-column align-items-center">
              <span style={{ fontSize: "14px" }}>NEXT</span>
              <span style={{ fontSize: "24px" }}>&#10230;</span>
            </div>
          </div>
        </div>       
      </header>
    </>
  )
}
