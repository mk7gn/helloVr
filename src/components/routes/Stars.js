import React, {Component} from 'react';
import {Pano, View, Text, asset, VrButton} from 'react-vr';
import BackButton from '../common/BackButton';
import PropTypes from 'prop-types';

class Stars extends Component {
    render() {
        const {history} = this.props;
        return (
            <View>
                <Pano source={asset('pano.jpg')}/>
                <BackButton history={history}/>
            </View>
        );
    }
}

Stars.propTypes = {};
Stars.defaultProps = {};

export default Stars;
