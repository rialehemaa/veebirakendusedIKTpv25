function joon(){
    const canvas = document.getElementById('canvas'); //määrame canvas element
    //joon - линия
    if(canvas.getContext){
        let tx = canvas.getContext('2d'); //2d tasand
        tx.beginPath();
        tx.strokeStyle="red";
        tx.lineWidth = 3;
        tx.moveTo(50, 50); //alguspunkt
        tx.lineTo(200, 280); //lõpppunkt
        tx.stroke();
    }
}
function puhasta() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); //2d tasand
        tx.clearRect(0,0,400,400);
    }
}
function kolmnurk(){
    const canvas = document.getElementById('canvas'); //määrame canvas element
    //kolmnurk
    if(canvas.getContext){
        let tx = canvas.getContext('2d'); //2d tasand
        tx.beginPath();
        tx.fillStyle="coral";
        tx.strokeStyle="red";
        tx.lineWidth = 3;
        tx.moveTo(50, 50); //alguspunkt
        tx.lineTo(200, 280);
        tx.lineTo(30,350);
        tx.lineTo(50,50);//lõpppunkt
        tx.fill(); //taust
        tx.stroke(); //välisjoon
    }
}
function ristkylik() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    let l=document.getElementById('laius');
    let k=document.getElementById('kyrgus');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); //2d tasand
        tx.fillStyle="red";
        tx.fillRect(100,150,l.value,k.value);
    }
}
//ümberjoon - окружность
//ring - круг
function ring() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    const r=document.getElementById('raadius');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); //2d tasand
        //tx.beginPath();
        tx.strokeStyle="black";
        tx.fillStyle="yellow";
        tx.arc(100,100, r.value, 0, 2*Math.PI, true); //x,y -keskpunkt, R-raadius
        tx.fill();
        //tx.stroke();
    }
}
function pilt() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    //kolmnurk
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); //2d tasand
        const fail=new Image();
        fail.src="https://picsum.photos/200/300?random=1";
        fail.onload=()=>{
            tx.drawImage(fail, 50, 50, 100, 100);
        }
    }
}

//auto - машинка
function kabiin() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    //kabiin - кабина
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); //2d tasand
        tx.beginPath();
        tx.fillStyle="lightskyblue";
        tx.strokeStyle="black";
        tx.lineWidth = 2;
        tx.fillRect(120,110,100,40); //taust
        tx.strokeRect(120,110,100,40); //välisjoon
    }
}
function kere() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    //kere - кузов
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); //2d tasand
        tx.beginPath();
        tx.fillStyle="royalblue";
        tx.strokeStyle="black";
        tx.lineWidth = 2;
        tx.fillRect(80,150,180,60); //taust
        tx.strokeRect(80,150,180,60); //välisjoon
    }
}
function rattad() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    //rattad - колёса
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); //2d tasand
        tx.fillStyle="gray";
        tx.strokeStyle="black";
        tx.lineWidth = 2;
        //vasak ratas
        tx.beginPath();
        tx.arc(115,235,25,0, 2*Math.PI, true); //x,y -keskpunkt, R-raadius
        tx.fill(); //taust
        tx.stroke(); //välisjoon
        //parem ratas
        tx.beginPath();
        tx.arc(225,235,25,0, 2*Math.PI, true);
        tx.fill();
        tx.stroke();
    }
}
function veljed() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    //veljed - диски
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); //2d tasand
        tx.fillStyle="black";
        //vasak velg
        tx.beginPath();
        tx.arc(115,235,10,0, 2*Math.PI, true); //x,y -keskpunkt, R-raadius
        tx.fill();
        //parem velg
        tx.beginPath();
        tx.arc(225,235,10,0, 2*Math.PI, true);
        tx.fill();
    }
}
function tuled() {
    const canvas = document.getElementById('canvas'); //määrame canvas element
    //tuled - свет от фар
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); //2d tasand
        tx.beginPath();
        tx.strokeStyle="yellow";
        tx.lineWidth = 2;
        tx.moveTo(80,170); //alguspunkt
        tx.lineTo(30,145);
        tx.moveTo(80,170);
        tx.lineTo(25,170);
        tx.moveTo(80,170);
        tx.lineTo(35,195);
        tx.moveTo(80,170);
        tx.lineTo(50,210); //lõpppunkt
        tx.stroke();
    }
}
