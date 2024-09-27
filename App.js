import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'
import { Provider } from 'react-redux';



import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreeen from './screens/FavoriteScreen';
import { store } from './store/redux/store';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#351401' },
    headerTintColor: 'white',
    sceneContainerStyle: { backgroundColor: '#3f2f25' },
    drawerContentStyle: { backgroundColor: '#3f2f25' },
    drawerInactiveTintColor: 'white',
    drawerActiveBackgroundColor: '#e4baa1'
  }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
      title: 'All Categories',
      drawerIcon: ({ color, size }) => (<Ionicons name="list" color={color} size={size} />)
    }} />
    <Drawer.Screen name="Favorites" component={FavoriteScreeen} options={{
      drawerIcon: ({ color, size }) => (<Ionicons name="star" color={color} size={size} />)

    }} />
  </Drawer.Navigator>
}

export default function App() {
  return (

    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            cardStyle: { backgroundColor: '#3f2f25' }
          }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                // title: 'All Categories',
                headerShown: false,


              }} />
            <Stack.Screen
              name="MealsOverview" component={MealsOverViewScreen}

            />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{
              title: 'About The Meal'
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>


  );
}

const styles = StyleSheet.create({
  container: {

  },
});


