import React, { Component } from 'react';
import ProfilePicture from '../images/profile/me.JPG';

export default class Me extends Component {

    state = {
        aboutMeClass: 'col-lg-2',
        aboutMeStyle: {
            visibility: 'hidden'
        }
    }

    focusIn = () => {
        this.setState({
            aboutMeClass: 'col-lg-2 focus-in-contract',
            aboutMeStyle: {
                visibility: 'visible'
            }
        });
    };

    blurOut = () => {
        this.setState({
            aboutMeClass: 'col-lg-2 blur-out-expand',
        })
    }

    render() {
        return (
            <div className='row'>
                <img onMouseEnter={this.focusIn} onMouseOut={this.blurOut} style={{ maxHeight: '260px', maxWidth: '260px' }} src={ProfilePicture} alt="profile" className='col-lg-1' />
                <p style={this.state.aboutMeStyle} className={this.state.aboutMeClass}>This is me! I am a developer named Kevin. Welcome to my site! :D</p>
            </div>
        );
    };
};