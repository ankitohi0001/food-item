import { Pressable,View , Text ,StyleSheet, Platform } from "react-native";
function CategoryGridTile({ title, color , onPress , navigation}){

    return( <View style={ styles.GridItem}>
        <Pressable android_ripple={{color:'#a9a9a9'}} style={({pressed}) => 
        [styles.button , pressed ?
        styles.buttonpressed : null,]}
          onPress={onPress} 
          >
            <View style={[styles.innerContainer,{backgroundColor: color} ]}>
          <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
GridItem:{
flex:1,
margin:16,
height:150,
borderRadius:8,
elevation:4,
elevation:4,
shadowColor:'black',
shadowOpacity:0.25,
shadowOffset:{width:0 , height:2 },
shadowRadius:8,
backgroundColor:'white',
overflow: Platform.OS ==='android' ?'hidden' : 'visible'
},
innerContainer:{
  flex:1,
  padding:16,
  borderRadius:8,
  justifyContent:'center',
  alignItems:'center'
},
title:{
fontWeight:'bold',
fontSize:18
},
button:{
 flex:1 
},
buttonpressed:{
  opacity:0.5
}
});