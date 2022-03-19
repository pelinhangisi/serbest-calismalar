import yagmurlu from "../../Pictures/rainy.jpg";
import bulutlu from "../../Pictures/bulutlu.jpg";
import sisli from "../../Pictures/sisli.jpg";
import karli from "../../Pictures/karli.jpg";
import gokkusagi from "../../Pictures/rainbow.jpg";
import firtinali from "../../Pictures/storm.jpg";
import gunesli from "../../Pictures/sunny.jpg";


function ResimCek({durum}){
    switch(durum) {
        case "Rain":
    return <img className="background-img" src={yagmurlu} alt="yagmurlu" />;
    case "Drizzle":
    return <img className="background-img" src={yagmurlu} alt="yagmurlu" />;
    case "Clear":
    return <img className="background-img" src={gunesli} alt="gunesli" />;
    case "Mist":
    return <img className="background-img" src={sisli} alt="sisli" />;
    case "Snow":
    return <img className="background-img" src={karli} alt="karli" />;
    case "Storm":
    return <img className="background-img" src={firtinali} alt="firtinali" />;
    case "Clouds":
    return <img className="background-img" src={bulutlu} alt="bulutlu" />;
    default:
    return <img className="background-img" src={gokkusagi} alt="gokkusagi" />;
    }
}

export default ResimCek;