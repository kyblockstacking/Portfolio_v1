import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super();

        this.state = {
            homeStyle: {
                textAlign: 'center',
                paddingTop: '15%',
                fontSize: '2em',
                color: '#0892d0',
            },

        };
    };

    render() {
        return (
            <div className='HomeWrapper tracking-in-expand' style={this.state.homeStyle}>
                <span style={{ fontFamily: "'Major Mono Display', cursive", fontSize: '1.3em', fontWeight: 'bold', textShadow: '2px 2px #36454f' }}>kevin yang</span>
                <br />
                <span style={{ fontFamily: "'Major Mono Display', cursive", textShadow: '2px 2px #36454f' }}>full stack developer</span>
            </div>
        );
    };
};

export default Home;