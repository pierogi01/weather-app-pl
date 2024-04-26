import React from 'react'
import { useState, useEffect } from "react"
import Forcast5days from './Forcast5days'

export default function Forecast(props){

    const [isLoading, setIsLoading] = useState(true)
    const [cityForecast, setCityForcast] = useState([])
    const cityTimeData = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&appid=${props.apiKey}&units=Metric`

    useEffect(function (){
        function fetchDayData(){
           fetch(cityTimeData)
           .then(res => res.json())
           .then(data => 
               setCityForcast(data))
               setIsLoading(false)
       }
       fetchDayData()
   }, [])

   if(isLoading){
        return "Loading"
   }

const forecastElement = []
const dayForecast = []
const iconForecast = []
let j = 0

function newArr(){
   for(let i=0;i<cityForecast?.list?.length;i++){
    if(new Date(cityForecast.list[i].dt * 1000).getHours() === 11){
        iconForecast[j] = cityForecast.list[i].weather[0].icon
        dayForecast[j] = new Date(cityForecast.list[i].dt * 1000)
        forecastElement[j] = cityForecast.list[i].main.temp
        j++
    }
   }
}
newArr()
console.log(cityForecast)

    return (
        <div>
            <div id="forecast--root">
                <Forcast5days weekdayF={new Date(dayForecast[0]).toLocaleString('pl-pl', {weekday:'long'})}
                            iconF={iconForecast[0]}
                            tempForecast={forecastElement[0]} 
                            dayF/>
                <Forcast5days weekdayF={new Date(dayForecast[1]).toLocaleString('pl-pl', {weekday:'long'})}
                            iconF={iconForecast[1]}
                            tempForecast={forecastElement[1]} />
                <Forcast5days weekdayF={new Date(dayForecast[2]).toLocaleString('pl-pl', {weekday:'long'})}
                            iconF={iconForecast[2]}
                            tempForecast={forecastElement[2]} />
                <Forcast5days weekdayF={new Date(dayForecast[3]).toLocaleString('pl-pl', {weekday:'long'})}
                            iconF={iconForecast[3]}
                            tempForecast={forecastElement[3]} />
                <Forcast5days weekdayF={new Date(dayForecast[4]).toLocaleString('pl-pl', {weekday:'long'})}
                            iconF={iconForecast[4]}
                            tempForecast={forecastElement[4]} />
            </div>
            <footer className="footer">
                <a></a>
            </footer>
         </div>
    )
}
