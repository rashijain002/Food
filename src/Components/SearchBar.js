import React from "react";
import { TextInput,View,StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
const SearchBar=({term,onTermChange,onTermSubmit})=>{
    return(
        <View style={styles.backgroundStyle}>
        <Ionicons name="search" style={styles.iconStyle}  color="black" />
        <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        style ={styles.inputStyle}
         placeholder="Search"
         value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
         />
        </View>
    );
};
const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#DBD5D5',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginTop:15,
        marginBottom:10,
    },
    inputStyle:{
        flex:1,
        fontSize:18,
        
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15,
    }
});
export default SearchBar;