import React ,{useState,useEffect,useContext}from 'react';
import {useParams} from "react-router-dom";
import {fetchData} from "../utils/api";
import {Context} from "../context/Contextapi";
import LeftNav from "./LeftNav";
import SearchResultVideo from "./SearchResultVideo";


const SearchResult = () => {
  const [result,setResult]=useState();
  const {searchQuery}=useParams();
  const {setLoading}=useContext(Context);
  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
  },[searchQuery]);

  const fetchSearchResults=()=>{
    setLoading(true);
    fetchData(`search/?q=${searchQuery}`).then((res)=>{
      console.log(res);
      setResult(res?.contents);
      setLoading(false);
    });
  };
  return (
    <div className='flex flex-row h-[calc(100%-56px)]  '>
      <LeftNav/>
      <div className="flex w-[calc(100%-240px)] bg-black overflow-y-auto xs:w-full">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.map((item)=>{
            if(item?.type!=="video") return false;
            let video=item?.video;
            return(
              <SearchResultVideo key={video?.videoId} video={video}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchResult
