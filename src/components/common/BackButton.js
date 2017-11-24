import React, {Component} from 'react';
import {VrButton, Text, StyleSheet} from 'react-vr';
import PropTypes from 'prop-types';

class BackButton extends Component {
    constructor (props) {
        super(props);
        this.state = {
            buttonBg: 'rgba(255, 0, 0, 0.1)'
        }
    }

    render() {
        const {history} = this.props;
        return (
            <VrButton style={{
                backgroundColor  : this.state.buttonBg,
                layoutOrigin     : [0.5, 0.5],
                paddingLeft      : 0.3,
                paddingRight     : 0.3,
                paddingTop      : 0.3,
                paddingBottom     : 0.3,
                transform        : [{translate: [0, 0, -6]}],
            }}
                      onClick={() => history.push('/')}
                      onExit={() => this.setState({buttonBg: 'rgba(255, 0, 0, 0.1)'})}
                      onEnter={() => this.setState({buttonBg: 'red'})}>
                <Text style={{
                    fontSize: 1
                }}>Home</Text>
            </VrButton>
        );
    }
}


BackButton.propTypes = {};
BackButton.defaultProps = {};

export default BackButton;
