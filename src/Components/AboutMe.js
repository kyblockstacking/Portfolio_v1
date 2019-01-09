import React, { Component } from 'react';

class AboutMe extends Component {
    constructor(props) {
        super();

        this.state = {
            GitHubStyle: {
                marginLeft: 'auto',
                marginRight: 'auto',
            },
            body: {
                backgroundColor: '#f5f5f5',
                width: '600px',
                margin: '0 auto',
                padding: '0',
            },
            list: {
                color: '#555',
                fontSize: '22px',
                padding: '0 !important',
                width: '500px',
                fontFamily: 'courier, monospace',
                border: '1px solid #dedede',
            },
        };
        
    };

    render() {
        return (
            <div style={{ padding: '2%' }} className='paper slide-in-elliptic-bottom-fwd'>
                <div className='lines' />
                <ul className='list'>
                    <li style={{ padding: '1.2em' }}>My GitHub</li>
                    <li>PUT</li>
                    <li>SOMETHING</li>
                    <li>ABOUT</li>
                    <li>YOUR</li>
                    <li>GITHUB</li>
                    <li>RIGHT</li>
                    <li>HERE</li>
                    <li>!</li>
                    <li>!</li>
                    <li>!</li>
                    <li>!</li>
                    <li>!</li>
                    <li>!</li>
                    <li>!</li>
                    <li>!</li>
                    <li>!</li>
                    <li>!</li>
                    <li>!</li>
                    <li>!</li>
                    <li>!</li>
                    <li>!</li>
                </ul>

            </div >
        );
    };

};

export default AboutMe;