import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export class Comernarios extends Component {
  render() {
    const {navigation}=this.props;
    return (
      <View>
        <Text> Comernarios </Text>
        <Button
title="Autor"
onPress={()=>{
  navigation.navigate('Autor')
}}
/>
      </View>
    )
  }
}

export default Comernarios
