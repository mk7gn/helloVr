import React, {Component} from 'react';
import {Pano, View, Text, asset, VrButton} from 'react-vr';
import BackButton from '../common/BackButton';
import PropTypes from 'prop-types';

class CAtegory2 extends Component {
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

CAtegory2.propTypes = {};
CAtegory2.defaultProps = {};

export default CAtegory2;
