class User
{
    constructor(name) {
        this.name = name
        
    }
    wieBenIk() {
        console.log(this.name) 
        
    }
}
        class App
{
    runApplication()
    {
        console.log("hello world")
       let user1 = new User("Sven");
       let user2 = new User("Emiel");
       let user3 = new User("Evert");
       let user4 = new User("Anthony");
       let user5 = new User("Tyler");
       let user6 = new User("Dragan");
        
       user6.wieBenIk();
       user5.wieBenIk();
       user2.wieBenIk();
       user3.wieBenIk();
       user1.wieBenIk();
       user6.wieBenIk();
       user4.wieBenIk();
       user2.wieBenIk();
       user3.wieBenIk();
       user2.wieBenIk();

    //Ik had ze allemaal goed omdat ik het cijfer met het persoon nog onthield
     
    }
}

let app = new App();
app.runApplication();