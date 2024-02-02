import React from "react";
import {Text,View,FlatList,StyleSheet,TouchableOpacity} from 'react-native';
import ResultDetail from "./ResultDetail";

const ResultsList=({title,results,navigation})=>{
    if(!results.length){
        return null;
    }
    return(
        <View style={styles.container}>
        <Text style={styles.titleStyle}>
           {title}
        </Text>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result)=>result.id}
        renderItem={({item})=>{
          return(
            <TouchableOpacity onPress={()=> navigation.navigate('ResultScreen',{id:item.id})}>
            <ResultDetail result={item}/>
            </TouchableOpacity>
             )
        }}
        />
        </View>
    )
}
const styles = StyleSheet.create({
    titleStyle:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5,

    },
    container:{
        marginBottom:15,
    }
});

export default ResultsList;