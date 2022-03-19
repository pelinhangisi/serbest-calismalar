import React, {useState} from "react";
import "./index.css"
import Background from "./components/Background";
import Search from "./components/Search/SearchBu";
import Result from "./components/Result";

function App() {
  const [havaDurumu,belirtHavaDurumu]=useState({});
  
  return (
    <section className="uygulama">
      <Background arkaplan={havaDurumu.weather && havaDurumu.weather[0].main}/>
      <div id="title">Weather App</div>
      <Search belirtHavaDurumu={belirtHavaDurumu}/>
      <Result weather={havaDurumu}/>
    </section>
  );
}

export default App;
