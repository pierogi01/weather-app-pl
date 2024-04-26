import React from "react"
import searchIcon from "../assets/search.png"
import Weathertab from "./Weathertab";


export default function Searchbar(props){
    return(
        <form onSubmit={props.onSubmit} className="searchbar">
            <input 
                id="srbar"
                className="searchbar--input" 
                placeholder="Wyszukaj miasto..." 
                type="text"
                name="cityInput"
                onChange={props.onChange}
                value={props.value}
                />
            <div className="searchbar--search--0">
                <img type="submit" className="searchbar--search" src={searchIcon} onClick={props.onSubmit}/>
            </div>
            
        </form>
    )
}