import React, { Component } from 'react';

export default class Projects extends Component {

    state = {
        projectWrapperStyle: {
            paddingTop: '20vh'
        },
        projectCarousel: {
            maxHeight: '50vh',
            maxWidth: '50vw',
            marginLeft: '25vw',
            marginRight: '25vw',
            boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
        }
    };




    render() {
        return (
            <div className='projectWrapper' style={this.state.projectWrapperStyle}>

                <div style={this.state.projectCarousel} id="carouselExampleIndicators" className="carousel slide slide-in-top" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="./images/projects/ThreaderZZZ.jpg" alt="ThreaderZZZ" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="./images/projects/Pickee.jpg" alt="Pickee" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
        );
    };

};