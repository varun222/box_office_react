import Nav from "./navbar";

const List = () => {
    const items=JSON.parse(localStorage.getItem('items'));
    return (
        
    <div>
        <Nav />
        <div className="cards">
      { items.map((obj)=>{
         return <div className="card">
                   <img alt="movie" src={obj.Poster} />
                   <p>{obj.Title}</p>
                   <p>{obj.Type}</p>
                   <p>{obj.Year}</p>
                   
                </div>})}
    </div>
        </div>
      );
}
 
export default List;