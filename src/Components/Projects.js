import React, { Component } from 'react';

// Images
import ThreaderZZZ from '../images/projects/ThreaderZZZ.jpg';
import Pickee from '../images/projects/Pickee.jpg';
import ILoveAvocados from '../images/projects/ILoveAvocados.jpg';

class Projects extends Component {
    constructor(props) {
        super();

        this.state = {
            projectWrapperStyle: {
                paddingTop: '7%',
                marginLeft: '25%',
            },
        };

    };

    render() {
        return (
            <div className='projectWrapper fade-in-fwd' style={this.state.projectWrapperStyle}>

                <div className="polaroid-images">
                    <a href="https://kyblockstacking.github.io/Pickee/" target='_blank' rel="noopener noreferrer" title="Pickee"><img className='flip-in-hor-bottom' height="200" src={Pickee} alt="Pickee" title="Pickee" /></a>
                    <a href="https://threaderzzz.herokuapp.com/" target='_blank' rel="noopener noreferrer" title="ThreaderZZZ"><img className='flip-in-hor-bottom' height="200" src={ThreaderZZZ} alt="ThreaderZZZ" title="ThreaderZZZ" /></a>
                    <a href="http://iloveavocados.s3-website-us-west-1.amazonaws.com/" target='_blank' rel="noopener noreferrer" title="ILoveAvocados"><img className='flip-in-hor-bottom' height="200" src={ILoveAvocados} alt="ILoveAvocado" title="ILoveAvocados" /></a>
                </div>

            </div>
        );
    };

};

export default Projects;