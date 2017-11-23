import React from 'react';
import { View, VrButton, Text } from 'react-vr';
import { Route } from 'react-router'
import HelloVr from './HelloVr'
import Welcome from './Welcome'

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Route exact path='/' component={HelloVr}/>
                <Route exact path='/welcome' component={Welcome}/>
            </View>
        );
    }



};
