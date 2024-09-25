import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';


const Stack = createStackNavigator();

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
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',

            }} />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverViewScreen}
          // options={(route, navigation) => {
          //   const catId = route.params.categoryId;
          //   return {
          //     title: catId
          //   }
          // }}
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


