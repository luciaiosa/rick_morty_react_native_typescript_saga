import React, { ComponentType } from 'react';
import {createAppContainer, NavigationInjectedProps, NavigationParams} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
/* Add navigation library (only the methods that we need)
  stackNavigator shows automaticaly different screens, and a header at the top of each screen with a back arrow (used to go to previous screen)
*/
import {Provider, connect} from 'react-redux';
import {store} from './src/store/Store';
import HomeScreen from './src/screens/home/HomeScreen';
import CharacterDetailScreen from './src/screens/characters/CharacterDetailScreen';
import CharactersListScreen from './src/screens/characters/CharactersListScreen';
import Footer from './src/components/footer/Footer';
import literals from './src/resources/literals.json';
import { colors } from './src/styles/base';

const AppNavigator = createStackNavigator(
  /* The first param is an object with all the screens that we are going to navigate through */
  {
    HomeScreen: {
      screen: setupReduxContainer(HomeScreen),
      /* navigationOptions: {
        title: 'Rick and Morty',  
        headerStyle: {  
            backgroundColor: colors.primary,  
        },  
        headerTintColor: '#ffffff',  
        headerTitleStyle: {  
          fontWeight: 'bold',  
        },  
      } */
    },
    CharacterDetailScreen: {
      screen: setupReduxContainer(CharacterDetailScreen),
    },
    CharactersListScreen: {screen: setupReduxContainer(CharactersListScreen)}
  },
  /* The second param is an object that contains:
  - initialRouteName = the default route that we want to show any time our app start up!! (optional when we have only one screen)
  - defaultNavigationOptions = options that we are going to use for every different screen; customize the header that's displayed on the top of every screen */
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      title: 'Rick and Morty'  /* The title on the top of the screen. It can be different on each screen */,
      headerStyle: {  
        backgroundColor: colors.primary,  
      },  
      headerTintColor: '#ffffff',  
      headerTitleStyle: {  
        fontWeight: 'bold',  
      }, 
    }
  }
);
/* createAppContainer creates a default app component (react component) and displayes whatever content that navigator produces inside of that component
   createAppContainer(navigator) make sure that what we are exporting is a react app component, because we have to export a component! */
export const NavigationContainer = createAppContainer(AppNavigator);

export function setupReduxContainer(Container: ComponentType<Pick<NavigationInjectedProps<NavigationParams>, never>>) {
  return connect(
    state => ({ ...state })
  )(props => <Container {...props} />);
}
  
export default () => (
  <Provider store={store}>
    <NavigationContainer />
    <Footer content={literals.footerContent}></Footer>
  </Provider>
);