class App
{
    runApplication()
    {
        this.greeting="starting up"
        this.appNaam = "bub"
        this.version = "0.9"
        this.versionDate = new Date("2023-11-30")
        this.author = "Svennie van der Meij"
        this.copyright = "SvennieIncorporated"
        this.distributeur = "Disney"
        this.darkMode = false
        let A = true
        let zin = "pasta fazool, I am a fool"
        let nummer = 5
        console.log(A)
        console.log(zin)
        console.log(nummer)
        this.B = false
        this.gezegde = "pizza gabod, I am a god"
        this.getal = 42
    }
}

let app = new App();
app.runApplication();
console.log("appNaam: " + app.appNaam);
        console.log(app.greeting)
        console.log("app versie: " +app.version)
        console.log("app versie datum: "+app.versionDate)
        console.log("app schrijver: "+app.author)
        console.log("app copyright: "+app.copyright)
        console.log("app uitgever: " +app.distributeur)
        console.log("dark mode: " + app.darkMode)
        console.log(app.B)
        console.log(app.gezegde)
        console.log(app.getal)