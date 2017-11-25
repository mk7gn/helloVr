import React from 'react';
import { View} from 'react-vr';
import { Route } from 'react-router'

import Welcome from './routes/Welcome'
import Stars from './routes/Category4'
import GppSpace from './routes/Category1'
import Road from './routes/Category3'
import Lake from './routes/Category2'

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Route exact path='/' component={Welcome}/>
                <Route exact path='/cat1' component={Stars}/>
                <Route exact path='/cat2' component={GppSpace}/>
                <Route exact path='/cat3' component={Road}/>
                <Route exact path='/cat4' component={Lake}/>
            </View>
        );
    }



};
