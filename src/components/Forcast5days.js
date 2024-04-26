import React from "react"
import Forecast from "./Forecast"

export default function Forcast5days(props){
    return (
        <div className='forecast'>
            {/* <p>{props.dayF}.{props.monthForecast}.{props.yearForecast}</p> */}
            <p className="forecast--dniTygonia">{props.weekdayF[0].toUpperCase()+props.weekdayF.slice(1)}</p>
            <img className="forecast--icon"
                        src={`https://openweathermap.org/img/wn/${props.iconF}@2x.png`}
                        alt="" />
            <p>{Math.floor(props.tempForecast)}°C</p>
        </div>
    )
}