import React, { useState} from "react";
import {Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from "../Components/SearchBar";
import useResult from "../hooks/useResult";
import ResultsList from "../Components/ResultsList";

const HomeScreen=({navigation})=>{
    const[term,setTerm]=useState('');
    const[SearchApi,results,errorMessage]=useResult();
    const filterResultsByPrice=(price)=>{
        return results.filter(result=>{
            return result.price===price;
        })
    };
    return (
        <>
            <SearchBar term={term} 
            onTermChange={setTerm}
            onTermSubmit={()=>SearchApi(term)}
            />
            <Text>{errorMessage}</Text>
            <ScrollView>
            <ResultsList navigation={navigation} title="Cost Effective" results={filterResultsByPrice('$')}/>
            <ResultsList navigation={navigation} title="Bit Pricier" results={filterResultsByPrice('$$')}/>
            <ResultsList navigation={navigation} title="Big spender" results={filterResultsByPrice('$$$')}/>
            </ScrollView>
        </>
    )
};
    const styles=StyleSheet.create({
    });
export default HomeScreen;