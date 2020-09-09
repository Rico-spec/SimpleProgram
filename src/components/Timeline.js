import React from "react";
import './Timeline.css';




const timeline=()=>{
    return(
        <>
        
        <div className="container">
            <div className="row text-center">
                <h1 className="heading-title">Timeline Style</h1>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="main-timeline">
                        <div className="timeline">
                            <div className="timeline-content">
                                <span className="date">
                                    <span className="day">10<sup>th</sup></span>
                                    <span className="month">Apr</span>
                                    <span className="year">2017</span>
                                </span>
                                <h2 className="title">Web Design</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus, quam non pellentesque consequat, massa justo elementum nunc, ac efficitur tortor nunc sit amet dolor.</p>
                            </div>
                        </div>

                        <div className="timeline">
                            <div className="timeline-content">
                                <span className="date">
                                    <span className="day">12<sup>th</sup></span>
                                    <span className="month">Apr</span>
                                    <span className="year">2017</span>
                                </span>
                                <h2 className="title">Web Development</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus, quam non pellentesque consequat, massa justo elementum nunc, ac efficitur tortor nunc sit amet dolor.</p>
                            </div>
                        </div>

                        <div className="timeline">
                            <div className="timeline-content">
                                <span className="date">
                                    <span className="day">14<sup>th</sup></span>
                                    <span className="month">Apr</span>
                                    <span className="year">2017</span>
                                </span>
                                <h2 className="title">Brand Building</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus, quam non pellentesque consequat, massa justo elementum nunc, ac efficitur tortor nunc sit amet dolor.</p>
                            </div>
                        </div>

                        <div className="timeline">
                            <div className="timeline-content">
                                <span className="date">
                                    <span className="day">16<sup>th</sup></span>
                                    <span className="month">Apr</span>
                                    <span className="year">2017</span>
                                </span>
                                <h2 className="title">Responsive Design</h2>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus, quam non pellentesque consequat, massa justo elementum nunc, ac efficitur tortor nunc sit amet dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </>


    );

}

export default timeline;