

import {
    createAppContainer,
    createStackNavigator,
  } from 'react-navigation';


  import Home from './Home'
  import Autor from './Profile'
  import Publicacion from './Publicacion'
  import Comentarios from './Comernarios'


const HomeNav = createStackNavigator({
    Home:{
        screen:Home,
        navigationOptions: { title: 'Home', 
        
        tabBarVisible: true, }
    },
    Autor:{
        screen:Autor,
    },
    Publicacion:{
        screen:Publicacion,
    },
    Comentarios:{
        screen:Comentarios,
        
    }
},
{
    initialRouteName: 'Home',
    
  });

  HomeNav.navigationOptions = ({ navigation }) => {
    const currentScreenPath = navigation.router.getPathAndParamsForState(navigation.state).path
    const isMyScreen = currentScreenPath  === 'Comentarios'
 console.log("isMyScreen ", isMyScreen);
    return {
      tabBarVisible: isMyScreen === false
    }
  }

const StackHome = createAppContainer(HomeNav);

export { StackHome};
