class Dino {
    constructor(naam, leeftijd, vleeseter) {
        this.naam = naam;
        this.leeftijd = leeftijd
        this.vleeseter = vleeseter
    }
    eatFood(foodToEat) {
        foodToEat.leeft = false;
        this.honger = false;
        console.log("ik ben een " + this.naam)
            console.log("ik eet nu " + foodToEat.naam)
            
        console.log("mijn honger: " + this.honger)
    }
}

class Plant {
    constructor(naam,leeft){
        this.naam = naam
        this.levend = leeft
    }
}
class App {
    runApplication() {
        let dino = new Dino("Trex", 20, true);
        let plantenEter = new Dino("Triceratops", 20, false)
        let gras = new Plant("gras", true)
        let struik = new Plant("struik", true)
        console.log(dino)
        console.log(plantenEter);
        console.log(gras)
        console.log(struik)

        
        plantenEter.eatFood(gras)
        plantenEter.eatFood(struik)
        dino.eatFood(plantenEter);
        console.log(dino.naam + " is " + dino.leeftijd + " jaar oud.")
        console.log("leeft " + plantenEter.naam + "? " + plantenEter.leeft)
        console.log("en is " + dino.naam + " een vleeseter?" + dino.vleeseter)


    }
}

let app = new App();
app.runApplication();