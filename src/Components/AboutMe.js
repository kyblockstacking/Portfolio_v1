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
                    <li style={{ padding: '1.2em' }}>
                        <span style={{ padding: '0', fontSize: '2em', fontFamily: 'Patrick Hand SC, cursive' }}>About Me</span>
                        <span style={{ float: 'right', fontSize: '1em', fontFamily: 'Patrick Hand SC, cursive'}}>Kevin Yang</span></li>
                    <li>&nbsp;&nbsp;&nbsp;My name is Kevin Yang and I am a full</li>
                    <li>stack web developer. I love to design and</li>
                    <li>make visually appealing application pages.</li>
                    <li>&nbsp;&nbsp;&nbsp;With my creativity and imgination,</li>
                    <li>I strive to make beautiful, user friendly,</li>
                    <li>and functional designs. Although I have an</li>
                    <li>inclination towards design, I am also</li>
                    <li>capable of building a structured backend.</li>
                    <li>&nbsp;&nbsp;&nbsp;I dedicate substantial time into</li>
                    <li>learning programming. I am an exceptional</li>
                    <li>learner and an excellent student. I am able</li>
                    <li>to be easily taught and can adequately learn</li>
                    <li>new technologies by myself.</li>
                    <li>&nbsp;&nbsp;&nbsp;I have a strong culinary arts</li>
                    <li>background which I believe has shaped me</li>
                    <li>into a punctual, detail oriented person.</li>
                    <li>I am able to work efficiently and</li>
                    <li>effectively under high stress situations</li>
                    <li>while producing satisfactory outcomes.</li>
                    <li style={{borderBottom: 'none'}}>&nbsp;</li>
                </ul>

            </div >
        );
    };

};

export default AboutMe;