import React, {Component} from 'react';
import {View, Text, VrButton, Pano, asset} from 'react-vr'
import PropTypes from 'prop-types';

class Welcome extends Component {
    render() {
        const {history} = this.props;
        return (
            <View>
                <Pano source={asset('chess-world.jpg')}/>
                <Text
                    style={{
                        backgroundColor  : 'blue',
                        fontSize         : 0.8,
                        fontWeight       : '400',
                        layoutOrigin     : [0.5, 0.5],
                        paddingLeft      : 0.2,
                        paddingRight     : 0.2,
                        textAlign        : 'center',
                        textAlignVertical: 'center',
                        color            : 'white',
                        transform        : [{translate: [0, 0, -3]}],
                    }}>
                    Welcome VR!
                </Text>
                <View style={{
                    flex         : 1,
                    flexDirection: 'column',
                    width        : 3,
                    alignItems   : 'stretch',
                    transform    : [{translate: [-1, -0.4, -5]}],
                }}>

                    <VrButton style={{
                        margin         : 0.1,
                        height         : 0.3,
                        backgroundColor: 'green'
                    }} onClick={() => history.push('/')}>
                        <Text style={{fontSize: 0.2, textAlign: 'center'}}>Hello</Text>
                    </VrButton>

                    <VrButton style={{
                        margin         : 0.1,
                        height         : 0.3,
                        backgroundColor: 'blue'
                    }} onClick={() => history.push('/welcome')}>
                        <Text style={{fontSize: 0.2, textAlign: 'center'}}>Welcome</Text>
                    </VrButton>

                </View>
            </View>
        );
    }
}

Welcome.propTypes = {};
Welcome.defaultProps = {};

export default Welcome;
