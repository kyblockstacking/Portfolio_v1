import React, { Component } from 'react';

export default class Home extends Component {
    state = {
        homeClass: 'slide-in-top',
        homeStyle: {
            textAlign: 'center',
            paddingTop: '15%'
        }
    };

    render() {
        return (
            <div className={this.state.homeClass} style={this.state.homeStyle}>
                Welcome to my page!
            </div>
        );
    };
};