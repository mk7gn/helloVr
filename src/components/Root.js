import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter as Router} from 'react-router-redux'
import history from '../history'
import App from './app';
import store from '../redux/store';

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <App/>
                </Router>
            </Provider>
        );
    }
}

export default Root;
