

import {
    createAppContainer,
    createStackNavigator,
  } from 'react-navigation';


  import Search from './Search'
  import Autor from './Profile'
  import Publicacion from './Publicacion'
  import Comentarios from './Comernarios'


const SearchNav = createStackNavigator({
    Search:{
        screen:Search,
       
    },
    Publicacion:{
        screen:Publicacion,
    },
    Autor:{
        screen:Autor,
    },
    Comentarios:{
        screen:Comentarios,
        
    }
},
{
    initialRouteName: 'Search',
    
  });

  SearchNav.navigationOptions = ({ navigation }) => {
    const currentScreenPath = navigation.router.getPathAndParamsForState(navigation.state).path
    const isMyScreen = currentScreenPath  === 'Comentarios'
 console.log("isMyScreen ", isMyScreen);
    return {
      tabBarVisible: isMyScreen === false
    }
  }

const StackSearch = createAppContainer(SearchNav);

export { StackSearch};
