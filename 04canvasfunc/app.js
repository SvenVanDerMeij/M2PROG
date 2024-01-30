class App
{
    runApplication()
    {
       
    
        this.tekenHuis(15, 300)
        this.tekenHuis(100, 200)
        this.tekenKerstboom(400,700)
        this.tekenKerstboom(23, 79)
        this.tekenKerstboom(80, 340)
        this.tekenKerstboom(160, 220)
    }
    tekenHuis(x,y){
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "#FF0000";
        g.moveTo(30+x, 10+y);
        g.lineTo(70+x, 20+y);
        g.lineTo(60+x,40+y);
        g.lineTo(20+x,30+y);
        g.lineTo(30+x,10+y);
        g.closePath()
        g.stroke()
        g.fill()
       // let f = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "#888888";
        g.moveTo(80+x,30+y);
        g.lineTo(70+x,20+y);
        g.lineTo(60+x,40+y)
        g.lineTo(80+x,30+y)
        g.closePath()
        g.stroke()
        g.fill()
       // let h = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "#888888";
        g.moveTo(80+x,50+y)
        g.lineTo(60+x,60+y)
        g.lineTo(60+x,40+y)
        g.lineTo(80+x,30+y)
        g.closePath()
        g.stroke()
        g.fill()
       // let i = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "#BBBBBB";
        g.moveTo(20+x,30+y)
        g.lineTo(60+x,40+y)
        g.lineTo(60+x,60+y)
        g.lineTo(20+x,50+y)
        g.lineTo(20+x,30+y)
        g.closePath()
        g.stroke()
        g.fill()
       // let j = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "#6666FF"
        g.moveTo(25+x,35+y)
        g.lineTo(34+x,38+y)
        g.lineTo(34+x,47+y)
        g.lineTo(25+x,44+y)
        g.lineTo(25+x,35+y)
        g.closePath()
        g.stroke()
        g.fill()
       // let k = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "#FFBF00"
        g.arc(89, 11, 10, 0, 2* Math.PI);
        g.stroke();
        g.fill()
     ///   let l = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "#000000"
        g.moveTo(85, 12)
        g.lineTo(93,12)
        g.arc(89,12,6,0, Math.PI)
        g.stroke()
        g.fill()
     //   let m = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "#000000"
        g.moveTo(84, 5)
        g.lineTo(84, 10)
        g.lineTo(85, 10)
        g.lineTo(85,5)
        g.lineTo(84,5)
        g.closePath()
        g.stroke()
        g.fill()
     //   let n= canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "#000000"
        g.moveTo(93, 5)
        g.lineTo(93, 10)
        g.lineTo(94, 10)
        g.lineTo(94,5)
        g.lineTo(93,5)
        g.closePath()
        g.stroke()
        g.fill()
     //   let o = canvas.getContext("2d")
        g.beginPath()
        g.fillStyle = "#BB7700"
        // tussen 20 50 en 60 60
        g.moveTo(50+x, 57+y)
        g.lineTo(40+x, 55+y)
        g.lineTo(40+x, 40+y)
        g.lineTo(50+x, 42 +y)
        g.lineTo(50+x, 57+y)
        g.closePath()
        g.stroke()
        g.fill()
    }
    tekenKerstboom(x, y)
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "#995500"
        g.moveTo(x+45, y+95)
        g.lineTo(x+55, y+95)
        g.lineTo(x+55, y+35)
        g.lineTo(x+45, y+35)
        g.lineTo(x+45, y+95)
        g.closePath()
        g.stroke()
        g.fill()
        g.beginPath()
        g.fillStyle = "#009900"
        g.moveTo(x+50, y+10)
        g.lineTo(x+70,y+30)
        g.lineTo(x+55,y+30)
        g.lineTo(x+75,y+50)
        g.lineTo(x+60, y+50)
        g.lineTo(x+80, y+70)
        g.lineTo(x+20, y+70)
        g.lineTo(x+40, y+50)
        g.lineTo(x+25,y+50)
        g.lineTo(x+45, y+30)
        g.lineTo(x+30, y+30)
        g.lineTo(x+50, y+10)
        g.closePath()
        g.stroke()
        g.fill()
        
        for (let i = 0; i <Math.round(Math.random()*6)+11; i++){
            g.beginPath()
            g.fillStyle = "#"+(Math.round((Math.random()*255)).toString(16))+(Math.round((Math.random()*255)).toString(16))+(Math.round((Math.random()*255)).toString(16));
        g.arc(x+(Math.random()*60)+20, y+(Math.random()*50)+20, 4, 0, 2* Math.PI);
        g.stroke();
        g.fill()
        }
        
        
       
        g.beginPath()
        g.fillStyle = ("#FFFF00")
        g.moveTo(x+50, y+3)
        g.lineTo(x+52, y+9)
        g.lineTo(x+60, y+9)
        g.lineTo(x+54, y+13)
        g.lineTo(x+57, y+19)
        g.lineTo(x+50, y+14)
        g.lineTo(x+43, y+19)
        g.lineTo(x+46, y+13)
        g.lineTo(x+40, y+9)
        g.lineTo(x+48, y+9)
        g.lineTo(x+50, y+3)
        g.stroke()
        g.fill()
        
    }
}

let app = new App();
app.runApplication();
console.log(Math.round((Math.random()*55)+200))