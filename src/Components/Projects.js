import React, { Component } from 'react';

// Images
import ThreaderZZZ from '../images/projects/ThreaderZZZ.jpg';
import Pickee from '../images/projects/Pickee.jpg';

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
            <div className='ProjectsWrapper fade-in-fwd' style={this.state.projectWrapperStyle}>

                <div className="polaroid-images">
                    <a href="https://kyblockstacking.github.io/Pickee/" target='_blank' rel="noopener noreferrer" title="Pickee"><img className='flip-in-hor-bottom' height="200" src={Pickee} alt="Pickee" title="Pickee" /></a>
                    <a href="https://threaderzzz.herokuapp.com/" target='_blank' rel="noopener noreferrer" title="ThreaderZZZ"><img className='flip-in-hor-bottom' height="200" src={ThreaderZZZ} alt="ThreaderZZZ" title="ThreaderZZZ" /></a>
                </div>

            </div>
        );
    };

};

export default Projects;