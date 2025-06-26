import React from 'react'

export const Welcome = () => {
  return (
    <>
    <section className="container my-2">
        <div className="row align-items-baseline">
          <div className="col-md-6">
            <h1 className="display-1 responsive-heading position-relative" style={{ color: "#f0f0f0", fontWeight: 700,fontSize:"10rem", }}>welcome
              <span className="position-absolute" style={{ top: '80%', left: 0, transform: 'translateY(-50%)', color: '#000', fontSize: '2rem', fontWeight: 600 }}>Making homes accessible<br />to one and all in Tanzania.</span>
            </h1>
            <p className="mt-4 text-muted section-text" style={{ paddingRight:"10rem",textAlign: "justify"}}>At Simba Developer, we prioritize doing the right things, the right way, for the right reasons. Guided by strong ethics, we aim to be a successful, sustainable, and responsible company in Tanzania. Integrity and transparency shape our decisions, while a culture of honesty fosters positive relationships with our customers, suppliers, and communities.</p>
            <div className="text-end section-end " style={{ paddingRight:"10rem",}}>
              <p className="mt-3  text-dark fw-semibold border-bottom border-2 d-inline-block pb-1 my-border" style={{ borderColor: '#f65000' }}>continue exploring</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row ">
              <div className="col-6 mb-4">
                <h2 className="fw-bold" style={{ fontSize:"3rem"}} >2005</h2>
                <p className="text-muted ">Year of Incorporation</p>
                <hr style={{ width: '40%',  borderTop: '2px solid #f65000' }} />
              </div>
              <div className="col-6 mb-4">
                <h2 className="fw-bolder" style={{ fontSize:"3rem"}}>700+</h2>
                <p className="text-muted">Motivated Employees</p>
                <hr style={{ width: '40%',  borderTop: '2px solid #f65000' }} />
              </div>
              <div className="col-6">
                <h2 className="fw-bold" style={{ fontSize:"3rem"}}>40+</h2>
                <p className="text-muted">Projects Executed</p>
                <hr style={{ width: '40%',  borderTop: '2px solid #f65000' }} />
              </div>
              <div className="col-6">
                <h2 className="fw-bold" style={{ fontSize:"3rem"}}>80+</h2>
                <p className="text-muted">High-tech Machinery</p>
                <hr style={{ width: '40%',  borderTop: '2px solid #f65000' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
