import React, {Component, Style} from 'react';
import {View, Text, Pano, StyleSheet, asset, Image, VrButton} from 'react-vr'
import PropTypes from 'prop-types';

class Welcome extends Component {
    render() {
        const {history} = this.props;
        return (
            <View>
                <Pano source={asset('chess-world.jpg')}/>
                <Text
                    style={styles.text}>
                    Welcome to VR places!
                </Text>
                <View style={styles.navContainer}>
                    {categories.map((category) => {
                        return <VrButton style={styles.navItem} onClick={() => history.push(category.route)} key={category.id}>
                            <Text>{category.name}</Text>
                        </VrButton>
                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   pano: {
       tintColor  : 'orange'
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
       transform        : [{translate: [0, 0.7, -6]}],
   },
   navContainer : {
       layoutOrigin     : [1, 1],
       transform        : [{translate: [4, 0, -5]},],
        flexDirection: 'row',
       justifyContent: 'center'
   },
   navItem: {
       backgroundColor: 'green',
       width: 1,
       height: 1,
        borderWidth: 0.03,
       borderColor: 'red',
       marginLeft: 0.4,
       marginRight: 0.4
   }
});

const categories = [
    {
        id: 1,
        name: 'Winter mountain',
        route: '/winter-mountain'
    },
    {
        id: 2,
        name: 'Gpp-Space',
        route: '/gpp-space'
    },
    {
        id: 3,
        name: 'category 3',
        route: 'cat3'
    },
    {
        id: 4,
        name: 'category 4',
        route: 'cat4'
    },
];

Welcome.propTypes = {};
Welcome.defaultProps = {};

export default Welcome;
