import React , {useState, useEffect} from 'react';
import { FaStreetView } from "react-icons/fa";

function WeatherBox() {
    const[city , setCity] = useState(null)
    const[search , setSearch] = useState("Quetta")
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSearch(e.target.value);
    }
    useEffect(()=>{      
        const  fetchApi = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${'678c84818da9168507033cf50a8c7d93'}`
             const response =  await fetch(url);
             const json = await response.json();
             console.log(json)
             console.log(city)
             setCity(json)                     
        }
        fetchApi() 
    },[handleSubmit] )
 
    return (
        <>
        <div className = 'box-wrapper'>
            <div className = 'input'> 
                 <input type = 'search'
                 className ='inputField'
                 placeholder = 'Search weather...'/>     
                 <button type= 'submit' onClick ={handleSubmit}>Search</button>      
            </div>   
        {
            !city ? ( <p>City does not exits....</p>) : (<>
            <div className = 'info'>
            <h2 className = 'location'><FaStreetView /> {search}</h2>
            <h1 className = 'temperature'>{city.main.temp}<span>&#8451;</span></h1>
            <h3 className = 'tempminmax'>Min: {city.main.temp_min}<span>&#8451;</span>| Max:  {city.main.temp_ma}<span>&#8451;</span></h3>
            </div>
             </>)
            
        }                  
        </div>
        </>
    );
}

export default WeatherBox;