class Dino
{
    constructor(naam, leeftijd, vleeseter)
    {
        this.naam = naam;
        this.leeftijd = leeftijd
        this.vleeseter = vleeseter
    }
    eatFood(foodToEat)
    {
        foodToEat.leeft=false;
        this.honger=false
        console.log("ik ben een " + this.naam)
        console.log("mijn honger: " + this.honger)
    }
}
 class App
{
    runApplication()
    {
       let dino = new Dino("Trex",20,true);
       let plantenEter = new Dino("Triceratops",20,false)
       console.log(dino)
       console.log(plantenEter);

       dino.eatFood(plantenEter);
       console.log(dino.naam + " is " + dino.leeftijd + " jaar oud.")
       console.log("leeft " + plantenEter.naam + "? "+ plantenEter.leeft)
       console.log("en is "+ dino.naam+" een vleeseter?" + dino.vleeseter)
       
       
    }
}

let app = new App();
app.runApplication();