const now=new Date();

const paev=now.getDate(); //tagastab päeva
console.log("Tänane päev " +paev+ "päev");

const kuu=now.getMonth()+1; // tagastab kuu 0-11
console.log("Kuu number on: "+kuu);

const aasta=now.getFullYear(); //tagastab aasta
console.log("Aasta on: "+aasta);

const nadalapaev=now.getDay();//0-6, kus on 0-pühapäev
console.log("Nadalapaeva number on: "+nadalapaev);

function tana(){
    let vastus=document.getElementById("vastus");
    vastus.innerHTML=" Täna on "+paev+"."+kuu+"."+aasta;
}
//lisa veel getHours() getMinutes()
// ja lise veel üks funktsioon mis näitab aeg-kellaaeg

const tund=now.getHours(); //tagastab tunni
console.log("Tund on: "+tund);

const minut=now.getMinutes(); //tagastab minutid
console.log("Minutid on: "+minut);

function kellaaeg(){
    let vastus=document.getElementById("vastus");
    vastus.innerHTML=" Kell on "+tund+":"+minut;
}

//mitu päeva konsultatsiooni nädalani
const konsultatsioon=new Date(2026, 10, 2); //2.11.2026
const vahe=konsultatsioon.getTime()-now.getTime();
const konspaev=vahe/(1000*60*60*24);//sekundid*minutid*tunnid*päev

console.log("Konsultatsiooni nädalani "+konspaev.toFixed(0) +" päeva");

//nupp - Päeva konsultatsiooni nädalani
//nupp - Päeva minu sünnipäevani

function konsultatsiooniPaevad(){
    let vastus=document.getElementById("vastus");
    vastus.innerHTML=" Konsultatsiooni nädalani "+konspaev.toFixed(0)+" päeva";
}

const synnipaev=new Date(2027, 6, 17); //17.07.2027
const vahe2=synnipaev.getTime()-now.getTime();
const synnipaev2=vahe2/(1000*60*60*24);

function synnipaevaPaevad(){
    let vastus=document.getElementById("vastus");
    vastus.innerHTML=" Sünnipäevani "+synnipaev2.toFixed(0)+" päeva";
}