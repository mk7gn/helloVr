import React from 'react';
import {
    asset,
    Pano,
    Text,
    View,
    VrButton,
} from 'react-vr';

export default class HelloVr extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {history} = this.props;
        return (
            <View>
                <Pano source={asset('pano.jpg')}/>
                <Text
                    style={{
                        backgroundColor  : 'green',
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
                    Hello VR!
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

    _onViewClicked = (color) => {this.setState({helloBg: color}) };


};
