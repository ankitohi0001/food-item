import { useLayoutEffect } from 'react';
import { View , FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import {MEALS , CATEGORIES} from '../data/dummy-data'
function MealsOverViewScreen({ route , navigation }) {
    const catId = route.params.categoryId;

 const displayedMeals = MEALS.filter((mealItem)=>{
   return mealItem.categoryIds.indexOf(catId) >= 0;      
 });

 useLayoutEffect(() => {
  const categoryTitle = CATEGORIES.find(
    (category) => category.id === catId
  ).title;

  navigation.setOptions({
    title: categoryTitle,
  });
}, [catId, navigation]);
 
 
 function renderMealItem(itemData){
  const item = itemData.item;
  const mealItemsProps = {
    title:item.title, 
    id:item.id,
   imageUrl:item.imageUrl,
   affordability:item.affordability, 
   complexity:item.complexity,
   duration:item.duration
  };
 return (
  <MealItem {...mealItemsProps}/>

 );   
 }
    return ( 
    <View style={styles.container}>
      <FlatList data={displayedMeals} 
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}/>
    </View>
    );
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
 container:{
    flex: 1,
    padding:16,
     
 }
});