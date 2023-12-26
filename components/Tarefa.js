import React, { TouchableOpacity } from 'react-native';
import { View,Text,StyleSheet } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';


export default function Tarefa({data,deleteItem}){
    return(
     <View style={styles.tarefa}>
       
       <TouchableOpacity style={styles.buton} onPress={deleteItem}>
          <FontAwesome name='trash' size={20} color='#22272e'/>
       </TouchableOpacity>

       <Text>{data.item}</Text>
     </View>
       
    )
}

const styles=StyleSheet.create({
  
    tarefa:{
        backgroundColor:'rgba(196,196,196,0.20)',
        marginTop:12,
        padding:12,
        borderRadius:4,
        flexDirection:'row'
    },
    buton:{
        marginRight:8,
        justifyContent:'center'
    }
})