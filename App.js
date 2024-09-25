import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'



import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreeen from './screens/FavoriteScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#351401' },
    headerTintColor: 'white',
    sceneContainerStyle: { backgroundColor: '#3f2f25' }
  }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen} />
    <Drawer.Screen name="Favorites" component={FavoriteScreeen} />
  </Drawer.Navigator>
}

export default function App() {
  return (

    <>
      <StatusBar style='light' />
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
              headerShown: false

            }} />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverViewScreen}

          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>


  );
}

const styles = StyleSheet.create({
  container: {

  },
});


// 13;04