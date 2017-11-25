import React, {Component} from 'react';
import {Pano, View, Text, asset, VrButton} from 'react-vr';
import BackButton from '../common/BackButton';
import PropTypes from 'prop-types';

class Category3 extends Component {
    render() {
        const {history} = this.props;
        return (
            <View>
                <Pano source={asset('road.jpg')}/>
                <BackButton history={history}/>
            </View>
        );
    }
}

Category3.propTypes = {};
Category3.defaultProps = {};

export default Category3;
