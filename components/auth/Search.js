import React, { Component } from 'react'
import { Text, View,StyleSheet,Button } from 'react-native'

class Search extends Component {
  render() {
    const { navigation} = this.props;
    return (
      <View style={style.container}>
        
      <Button
      title="Autor"
      onPress={()=>{
        navigation.navigate('Autor')
      }}
      />
      <Button
      title="Comentarios"
      onPress={()=>{
        navigation.navigate('Comentarios')
      }}
      />
      <Text>search </Text>
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
export default Search
