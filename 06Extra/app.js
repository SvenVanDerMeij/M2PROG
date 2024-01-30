let bruh = [["boompie", "#00FF00", "0.6"],["huisie", "#FF0000", "2.4"]]
// 5816810009124719168365181756782 dit getal is een decimale vertaling van de binairy code voor de tekst: "ik wil janken", bedankt voor het luisteren naar mijn ted talk
class App
{
    
    runApplication()
    {
        
  //    let lijst = [0, 2]
  //    lijst.push(Math.random()*5)
  //    let random1 = Math.round(Math.random()*5)+2
  //    let random2 = Math.round(Math.random()*5)+2
  //   for (let xa = 0; xa < random1; xa++){
  //    for (let ya = 0; ya < random1; ya++){
  //        this.tekenHuis(xa*Math.random()*900,ya*Math.random()*900)
  //    }
  //   }
  //   for (let xb = 0; xb < random2; xb++){
  //    for (let yb = 0; yb < random2; yb++){
  //        this.tekenKerstboom(xb*Math.random()*900,yb*Math.random()*900)
  //    }
  //   }
  //   this.ikWilNaarHuis()
        for (let g = 0; g <10; g++){
           let item = [bruh[Math.round(Math.random())][0],bruh[Math.round(Math.random())][1],bruh[Math.round(Math.random())][2]]
           if (item[0] == "boompie"){
            this.tekenKerstboom(Math.round(Math.random()*500),Math.round(Math.random()*500), item[1], item[2])
           } else if (item[0] == "huisie"){
            this.tekenHuis(Math.round(Math.random()*500),Math.round(Math.random()*500), item[1], item[2])
           }
           console.log(item)
        }
    }
    tekenHuis(x,y,k, m){
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = k;
        g.moveTo(m*30+x, m*10+y);
        g.lineTo(m*70+x, m*20+y);
        g.lineTo(m*60+x, m*40+y);
        g.lineTo(m*20+x, m*30+y);
        g.lineTo(m*30+x, m*10+y);
        g.closePath()
        g.stroke()
        g.fill()
       // let f = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "#888888";
        g.moveTo(m*80+x,m*30+y);
        g.lineTo(m*70+x,m*20+y);
        g.lineTo(m*60+x,m*40+y)
        g.lineTo(m*80+x,m*30+y)
        g.closePath()
        g.stroke()
        g.fill()
       // let h = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "#888888";
        g.moveTo(m*80+x,m*50+y)
        g.lineTo(m*60+x,m*60+y)
        g.lineTo(m*60+x,m*40+y)
        g.lineTo(m*80+x,m*30+y)
        g.closePath()
        g.stroke()
        g.fill()
       // let i = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "#BBBBBB";
        g.moveTo(m*20+x,m*30+y)
        g.lineTo(m*60+x,m*40+y)
        g.lineTo(m*60+x,m*60+y)
        g.lineTo(m*20+x,m*50+y)
        g.lineTo(m*20+x,m*30+y)
        g.closePath()
        g.stroke()
        g.fill()
       // let j = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "#6666FF"
        g.moveTo(m*25+x,m*35+y)
        g.lineTo(m*34+x,m*38+y)
        g.lineTo(m*34+x,m*47+y)
        g.lineTo(m*25+x,m*44+y)
        g.lineTo(m*25+x,m*35+y)
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
        g.lineTo(85, 5)
        g.lineTo(84, 5)
        g.closePath()
        g.stroke()
        g.fill()
     //   let n= canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "#000000"
        g.moveTo(93, 5)
        g.lineTo(93, 10)
        g.lineTo(94, 10)
        g.lineTo(94, 5)
        g.lineTo(93, 5)
        g.closePath()
        g.stroke()
        g.fill()
     //   let o = canvas.getContext("2d")
        g.beginPath()
        g.fillStyle = "#BB7700"
        // tussen 20 50 en 60 60
        g.moveTo(m*50+x, m*57+y)
        g.lineTo(m*40+x, m*55+y)
        g.lineTo(m*40+x, m*40+y)
        g.lineTo(m*50+x, m*42 +y)
        g.lineTo(m*50+x, m*57+y)
        g.closePath()
        g.stroke()
        g.fill()
    }
    tekenKerstboom(x, y, k, m)
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "#995500"
        g.moveTo(m*45+x, y+95*m)
        g.lineTo(m*55+x, y+95*m)
        g.lineTo(m*55+x, y+35*m)
        g.lineTo(m*45+x, y+35*m)
        g.lineTo(m*45+x, y+95*m)
        g.closePath()
        g.stroke()
        g.fill()
        g.beginPath()
        g.fillStyle = k
        g.moveTo(m*50+x, y+10*m)
        g.lineTo(m*70+x, y+30*m)
        g.lineTo(m*55+x, y+30*m)
        g.lineTo(m*75+x, y+50*m)
        g.lineTo(m*60+x, y+50*m)
        g.lineTo(m*80+x, y+70*m)
        g.lineTo(m*20+x, y+70*m)
        g.lineTo(m*40+x, y+50*m)
        g.lineTo(m*25+x, y+50*m)
        g.lineTo(m*45+x, y+30*m)
        g.lineTo(m*30+x, y+30*m)
        g.lineTo(m*50+x, y+10*m)
        g.closePath()
        g.stroke()
        g.fill()
        
        for (let i = 0; i <Math.round(Math.random()*6)+11; i++){
            g.beginPath()
            g.fillStyle = "#"+(Math.round((Math.random()*255)).toString(16))+(Math.round((Math.random()*255)).toString(16))+(Math.round((Math.random()*255)).toString(16));
        g.arc(x+(Math.random()*60*m)+20, y+(Math.random()*50*m)+20, 4*m, 0, 2* Math.PI);
        g.stroke();
        g.fill()
        }
        
        
       
        g.beginPath()
        g.fillStyle = ("#FFFF00")
        g.moveTo(m*50+x, y+(m*3))
        g.lineTo(m*52+x, y+(m*9))
        g.lineTo(m*60+x, y+(m*9))
        g.lineTo(m*54+x, y+(m*13))
        g.lineTo(m*57+x, y+(m*19))
        g.lineTo(m*50+x, y+(m*14))
        g.lineTo(m*43+x, y+(m*19))
        g.lineTo(m*46+x, y+(m*13))
        g.lineTo(m*40+x, y+(m*9))
        g.lineTo(m*48+x, y+(m*9))
        g.lineTo(m*50+x, y+(m*3))
        g.stroke()
        g.fill()
        
    }
   
  //  ikWilNaarHuis() {
   //   bruh.push(Math.round((Math.random()*5)+1))
   //   console.log(bruh)
 //   }
}

let app = new App();
app.runApplication();
console.log(Math.round((Math.random()*55)+200))