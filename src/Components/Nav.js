import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const style = {
    Nav: {
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        backgroundColor: 'transparent',
        padding: '3vh',
    },
    Link: {
        color: 'white',
        float: 'right'
    }
};

export default class Nav extends Component {

    handleEvent = () => {
        console.log(window.location)
        if (window.location.pathname === "/LinkedIn") {
            console.log("kevin")
        }
        else {
            console.log("fail")
        }
    };


    render() {
        return (

            <div style={style.Nav}>

                <div>
                    <Link to='LinkedIn' onClick={this.handleEvent} style={style.Link}>LinkedIn</Link>
                    <span style={style.Link}>&nbsp;|&nbsp;</span>
                    <Link to='/Projects' style={style.Link}>Projects</Link>
                    <span style={style.Link}>&nbsp;|&nbsp;</span>
                    <Link to='GitHub' style={style.Link}>GitHub</Link>
                    <span style={style.Link}>&nbsp;|&nbsp;</span>
                    <Link to='/' style={style.Link}>Home</Link>
                </div>

            </div>

        );
    };

};