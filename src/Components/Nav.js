import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {

    state = {
        navStyle: {
            position: 'fixed',
            left: '0',
            bottom: '0',
            width: '100%',
            backgroundColor: 'transparent',
            padding: '3vh',
        },
        linkStyle: {
            color: 'white',
            float: 'right'
        }
    };

    render() {
        return (

            <div style={this.state.navStyle}>

                <div>

                    <Link to='LinkedIn' style={this.state.linkStyle}>Information</Link>

                    <span style={this.state.linkStyle}>&nbsp;|&nbsp;</span>

                    <Link to='/Projects' style={this.state.linkStyle}>Projects</Link>

                    <span style={this.state.linkStyle}>&nbsp;|&nbsp;</span>

                    <Link to='GitHub' style={this.state.linkStyle}>GitHub</Link>

                    <span style={this.state.linkStyle}>&nbsp;|&nbsp;</span>

                    <Link to='/' style={this.state.linkStyle}>Home</Link>

                </div>

            </div>

        );
    };

};