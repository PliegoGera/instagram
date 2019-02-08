import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'

class Add extends Component {
  render() {
    return (
        <View style={style.container}>
        <Text> add </Text>
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

export default Add
