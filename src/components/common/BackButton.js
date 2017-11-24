import React, {Component} from 'react';
import {VrButton, Text} from 'react-vr';
import PropTypes from 'prop-types';

class BackButton extends Component {
    render() {
        const {history} = this.props;
        return (
            <VrButton onClick={() => history.push('/')}>
                <Text>Home</Text>
            </VrButton>
        );
    }
}

BackButton.propTypes = {};
BackButton.defaultProps = {};

export default BackButton;
