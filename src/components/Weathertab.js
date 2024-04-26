import React, { useEffect, useState, useSyncExternalStore } from "react"
import { Outlet } from "react-router-dom"
import Forecast from "./Forecast"

export default function Weathertab(props){
    
    const [cityData, setCityData] = useState({})
    const [loading, setLoading] = useState(true)
    const apiKey = "3572aae6c8d8babf8ea06d27f2dfa491"
    const cityWeatherData = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=Metric&appid=${apiKey}`
    
    useEffect(function(){
        
        async function fetchData(){
            try{
            await fetch(cityWeatherData)
                .then(res=> res.json())
                .then(data => 
                    setCityData(data))
                    setLoading(false)
                           
        }
        catch(e){
            console.log(e)
            console.log("Error occured")
            if(cityData.cod === 404){
                console.log(cityData.message)
            }
        }
        
        }
        fetchData()
    }, [])


    if(loading){
        console.log("loading data")
        return "loading data"
    }

    console.log(cityData)
    console.log(cityData.cod)
    if(cityData.cod == 404){
        console.log(cityData.message)
        return "Błąd 404. Nie znaleziono miasta!"
    }
    if(cityData.cod == 429){
        console.log(cityData.message)
        return "No more API requests for today :("
    }

    const date = new Date (cityData.dt * 1000)
    let weekday = new Date(date).toLocaleString('pl-pl', {weekday:'long'});

    return(
        <div className="weather--tab">
            <img className="weather--icon" 
                    src={`https://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`}
                    alt="sun behind a cloud" />
            
            <h1 className="weather--tab--degrees">{Math.floor(cityData?.main?.temp)}°C</h1>
            <h3 className="weather--tab--city">{props.city[0].toUpperCase()+props.city.slice(1)}</h3>
            <div className="weather--min--max--temp">
                <div className="weather--block">
                    <label>MIN TEMP</label>
                    <p className="weather--min--max" id="weather--min">{Math.floor(cityData?.main?.temp_min)}°C</p>
                </div>
                <div className="weather--block">
                    <label>MAX TEMP</label>
                    <p className="weather--min--max" id="weather--max">{Math.floor(cityData?.main?.temp_max)}°C</p>  
                </div>
            </div>
            <div className="weather--more--info">
                <div className="weather--more--i">
                    <a>WIATR:</a>
                    <a>{cityData?.wind?.speed}</a>
                </div>
                <div className="weather--more--i">
                    <a>WILGOTNOŚĆ:</a>
                    <a>{cityData?.main?.humidity}</a>
                </div>
                <div className="weather--more--i">
                    <a>CIŚNIENIE:</a>
                    <a>{cityData?.main?.pressure}</a>
                </div>
            </div>

            <Forecast day={date.getDate()}
                      month={date.getMonth()+1}
                      year={date.getFullYear()}
                      icon={cityData?.weather[0]?.icon}
                      weekday={weekday}
                      apiKey={apiKey}
                      lat={cityData?.coord?.lat}
                      lon={cityData?.coord?.lon}/>
            <Outlet />
        </div>
    )
}

