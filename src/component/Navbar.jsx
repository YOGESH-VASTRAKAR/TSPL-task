import logo from "../assets/simba-logo.png";

export const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-absolute top-0 w-100">
        <div className="container-fluid justify-content-between align-items-stretch px-0">
            {/* Left Half (Transparent) */}
            <div className="d-flex align-items-center ps-3 ps-md-5 bg-transparent flex-grow-1">
            <a className="navbar-brand d-flex align-items-center" href="#">
                <img src={logo} alt="Simba Logo" width="100" height="80" />
            </a>
            </div>

            {/* Toggler */}
            <button
            className="navbar-toggler me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            {/* Right Half (Orange) */}
            <div
            className="collapse navbar-collapse justify-content-end"
            id="mainNavbar"
            >
            <div
                className="position-relative d-flex flex-column flex-lg-row align-items-center w-100 py-4 px-3 px-lg-5"
                style={{
                backgroundColor: "#f65000",
                zIndex: "30",
                }}
            >
                <ul className="navbar-nav d-flex flex-column flex-lg-row gap-2 mb-0 w-100 justify-content-center justify-content-lg-end">
                <li className="nav-item">
                    <a className="nav-link text-white fw-normal" href="#">HOME</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white fw-normal" href="#">PROJECTS UNDERTAKEN</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white fw-normal" href="#">SERVICES OFFERED</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white fw-normal" href="#">WHO WE ARE</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white fw-normal" href="#">NEWS & MEDIA</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white fw-normal" href="#">CONTACT US</a>
                </li>
                </ul>

                {/* Bottom-right square visible only on large screens */}
                <div
                className="position-absolute d-none d-lg-block"
                style={{
                    width: "90px",
                    height: "90px",
                    backgroundColor: "#f65000",
                    bottom: "-89px",
                    right: "0px",
                }}
                ></div>
            </div>
            </div>
        </div>
        </nav>

    </>
  )
}
