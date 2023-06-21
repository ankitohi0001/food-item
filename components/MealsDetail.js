import { View , Text , StyleSheet } from 'react-native';

function MealDetail ({duration , complexity ,affordability , style ,textstyle}) {
    return <View style={[styles.details, style]}>
    <Text style={[styles.detailsItem ,textstyle]}>{duration}m</Text>
    <Text style={[styles.detailsItem , textstyle]}>{complexity.toUpperCase()}</Text>
    <Text style={[styles.detailsItem , textstyle]}>{affordability.toUpperCase()}</Text>        
    </View> 

}

export default  MealDetail;

const styles =StyleSheet.create({
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


});