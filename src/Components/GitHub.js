import React, { Component } from 'react';

export default class GitHub extends Component {

    state = {
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
        }

    };

    render() {
        return (
            <div className='paper'>
                <div>GITHUB</div>
                <div class="lines" />
                <ul class="list">
                    <li>Projects</li>
                    <li>ThreaderZZZ</li>
                    <li>Pickee</li>
                    <li>Eat lunch</li>
                    <li>Call mom</li>
                    <li>Tweet about feeding my cow</li>
                    <li>Join a hangout in google+</li>
                    <li>Prepare Dinner</li>
                    <li>Eat Dinner</li>
                </ul>

            </div>
        );
    };

};