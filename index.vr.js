import React from 'react';
import {
    AppRegistry,
} from 'react-vr';
import Root from './src/components/Root';

export default class welcomeVr extends React.Component {
    render() {
        return (
            <Root/>
        );
    }
};

AppRegistry.registerComponent('welcomeVr', () => welcomeVr);
