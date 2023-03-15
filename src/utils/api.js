import axios from "axios";

const BASE_URL='https://youtube138.p.rapidapi.com';

const options = {
    params: { hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key':'30f43f1b7bmsh48136a60b001378p120215jsna39d16ae0cb2',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  export const fetchData=async(url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options);
    return data;

  }