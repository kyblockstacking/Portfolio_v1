import React, { Component } from 'react';

class ContactMe extends Component {
    constructor(props) {
        super();

        this.state = {
            indexCard: {
                paddingTop: '15vh',
            }
        };

    };

    render() {
        return (
            <div style={this.state.indexCard} className='index-card slide-in-left'>
                <ul className='index-list'>
                    <li style={{ border: 'none', padding: '0.75em', textAlign: 'center' }}>Contact Information</li>
                    <li style={{ borderTop: '3px double #c93030' }}>&nbsp;</li>
                    <li>Name: Kevin Yang</li>
                    <li>Email: kevin1992yang@gmail.com</li>
                    <li>Mobile: (626) 297-6229</li>
                    <li>LinkedIn: <a target='_blank' href='https://linkedin.com/in/hellokevinyang'>https://linkedin.com/in/hellokevinyang</a></li>
                    <li>GitHub: <a target='_blank' href='https://github.com/kyblockstacking'>https://github.com/kyblockstacking</a></li>
                    <li>&nbsp;</li>
                    <li style={{ borderBottom: 'none' }}>&nbsp;</li>
                </ul>
            </div>
        );
    };
};

export default ContactMe;