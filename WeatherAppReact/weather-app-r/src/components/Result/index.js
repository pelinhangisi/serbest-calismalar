import React from "react";

function index({weather}){
    return (
        <>
        {typeof weather.main != "undefined" && (
            <div className="result">
            <div className="city">{weather.name}, {weather.sys.country}</div>
            <div className="details">
                <div className="degree">{Math.round(weather.main.temp)} °c</div>
                <div className="statu">{weather.weather[0].description}</div>
            </div>
        </div>
        )}
        
        </>
    )
}

export default index;