import React from 'react';
import { View} from 'react-vr';
import { Route } from 'react-router'
import Welcome from './Welcome'

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Route exact path='/' component={Welcome}/>
                <Route exact path='/welcome' component={Welcome}/>
            </View>
        );
    }



};
