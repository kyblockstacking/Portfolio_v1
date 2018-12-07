import React, { Component } from 'react';

export default class GitHub extends Component {

    state = {
        GitHubStyle: {
            marginLeft: 'auto',
            marginRight: 'auto',
        }
    };

    render() {
        return (
            <div style={this.state.GitHubStyle}>
                GITHUB
            </div>
        );
    };

};