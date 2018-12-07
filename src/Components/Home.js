import React, { Component } from 'react';

export default class Home extends Component {
    state = {
        homeClass: 'animated slideInDown',
        homeStyle: {
            textAlign: 'center'
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