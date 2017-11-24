import React, {Component} from 'react';
import {Pano, View, Text, asset, VrButton} from 'react-vr';
import BackButton from '../common/BackButton';
import PropTypes from 'prop-types';

class Lake extends Component {
    render() {
        const {history} = this.props;
        return (
            <View>
                <Pano source={asset('lake.jpg')}/>
                <BackButton history={history}/>
            </View>
        );
    }
}

Lake.propTypes = {};
Lake.defaultProps = {};

export default Lake;
