import React from 'react';
import { View} from 'react-vr';
import { Route } from 'react-router'

import Welcome from './routes/Welcome'
import WinterMountain from './routes/WinterMountain'
import GppSpace from './routes/GppSpace'

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Route exact path='/' component={Welcome}/>
                <Route exact path='/winter-mountain' component={WinterMountain}/>
                <Route exact path='/gpp-space' component={GppSpace}/>
            </View>
        );
    }



};
