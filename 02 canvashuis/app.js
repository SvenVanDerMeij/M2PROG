class App
{
    runApplication()
    {
       
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.fillStyle = "#FF00FF"
        g.fillRect(0,0,canvas.clientWidth,canvas.height);
        g.fillStyle = "#70A000"
        g.fillRect(0,0,10,10)
        
     console.log(canvas)
    }
}

let app = new App();
app.runApplication();
