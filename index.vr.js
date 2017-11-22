import React from 'react';
import {
    AppRegistry,
} from 'react-vr';
import App from './src/components/app';

export default class welcomeVr extends React.Component {
    render() {
        return (
            <App/>
        );
    }
};

AppRegistry.registerComponent('welcomeVr', () => welcomeVr);
