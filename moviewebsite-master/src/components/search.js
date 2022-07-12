import { useState,useRef } from "react";
import MovieList from "./movielist";


const Search = () => {
    
    const [item,setitem]=useState([]);
    const searchref=useRef();
    const onsubmit=async ()=>{
        const movie=searchref.current.value;
        if(movie){
        await fetch(`https://www.omdbapi.com/?apikey=2ac24055&s=${movie}`)
        .then((res)=>res.json())
        .then((data)=>setitem(data.Search));
        }
        console.log(item)
       
}

    return ( 
       <>
        <div className="search_bar">
        <h1>Movie Search</h1>
        <input type="search" placeholder="Searchmovie" ref={searchref}/>
        <button  onClick={onsubmit}>Search</button>
        </div>
        {item?.length?<MovieList items={item}/>:<p className="no_movie"> NO Movies Searched</p>}
    </> 
     );
}
 
export default Search;