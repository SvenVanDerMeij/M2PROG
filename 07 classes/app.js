
class App {
    runApplication() {

    }
}
class Greet {
    constructor() {
        this.greeting = "heyyyyy"
    }
    showGreeting()
    {
        console.log("wat?patat")
    }
}
class Goodbye {
    constructor() {
        this.farewell = "joejoe"
    }
    showBye()
    {
        console.log("pardon?friet")
    }
}

let bye = new Goodbye()
let greet = new Greet()
greet.showGreeting();
bye.showBye();

greet.showGreeting();
bye.showBye();

greet.showGreeting();
bye.showBye();

console.log("greeting van buiten: "+ greet.greeting)
console.log("vaarwel: " + bye.farewell)
let app = new App();
app.runApplication();