import React, {Component, Style} from 'react';
import {View, Text, VrButton, Pano, asset, StyleSheet} from 'react-vr'
import PropTypes from 'prop-types';

class Welcome extends Component {
    render() {

        return (
            <View>
                <Text
                    style={styles.text}>
                    Welcome to VR places!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   wrapper: {
       color: 'red'
   },
   text: {
       backgroundColor  : 'transparent',
       fontSize         : 0.8,
       fontWeight       : '400',
       layoutOrigin     : [0.5, 0.5],
       paddingLeft      : 0.2,
       paddingRight     : 0.2,
       textAlign        : 'center',
       textAlignVertical: 'center',
       color            : '#eaeaea',
       shadowColor: 'red',
       transform        : [{translate: [0, -0.7, -6]}],
   }
});

Welcome.propTypes = {};
Welcome.defaultProps = {};

export default Welcome;
