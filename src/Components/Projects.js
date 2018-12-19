import React, { Component } from 'react';

// Images
import ThreaderZZZ from '../images/projects/ThreaderZZZ.jpg';
import Pickee from '../images/projects/Pickee.jpg';

export default class Projects extends Component {

    state = {
        projectWrapperStyle: {
            paddingTop: '7%',
            marginLeft: '25%',
        },
    };

    render() {
        return (
            <div className='projectWrapper fade-in-fwd' style={this.state.projectWrapperStyle}>

                <div className="polaroid-images">
                    <a href="https://kyblockstacking.github.io/Pickee/" title="Pickee"><img height="200" src={Pickee} alt="Pickee" title="Pickee" /></a>
                    <a href="https://threaderzzz.herokuapp.com/" title="ThreaderZZZ"><img height="200" src={ThreaderZZZ} alt="ThreaderZZZ" title="ThreaderZZZ" /></a>
                </div>

            </div>
        );
    };

};