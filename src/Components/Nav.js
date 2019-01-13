import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Me from './Me';

class Nav extends Component {
    constructor(props) {
        super();

        this.state = {
            navStyle: {
                position: 'fixed',
                left: '0',
                bottom: '0',
                width: '100%',
                backgroundColor: 'transparent',
                padding: '3vh',
                zIndex: '100',
            },
            linkStyle: {
                color: 'white',
                float: 'right',
            },
        };

    };

    render() {
        return (

            <div className='tracking-in-contract' style={this.state.navStyle}>

                <div>

                    <Me />

                    <Link to='/ContactMe' style={this.state.linkStyle}>Contact Me</Link>

                    <span style={this.state.linkStyle}>&nbsp;|&nbsp;</span>

                    <Link to='/Stack' style={this.state.linkStyle}>Stack</Link>

                    <span style={this.state.linkStyle}>&nbsp;|&nbsp;</span>

                    <Link to='/Projects' style={this.state.linkStyle}>Projects</Link>

                    <span style={this.state.linkStyle}>&nbsp;|&nbsp;</span>

                    <Link to='/AboutMe' style={this.state.linkStyle}>About Me</Link>

                    <span style={this.state.linkStyle}>&nbsp;|&nbsp;</span>

                    <Link to='/' style={this.state.linkStyle}>Home</Link>

                </div>

            </div>

        );
    };

};

export default Nav;