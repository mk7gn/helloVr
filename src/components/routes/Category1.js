import React, {Component} from 'react';
import {Pano, View, Text, asset, VrButton} from 'react-vr';
import BackButton from '../common/BackButton';
import PropTypes from 'prop-types';

class Category1 extends Component {
    render() {
        const {history} = this.props;
        return (
            <View>
                <Pano source={asset('GPP-Space.jpg')}/>
                <BackButton history={history}/>
            </View>
        );
    }
}

Category1.propTypes = {};
Category1.defaultProps = {};

export default Category1;