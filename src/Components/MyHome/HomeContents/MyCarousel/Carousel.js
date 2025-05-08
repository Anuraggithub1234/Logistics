import React from "react";
import './Carousel.scss';

function Carousel() {
    return (
        <>
            <div id="carouselLogisticsAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselLogisticsAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselLogisticsAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselLogisticsAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner carousel1 ">

                    <div className="carousel-item " data-bs-interval="300000"  >
                        <img src="/images/9.jpg" className="d-block w-100" alt="LOGO" />
                        <div className="carousel-caption1  d-md-block">
                            <h2>AIR FREIGHT <br />TRANSPORTATION</h2>
                            <button className="btn btn-danger">SERVICES</button>
                            <button  className="btn btn-outline-danger crousel-btn">GET A QUOTE</button>
                         
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="/images/6.jpg" className="d-block w-100" alt="LOGO" />
                        <div className="carousel-caption2  d-md-block">
                            <h3>WORLD WIDE <br/>
                                TRANSPORT SERVICE 
                                </h3>
                                <button className="btn btn-danger">SERVICES</button>
                                <button  className="btn btn-outline-danger crousel-btn">GET A QUOTE</button>
                        </div>
                    </div>

                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src="/images/2.jpg" className="d-block w-100" alt="LOGO" />
                        <div className="carousel-caption3  d-md-block">
                            <h2>WORLD CLASS <br />
                                SHIPPING SERVICES</h2>
                            <button className="btn btn-danger">SERVICES</button>
                            <button  className="btn btn-outline-danger crousel-btn">GET A QUOTE</button>
                        </div>
                    </div>





                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselLogisticsAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselLogisticsAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    );


}

export default Carousel;