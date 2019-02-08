import React, { Component } from 'react'
import { Text, View,StyleSheet,Button } from 'react-native'

export class Profile extends Component {
  render() {

    const {navigation}=this.props;
    return (
        <View style={style.container}>
        <Text> Profille </Text>
<Button
title="Publicacion"
onPress={()=>{
  navigation.navigate('Publicacion')
}}
/>
        
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
export default Profile
