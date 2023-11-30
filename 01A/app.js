
        class App
{
    runApplication()
    {
        let appNaam = "bub"
        let version = "0.9"
        let versionDate = new Date("2023-11-30")
        let author = "Svennie van der Meij"
        let copyright = "SvennieIncorporated"
        let distributeur = "Disney"
        let darkMode = false
        console.log(appNaam);
        console.log(version)
        console.log(versionDate)
        console.log(author)
        console.log(copyright)
        console.log(distributeur)
        console.log(darkMode)
    }
}

let app = new App();
app.runApplication();