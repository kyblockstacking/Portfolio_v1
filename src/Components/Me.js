import React, { Component } from 'react';
import ProfilePicture from '../images/profile/me.JPG';

const profilePictureStyle = {
    maxHeight: '320px',
    maxWidth: '260px',
    margin: '0 15px 30px',
    padding: '10px 10px',
    textAlign: 'center',
    background: 'white',
    boxShadow: '0 4px 6px rgba(0,0,0,.3)',
}

export default class Me extends Component {

    state = {
        aboutMeClass: 'col-lg-2',
        aboutMeStyle: {
            visibility: 'hidden',
        },
    };

    focusIn = () => {
        this.setState({
            aboutMeClass: 'col-lg-2 focus-in-contract',
            aboutMeStyle: {
                visibility: 'visible',
                cursor: 'default',
                fontWeight: 'bold',
                color: 'teal',
            },
        });
    };

    blurOut = () => {
        this.setState({
            aboutMeClass: 'col-lg-2 blur-out-expand',
        });
    };

    render() {
        return (
            <div className='row' style={{zIndex: '1000'}}>

                <img title='Kevin Yang' onMouseEnter={this.focusIn} onMouseOut={this.blurOut} style={profilePictureStyle} src={ProfilePicture} alt="profile" className='col-lg-1 polaroid heartbeat' />

                <p style={this.state.aboutMeStyle} className={this.state.aboutMeClass}>This is me! I am a developer named Kevin. Welcome to my site! :D</p>

            </div>
        );
    };
};