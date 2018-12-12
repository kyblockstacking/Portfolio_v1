import React, { Component } from 'react';
import ProfilePicture from '../images/profile/me.JPG';

export default class Me extends Component {

    render() {
        return (
            <div>
                <img style={{ maxHeight: '15vh', maxWidth: '10vw' }} src={ProfilePicture} alt="profile" />
            </div>
        );
    };
};