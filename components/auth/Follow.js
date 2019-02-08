import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export class Follow extends Component {
  render() {
    return (
        <View style={style.container}>
        <Text> Follow </Text>
      </View>
    )
  }
}
const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Follow
