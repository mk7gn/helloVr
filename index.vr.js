import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
    Cylinder,
} from 'react-vr';

export default class welcomeVr extends React.Component {
    constructor() {
        super();

        this.state = {textColor: 'white'};
    }

  render() {
    return (
      <View>
        <Pano source={asset('pano.jpg')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
              color: this.state.textColor,
            transform: [{translate: [0, 0, -3]}],
          }}
            onEnter={() => this.setState({textColor: 'red'})}
            onExit={() => this.setState({textColor: 'white'})}
            onMove={() => this.setState({textColor: 'orange'})}>
          hello World
        </Text>
          <Cylinder
              radiusTop={0.5}
              radiusBottom={0.5}
              dimHeight={2}
              segments={12}
          />
          <Text
              style={{
                  backgroundColor: '#917802',
                  fontSize: 1,
                  fontWeight: '600',
                  layoutOrigin: [0.5,1.5],
                  paddingLeft: 0.5,
                  paddingRight: 0.5,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  transform: [{translate: [0, 0, 5]}, {rotateY: 180}],
              }}>
              hello World
          </Text>
          <View style={{
              flex: 1,
              flexDirection: 'column',
              width: 2,
              alignItems: 'stretch',
              transform: [{translate: [-1, 1, -5]}],
          }}>

              <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'red'}}>
                  <Text style={{fontSize: 0.2, textAlign: 'center'}}>Red</Text>
              </View>
              <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'orange'}}>
                  <Text style={{fontSize: 0.2, textAlign: 'center'}}>Orange</Text>
              </View>
              <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'yellow'}}>
                  <Text style={{fontSize: 0.2, textAlign: 'center'}}>Yellow</Text>
              </View>
              <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'green'}}>
                  <Text style={{fontSize: 0.2, textAlign: 'center'}}>Green</Text>
              </View>
              <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'blue'}}>
                  <Text style={{fontSize: 0.2, textAlign: 'center'}}>Blue</Text>
              </View>

          </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('welcomeVr', () => welcomeVr);
