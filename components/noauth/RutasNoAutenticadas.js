import React from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import {
    createAppContainer,
    createStackNavigator,
  } from 'react-navigation';

const SignIn = (props)=> {
 console.log("propss ", props);
const {navigation} =props;
 return (<View>
     <Text>Componente  signin</Text>
     <Button
     title="navegar"
     onPress={()=>{
        navigation.navigate('SignUP')
     }}
     />
 </View>)

}
const SignUP =  (props)=> {
    console.log("props ", props);
   const {navigation} =props;
    return (<View>
        <Text>Componente  signUP</Text>
        <Button
        title="navegar"
        onPress={()=>{
           navigation.goBack();
        }}
        />
    </View>)
   
   }

const RutasNoAutenticadas = createStackNavigator(
    {
    SignIn:{
        screen:SignIn,
        navigationOptions :{
            title:'SignIn'
        }

    },
    SignUP:{
        screen:SignUP,
    }
},{
    headerMode:'none'
}
);

const RutasNoauth = createAppContainer(RutasNoAutenticadas);

export { RutasNoauth};