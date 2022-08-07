import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const DataContext = createContext();//to provide values by ourselves so that we dont have to use props
export const DataContextprovider=(props)=>{
const [results,nresult]=useState([]);
const [isLoad,nload]=useState(false);
const [srch,nsrch]=useState('Virat Kohli');
const getResult= async (type)=>{
    //type-img,videos,news
    nload(true);
    const res=await fetch(`https://google-search3.p.rapidapi.com/api/v1${type}`,{
        method:'GET',
        headers: {
            'X-RapidAPI-Key': '52c5dc6fecmsh26510aebfd5748cp17124djsne33dca847ce8',
		'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
          }
    });
    const data=await res.json();
    // console.log(data);
    if(type.includes('/news')) {
        nresult(data.entries);
    }
    else if(type.includes('/image')) {
       nresult(data.image_results);
    }
    else{
        nresult(data.results);
    }
   
    nload(false);
   
}
return(
   < DataContext.Provider value={{getResult,results,isLoad,srch,nsrch}}>
    {props.children}
   </DataContext.Provider>
)
}
export const useDataContext=()=> useContext(DataContext);// to use or consumethe values provided by context