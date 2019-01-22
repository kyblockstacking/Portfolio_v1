import React, { Component } from 'react';

import StickyNote from './StickyNote';

class AboutMe extends Component {
    constructor(props) {
        super();

        this.state = {
            paper: {
                padding: '2%',
            },
            header: {
                padding: '1.5em 1.2em 0.2em 1.2em',
                textAlign: 'center',
            },
            title: {
                padding: '0', fontSize: '2em', fontFamily: 'Patrick Hand SC, cursive',
            },
            name: {
                float: 'right',
                fontFamily: 'Patrick Hand SC, cursive',
            },
        };

    };

    render() {

        return (
            <div className='AboutMeWrapper'>
                <div style={this.state.paper} className='paper slide-in-elliptic-bottom-fwd'>
                    <div className='lines' />
                    <ul className='list'>
                        <li style={this.state.header}>
                            <span style={this.state.title}>About Me</span>
                            <span style={this.state.name}>Kevin Yang</span></li>
                        <li>&nbsp;&nbsp;&nbsp;My name is Kevin Yang and I am a full</li>
                        <li>stack web developer. I love to design and</li>
                        <li>make visually appealing application pages.</li>
                        <li>&nbsp;&nbsp;&nbsp;With my creativity and imagination,</li>
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
                        <li>into an organized, punctual and</li>
                        <li>detail-oriented person. I am able to work</li>
                        <li>efficiently and effectively under high</li>
                        <li>stress situations while producing</li>
                        <li>satisfactory outcomes.</li>
                        <li style={{ borderBottom: 'none' }}>&nbsp;</li>
                    </ul>
                </div >

                <a href='https://www.docdroid.net/y6uXxqR/resume-kevin-yang.pdf/' target='_blank' rel="noopener noreferrer">
                    <StickyNote className='StickyNote slide-in-top1' margin='1% 10% 0 0' fontAwesome='fas fa-id-card' color='#feff9c' text='View my resume!' />
                </a>

                <a href='https://linkedin.com/in/kevinyang92/' target='_blank' rel="noopener noreferrer">
                    <StickyNote className='StickyNote slide-in-top2' margin='13% 10% 0 0' fontAwesome='fab fa-linkedin' color='#7afcff' text='Visit my LinkedIn profile!' />
                </a>

                <a href='https://github.com/kyblockstacking/' target='_blank' rel="noopener noreferrer">
                    <StickyNote className='StickyNote slide-in-top3' margin='25% 10% 0 0' fontAwesome='fab fa-github' color='#ff7eb9' text='Visit my GitHub page!' />
                </a>

            </div >
        );
    };

};

export default AboutMe;
