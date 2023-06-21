import {Text , StyleSheet , View } from 'react-native'
function List({data}){
    return data.map((dataPoint)=>(
       <View key={dataPoint} style={styles.Listitem}> 
       <Text style={styles.itemText}>{dataPoint}</Text>
           </View>));     

}

export default List;

const styles = StyleSheet.create({ 
Listitem:{
    borderRadius:6,
    paddingHorizontal:8,
    paddingVertical:4,
    marginVertical:4,
    marginHorizontal:12,
    backgroundColor:'purple'
},
itemText:{
color:'white',
textAlign:'center',
fontSize:15
},

});