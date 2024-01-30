 class App
{
    runApplication()
    {
        let mijnH1 = document.getElementById("headerID")
        mijnH1.innerText = "bloons";
            let headers0 = document.getElementsByClassName("vibo gam")
        for (let sigma = 0; sigma< headers0.length; sigma++){
            headers0[sigma].innerText = "bloons"
        }
        headers0[0].innerText = "Bloons1 ";
        headers0[1].innerText = "BTD2";
        headers0[2].innerText = "Bloons pop 3";
        let headers = document.getElementsByTagName("h1")
        for (let a = 0; a< headers.length; a++){
            console.log(headers[a])
        }
        let nummers = [3, 2, 5]
       let muziekmensen = ["Elton John", "lil nas X", "Britney Spears"]
       for (let i = 0; i < muziekmensen.length; i++){
       const element = muziekmensen[i];
       console.log(element)
    }
    

    console.log(nummers)
    for (let j = 0; j <nummers.length; j++){
        const element2 = nummers[j]
        console.log((element2+1))
    }
    for (let k = 0; k <nummers.length; k++){
        console.log(nummers[k]+ ": "+ muziekmensen[k])
    }
    nummers.push(1, 4, 6)
    muziekmensen.push("ABBA", "Maroon 5", "Mijn vader")
    for (let l = 0; l <nummers.length; l++){
        console.log(nummers[l]+ ": "+ muziekmensen[l])
    }
    let indexToRemove = muziekmensen.indexOf("Britney Spears")
    muziekmensen.splice(indexToRemove,1)
    let indexToRemove2 = muziekmensen.indexOf( "Mijn vader")
    muziekmensen.push("Ron van Zalmsaus", "Vieze asbak")
    muziekmensen.splice(indexToRemove2,1)
    for (let l = 0; l <muziekmensen.length; l++){
        console.log(nummers[l]+ ": "+ muziekmensen[l])
    }
}

}

let app = new App();
app.runApplication();