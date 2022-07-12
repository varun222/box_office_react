

let list=[];
const MovieList = ({items}) => {
    
    const savelocal=(object)=>{
        list.push(object);
        localStorage.setItem('items',JSON.stringify(list));
    

    }

     
    return ( 
    <div className="cards">
      { items.map((obj)=>{
         return <div className="card">
                   <img alt="movie" src={obj.Poster} />
                   <p>{obj.Title}</p>
                   <p>{obj.Type}</p>
                   <p>{obj.Year}</p>
                   <button  onClick={()=>savelocal(obj)}>Add</button>
                </div>})}
    </div>
        
  
      );
}
 
export default MovieList;