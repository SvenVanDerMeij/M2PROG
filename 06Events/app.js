
        class App
{
    runApplication()
    {
        
        const uiButton = document.getElementById("myButton")
        uiButton.addEventListener("click", (e)=>
        { 
            const para = document.createElement("p");
            const node = document.createTextNode("This is new.");
            para.appendChild(node);
            document.body.appendChild(para);
        });
        const blons = document.getElementById("monke")
        blons.addEventListener("click", (e)=>
        { 
            const para = document.createElement("p");
            const node = document.createTextNode("aap.");
            const main = document.createElement("h1");
            const nodey = document.createTextNode("AAP.");
            const plaatje = document.createElement("img");
            plaatje.src = 'SuperLeip.jpg';
            document.body.appendChild(plaatje)
            para.appendChild(node);
            document.body.appendChild(para);
            main.appendChild(nodey)
            document.body.appendChild(main)

        });
        const uniek = document.getElementById("anders")
        uniek.addEventListener("click", (e)=>
        { 
            const para = document.createElement("a");
            const node = document.createTextNode("geinig filmpie");
            const main = document.createElement("h1");
            const nodey = document.createTextNode("WAJOOOOOOOOOO");
            para.appendChild(node);
            para.title = "my title text";
            para.href = "https://www.youtube.com/watch?v=RHdGvWXfPCM";
            document.body.appendChild(para);
            main.appendChild(nodey);
            document.body.appendChild(main)
        });
        }
        
    }


let app = new App();
app.runApplication();