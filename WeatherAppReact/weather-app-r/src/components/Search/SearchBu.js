import React, {useState} from "react";

function SearchBu({belirtHavaDurumu}) {
    const api = {
        key: "bb6d7e44ef60c14511d8b9eb884282c6",
        base: "https://api.openweathermap.org/data/2.5/weather",
    };

    const [araParametre,belirtAraParametre] = useState("");

    const ara = (e) => {
        if (e.key === "Enter") {
        fetch(
            `${api.base}?q=${araParametre}&units=metric&lang=tr&appid=${api.key}`
        )
            .then((veri) => veri.json())
            .then((sonuc) => {
            belirtAraParametre("");
            belirtHavaDurumu(sonuc);
            });
        }
    };
    

    return (
        <div className="search">
            <input 
            type="text" 
            className="search-input" 
            placeholder="Şehir İsmi"
            onChange= {(e) => belirtAraParametre(e.target.value)}
            value= {araParametre}
            onKeyPress={ara}
            />
        </div>
    )
}

export default SearchBu;

