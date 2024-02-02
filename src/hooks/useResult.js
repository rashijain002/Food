import { useEffect,useState } from "react";
import yelp from "../api/yelp";

export default()=>{
    const[results,setResults]=useState([]);//for managing api
    const [errorMessage,setErrMessage]=useState('');//for error handling
    const SearchApi=async(searchTerm)=>{
        try{
        const response = await yelp.get('/search',{
            params:{
                limit:50,
                term:searchTerm,
                location:'san jose'
            }
        });
        setResults(response.data.businesses);
    }catch(err){//using try and catch for error handling 
        setErrMessage('Something went wrong');
    }
    };
    useEffect(()=>{
        SearchApi('pasta')
    },[])

    return[SearchApi,results,errorMessage];
}