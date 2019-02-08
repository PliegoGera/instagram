import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export class Publicacion extends Component {
  render() {
    const {navigation}=this.props;
    return (
      <View>
        <Text> Publicacion </Text>
        <Button
title="Comentarios"
onPress={()=>{
  navigation.navigate('Comentarios')
}}
/>
      </View>
    )
  }
}

export default Publicacion
