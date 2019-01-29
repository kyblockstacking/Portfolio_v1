import React, { Component } from 'react';

class StickyNote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            style: {
                background: props.color,
                height: '200px',
                width: '200px',
                float: 'right',
                top: '0',
                right: '0',
                position: 'absolute',
                margin: props.margin,
                boxShadow: '0 0 40px #0f0f0f',
                textAlign: 'center',
            }
        };
    };

    render() {
        return (
            <div className={this.props.className} style={this.state.style}>
                <br />
                <span>{this.props.text}</span>
                <br />
                <br />
                <i style={{ color: 'inherit', textDecoration: 'none', fontSize: '4em' }} className={this.props.fontAwesome} />
            </div>
        );
    };
};

export default StickyNote;