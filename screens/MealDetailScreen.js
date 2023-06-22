import { Text, Image ,View , StyleSheet, ScrollView } from "react-native";
import List from "../components/Mealdetail/List";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealsDetail";
import Subtitle from "../components/Mealdetail/Subtitle";
import { useLayoutEffect } from "react";
import Iconbutton from "../components/Iconbutton";
function MealDetailScreen({route , navigation }){
 const mealId = route.params.mealId;  

 const selectedMeal = MEALS.find((meal) => meal.id === mealId);

 function headerButtonPresshandler() {
     console.log('pressed');
 }

useLayoutEffect(() =>{navigation.setOptions({
     headerRight:() => { 
          return <Iconbutton 
          icon="star" color="white"
           onPress={headerButtonPresshandler}/>
     }
});
 },[navigation, headerButtonPresshandler])
return (
     <ScrollView style={styles.rootContainer}>
    <Image style={styles.image} source={{uri :selectedMeal.imageUrl}}/>
<Text style={styles.title}>{selectedMeal.title}</Text>
<MealDetail complexity={selectedMeal.complexity} 
affordability={selectedMeal.affordability}
duration={selectedMeal.duration}
textstyle={styles.detailtext}/>

<View style={styles.listoutercontainer}>
<View style={styles.ListContainer}>
<Subtitle>Ingredient</Subtitle>
<List data={selectedMeal.ingredients}/>
<Subtitle>Steps</Subtitle>
<List data={selectedMeal.steps}/>
</View>
</View>
</ScrollView>

);
}

export default MealDetailScreen ;

const styles = StyleSheet.create({
image:{
width:'100%',
height:350
},
title:{
fontWeight:'bold',
fontSize:24,
margin:8,
textAlign:'center',
color:'purple'
},
detailtext:{
     color:'purple'
},
ListContainer:{
     width:'80%'
},
listoutercontainer:{
     alignItems:'center'
},
rootContainer:{
     marginBottom:32
}


});