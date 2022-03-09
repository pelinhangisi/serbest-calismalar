function generate () {

    let hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
    let newColor="#";

    for (let i=0; i<6; i++){
        let x=Math.round(Math.random()* 14);
        let y=hexValues[x];
        newColor+=y;
    }

    document.getElementById("container").style.backgroundColor=newColor;
    document.getElementById("output").innerHTML = newColor;

}

generate();