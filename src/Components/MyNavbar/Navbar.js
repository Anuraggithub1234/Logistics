import React from "react";
import './Navbar.scss';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">LOGISTICS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll my1" >

                            <li className="nav-item">
                                <a className="nav-link active my2" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active my2" aria-current="page" href="#">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active my2" aria-current="page" href="#">SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active my2" aria-current="page" href="#">CARRERS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active my2" aria-current="page" href="#">SHIPPERS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active my2" aria-current="page" href="#">CONTACT</a>
                            </li>
                          
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Link</a>
                            </li> */}
                        </ul>
                   
                    </div>
                </div>
            </nav>



        </>
    );


}

export default Navbar;