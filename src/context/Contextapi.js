import React,{useState,useEffect,createContext} from "react";
import {fetchData} from '../utils/api.js';
export const Context=createContext();

export const Appcontext=(props)=>{
    const [loading,setLoading]=useState(false);
    const [searchResult,setSearchResult]=useState([]);
    const [selectCategories,setselectCategories]=useState("New");
    const [mobileMenu,setMobileMenu]=useState(false);

    useEffect(()=>{
        fetchCategoryData(selectCategories);
     
    },[selectCategories])

    const fetchCategoryData=(e)=>{
        setLoading(true)
        fetchData(`search/?q=${e}`).then(({contents})=>{
            console.log(contents);
            setLoading(false);
            setSearchResult(contents);
        })

    }

    return(
        <>
        <Context.Provider value={{
            loading,
            setLoading,
            searchResult,
            setSearchResult,
            selectCategories,setselectCategories,
            mobileMenu,setMobileMenu
        }}>
            {props.children}
        </Context.Provider>
        </>
    )
    

}