class App
{
    runApplication()
    {
       
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "#FF0000";
        g.moveTo(30, 10);
        g.lineTo(70, 20);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.lineTo(30,10);
        g.closePath()
        g.stroke()
        g.fill()
        let f = canvas.getContext("2d");
        f.beginPath()
        f.fillStyle = "#888888";
        f.moveTo(80,30);
        f.lineTo(70,20);
        f.lineTo(60,40)
        f.lineTo(80,30)
        f.closePath()
        f.stroke()
        f.fill()
        let h = canvas.getContext("2d");
        h.beginPath()
        h.fillStyle = "#888888";
        h.moveTo(80,50)
        h.lineTo(60,60)
        h.lineTo(60,40)
        h.lineTo(80,30)
        h.closePath()
        h.stroke()
        h.fill()
        let i = canvas.getContext("2d");
        i.beginPath()
        i.fillStyle = "#BBBBBB";
        i.moveTo(20,30)
        i.lineTo(60,40)
        i.lineTo(60,60)
        i.lineTo(20,50)
        i.lineTo(20,30)
        i.closePath()
        i.stroke()
        i.fill()
        let j = canvas.getContext("2d");
        j.beginPath()
        j.fillStyle = "#6666FF"
        j.moveTo(25,35)
        j.lineTo(34,38)
        j.lineTo(34,47)
        j.lineTo(25,44)
        j.lineTo(25,35)
        j.closePath()
        j.stroke()
        j.fill()
        let k = canvas.getContext("2d");
        k.beginPath()
        k.fillStyle = "#FFBF00"
        k.arc(89, 11, 10, 0, 2* Math.PI);
        k.stroke();
        k.fill()
        let l = canvas.getContext("2d");
        l.beginPath()
        l.fillStyle = "#000000"
        l.moveTo(85, 12)
        l.lineTo(93,12)
        l.arc(89,12,6,0, Math.PI)
        l.stroke()
        l.fill()
        let m = canvas.getContext("2d");
        m.beginPath()
        m.fillStyle = "#000000"
        m.moveTo(84, 5)
        m.lineTo(84, 10)
        m.lineTo(85, 10)
        m.lineTo(85,5)
        m.lineTo(84,5)
        m.closePath()
        m.stroke()
        m.fill()
        let n= canvas.getContext("2d");
        n.beginPath()
        n.fillStyle = "#000000"
        n.moveTo(93, 5)
        n.lineTo(93, 10)
        n.lineTo(94, 10)
        n.lineTo(94,5)
        n.lineTo(93,5)
        n.closePath()
        n.stroke()
        n.fill()
        let o = canvas.getContext("2d")
        o.beginPath()
        o.fillStyle = "#BB7700"
        // tussen 20 50 en 60 60
        o.moveTo(50, 57)
        o.lineTo(40, 55)
        o.lineTo(40, 40)
        o.lineTo(50, 42)
        o.lineTo(50, 57)
        o.closePath()
        o.stroke()
        o.fill()
    


    }
}

let app = new App();
app.runApplication();
