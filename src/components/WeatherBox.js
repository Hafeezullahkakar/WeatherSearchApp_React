import React , {useState, useEffect} from 'react';
import { FaStreetView } from "react-icons/fa";

function WeatherBox() {
    const[city , setCity] = useState(null)
    const[search , setSearch] = useState("")
    useEffect(()=>{      
        const  fetchApi = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${'678c84818da9168507033cf50a8c7d93'}`
             const response =  await fetch(url);
             const json = await response.json();
             setCity(json.main)                     
        }
        fetchApi() 
    },[search] )
 
    return (
        <>
        <div className = 'box-wrapper'>
            <h2>Weather Search App</h2>
            <div className = 'input'> 
                 <input type = 'search'
                 className ='inputField'
                 placeholder = 'Search weather...'
                 onChange ={(e)=> {setSearch(e.target.value)}}
                 />     
                
            </div>   
        {
            !city ? ( <p>City does not exits....</p>) : (<>
            <div className = 'info'>
            <h2 className = 'location'><FaStreetView /> {search}</h2>
            <h1 className = 'temperature'>{city.temp}<span>&#8451;</span></h1>
            <h3 className = 'tempminmax'>Min: {city.temp_min}<span>&#8451;</span>| Max:  {city.temp_max}<span>&#8451;</span></h3>
            </div>
             </>)
            
        }                  
        </div>
        </>
    );
}

export default WeatherBox;