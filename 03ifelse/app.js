
class App {
    runApplication() {
        let title = document.getElementById("newstitle")
        console.log(title)
        console.log("hello world")
        let random = Math.random()
        let random2 = Math.random()
        let random3 = Math.random()
        if (random >= 0.5 && random < 0.8) {
            title.style.backgroundColor = "#FF00FF"
        } else if (random < 0.5) {
            title.style.backgroundColor = "#55FF55"
        } else {
            title.style.backgroundColor = "#FF6392"
        }
        let newsitem1 = document.getElementsByClassName("gamenews")[0]
        console.log(newsitem1)
        let newsitem2 = document.getElementsByClassName("gamenews")[1]
        console.log(newsitem2)
        if (random2 < 0.5) {
            newsitem1.style.backgroundColor = "#FF0000"
        } else {
            newsitem1.style.backgroundColor = "#FFFF00"
        }
        if (random3 < 0.5) {
            newsitem2.style.backgroundColor = "#00FF00"
        } else {
            newsitem2.style.backgroundColor = "#BB00BB"
        }
    }
}

let app = new App();
app.runApplication();