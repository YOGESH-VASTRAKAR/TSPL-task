import africaMap from "../assets/map-art.png";

export const AfricanArt = () => {
  return (
    <>
    <section>
      <div className="container africa-banner py-5 my-5">
            <div className="row justify-content-center align-items-center">
              {/* Left: Full Africa Map Image */}
              <div className="col-lg-4 text-end mb-4 mb-lg-0 position-relative d-none d-lg-block" style={{ height: "300px" }}>
  <img
    src={africaMap}
    alt="Africa Map Art"
    className="position-absolute top-50 start-50 translate-middle img-fluid"
  />
</div>

              {/* Right: Orange Message Box */}
              <div className="col-lg-7  position-relative">
                <div className="message-box p-4 ">
                    
                        <h2 className="m-0 fs-2 fs-md-1 fw-light">
                            Always keeping <br />
                            <span className="text-white fw-bold fs-1">Africa</span>{" "}
                            <em>first</em>
                        </h2> 
                        <p className="text-white mt-3">
                            At Simba Developer, we prioritize doing the right things, the
                            right way, for the right reasons. Guided by strong ethics, we aim
                            to be a successful, sustainable, and responsible company in
                            Tanzania. Integrity and transparency shape our decisions, while a
                            culture of honesty fosters positive relationships with our
                            customers, suppliers, and communities.
                        </p>
                              
                </div>
                <div className="speech-tail"></div>
              </div>
            </div>
          </div>
       </section>
    </>
  )
}
