import React, {Component} from 'react';
import {Pano, View, Text, asset, VrButton} from 'react-vr';
import BackButton from '../common/BackButton';
import PropTypes from 'prop-types';

class WinterMountain extends Component {
    render() {
        const {history} = this.props;
        return (
            <View>
                <Pano source={asset('winter-mountain.jpg')}/>
                <BackButton history={history}/>
            </View>
        );
    }
}

WinterMountain.propTypes = {};
WinterMountain.defaultProps = {};

export default WinterMountain;
