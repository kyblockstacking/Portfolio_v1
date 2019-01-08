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
            <div className='homeWrapper' style={this.state.homeStyle}>
                <span className='slide-in-top'>H</span>
                <span className='slide-in-top2'>E</span>
                <span className='slide-in-top3'>L</span>
                <span className='slide-in-top4'>L</span>
                <span className='slide-in-top5'>O</span>
            </div>
        );
    };
};

export default Home;