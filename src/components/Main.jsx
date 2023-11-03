import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Home from './Home';
import FavouriteNews from './FavouriteNews';
import { Profile } from './Profile';

const Tab = createBottomTabNavigator(); 

const Main = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName; 

          if(route.name === 'Home') {
            iconName = 'md-home'
            color='blue'
          } else if(route.name === 'Favorite news') {
            iconName = 'newspaper'
            color='blue'
          } else if(route.name === 'Profile') {
            iconName = 'person'
            color='blue'
          }
          return <Ionicons name={iconName} color={color} size={size}/>
        },
      })}>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Favorite news' component={FavouriteNews}/>
        <Tab.Screen name='Profile' component={Profile}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Main