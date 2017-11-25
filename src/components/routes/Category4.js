import React, {Component} from 'react';
import {Pano, View, Text, asset, VrButton} from 'react-vr';
import BackButton from '../common/BackButton';
import PropTypes from 'prop-types';

class Category4 extends Component {
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

Category4.propTypes = {};
Category4.defaultProps = {};

export default Category4;
