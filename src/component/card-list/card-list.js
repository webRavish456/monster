import React,{useState,useEffect} from "react";
import axios from "axios";
function CardList()
{
    

     const [users,setusers] = useState([{
        id:"",
        name:""
     }]);

     const [search,setsearch]=useState('')
    
    

      useEffect(()=>
      {
          const fetch = async()=>
          {
            const {data}= await axios.get("https://jsonplaceholder.typicode.com/users");
             setusers(data);
          }
          fetch();
      },[])
    return (
        <>  
         <input type="search" className="search-box" placeholder="search monsters" onChange={(e)=>setsearch(e.target.value)} />
          <div className="card-list">
              {
         users.filter((val)=>
         {
            if(search=="")
            {
               return val
            } else if ( val.name.toLowerCase().includes(search.toLowerCase()))
            {
                return val
            }
         }).map((cur)=>
         {
             return (
              <>
               <div className="card-container" key={cur.id}>
               <img src={`https://robohash.org/${cur.id}?set=set2&size=180x180`} alt={cur.name}/>
                <h1 style={{fontSize:"30px"}}>{cur.name}</h1>
                <p>{cur.email}</p>
                </div>
              </>
             )
         })
      }
      </div>
        </>
    )
}


export default CardList 