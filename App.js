import React,{useState}from 'react';
import { StyleSheet, Text, View,SafeAreaView,TextInput, TouchableOpacity,FlatList} from 'react-native';
import {FontAwesome}from '@expo/vector-icons';
import Tarefa from './components/Tarefa';

export default function App() {

   const [tarefa,setTarefa]=useState('')
   const [list,setList]=useState([])

   function Txt(){

     if (tarefa==='') {
       return
     }

     const dados={
       key: Date.now(),
       item:tarefa
     }

     setList(onArray=>[dados,...onArray])
     setTarefa('')
   }

   function handleDelite(item){

     let filtraItem=list.filter((tarefa)=>{
        return(tarefa.item!==item)
     })
     setList(filtraItem)
   }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefa</Text>
       <View style={styles.containerInput}>
         <TextInput 
            placeholder='Digite a tarefa'
            style={styles.input}
            value={tarefa}
            onChangeText={(text)=>setTarefa(text)}
         />
         <TouchableOpacity 
         style={styles.butonAdd}
         onPress={Txt}
         >
         <FontAwesome name='plus' size={20} color='#FFF'/>
         </TouchableOpacity>
       </View>

       <FlatList
            style={styles.list}
            data={list}
            //Informa o id
            keyExtractor={(item)=>item.key}
            renderItem={({item})=><Tarefa data={item} deleteItem={()=>handleDelite(item.item)}/>}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#22272e',
    paddingTop:20
  },
  title:{
    fontWeight:'bold',
    fontSize:24,
    color:'#FFF',
    marginTop:'5%',
    paddingStart:'5%',
    marginBottom:12
  },
  containerInput:{
    flexDirection:'row',
    width:'100%',
    height:44,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:22
  },
   input:{
    width:'75%',
    backgroundColor:'#FBFBFB',
    height:44,
    borderRadius:4,
    paddingHorizontal:8
   },
   butonAdd:{
    width:'15%',
    height:44,
    backgroundColor:'blue',
    marginLeft:8,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:4

   },
   list:{
     flex:1,
     backgroundColor:'#FFF',
     paddingStart:'4%',
     paddingEnd:'4%'
   }
});
