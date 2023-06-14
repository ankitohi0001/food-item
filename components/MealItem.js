import { View , Text , Pressable , Image , StyleSheet ,Platform} from "react-native";
function MealItem({title, imageUrl ,duration , complexity , affordability}){
    return (
         <View style={styles.mealItem}>
        <Pressable android_ripple={{color : '#ccc'}}
        style={({pressed}) => 
        [ pressed ?
        styles.buttonpressed : null]}>
            <View>
                <View style={styles.innerContainer}>
                <Image source={{uri : imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{title}</Text>                          
        </View>
        <View style={styles.details}>
            <Text style={styles.details}>{duration}m</Text>
            <Text style={styles.details}>{complexity.toUpperCase()}</Text>
            <Text style={styles.details}>{affordability.toUpperCase()}</Text>        
            </View>
        </View>
        </Pressable>
    </View>
    );
}
export default MealItem;
const styles = StyleSheet.create({
    mealItem:{
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS ==='android' ?'hidden' : 'visible',
    backgroundColor:'white',
    elevation:4,
    shadowColor:'black',
    shadowOpacity:0.25,
    shadowOffset:{width:0 , height:2 },
    shadowRadius:8,

    },
    innerContainer:{
     borderRadius:8,
     overflow:'hidden'   
    },
    image:{
    width:'100%',
    height:200,

    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8
    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        padding:8,
        justifyContent:'center'
    },
    detailsItem:{
     marginHorizontal: 4,
     fontSize: 12   
    },
    buttonpressed:{
        opacity:0.5
    },
})