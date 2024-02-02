import React from "react";
import {Text,View,Image,StyleSheet} from 'react-native';

const ResultDetail=({result})=>{
    return(
        <View style={styles.container}>
            <Image style={styles.ImageStyle} source={{uri:result.image_url}}/>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars,{result.review_count} Reviews</Text>
        </View>
    )
};
const styles=StyleSheet.create({
    container:{
        marginLeft:15,
    },
    ImageStyle:{
        width:250,
        height:250,
        borderRadius:4,
        marginBottom:5,
    },
    nameStyle:{
        fontWeight:'bold',

    }
});
export default ResultDetail;