import React from 'react';
import { View} from 'react-vr';
import { Route } from 'react-router'

import Welcome from './routes/Welcome'
import Stars from './routes/Stars'
import GppSpace from './routes/GppSpace'
import Road from './routes/Road'
import Lake from './routes/Lake'

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Route exact path='/' component={Welcome}/>
                <Route exact path='/stars' component={Stars}/>
                <Route exact path='/gpp-space' component={GppSpace}/>
                <Route exact path='/road' component={Road}/>
                <Route exact path='/lake' component={Lake}/>
            </View>
        );
    }



};
