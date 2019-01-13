import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super();

        this.state = {
            homeStyle: {
                textAlign: 'center',
                paddingTop: '15%',
                fontSize: '2em'
            },

        };
    };

    render() {
        return (
            <div className='HomeWrapper tracking-in-expand' style={this.state.homeStyle}>
                <span>H</span>
                <span>E</span>
                <span>L</span>
                <span>L</span>
                <span>O</span>
            </div>
        );
    };
};

export default Home;