import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Categoriesscreen from './screens/Categoriesscreen';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerStyle:{backgroundColor:'#ffd700'},
           headerTintColor:'black',
           contentStyle:{backgroundColor:'#7fffd4'},
          }}
           >
           <Stack.Screen
            name="MealsCategories"
            component={Categoriesscreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name="MealsOverView"
            component={MealsOverViewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen
          name="MealDetail"
          component={MealDetailScreen}  />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});