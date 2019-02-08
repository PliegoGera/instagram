
import React from 'react';
import { StyleSheet, Text, View ,PermissionsAndroid} from 'react-native';


import {RutasNoauth} from './components/noauth/RutasNoAutenticadas'
import {RutasAuth} from './components/auth/RutasAutenticadas'





class App extends React.Component {

  
  constructor(){
    super();
    
  }
  

  


 
  render() {
    return (
      <View style={styles.container}>
        

<RutasAuth/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    
  },
});

export default App;
