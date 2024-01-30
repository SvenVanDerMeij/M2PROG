 class App
{
    runApplication()
    {
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
    
}
}

let app = new App();
app.runApplication();