import React, {Component} from 'react';
import {Provider} from 'react-redux';
import App from './App';
import store from '../redux/store';
import { MemoryRouter as Router} from 'react-router'

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <App/>
                </Router>
            </Provider>
        );
    }
}

export default Root;
