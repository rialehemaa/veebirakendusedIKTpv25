//checkbox valik
function checkboxValik(){
    let vastus1=document.getElementById("vastus1");
    let js=document.getElementById("js");
    let python=document.getElementById("python");
    let java=document.getElementById("java");
    let csharp=document.getElementById("csharp");
    let php=document.getElementById("php");

    let valik="";
    if(js.checked){
        valik+=js.value +', <br>';
    }
    if(python.checked){
        valik+=python.value +', <br>';
    }
    if(java.checked){
        valik+=java.value +', <br>';
    }
    if(csharp.checked){
        valik+=csharp.value +', <br>';
    }
    if(php.checked){
        valik+=php.value +', <br>';
    }

    //tee oma valik
    if(valik==""){
        valik="Tee oma valik!";
    }

    vastus1.innerHTML="Sinu valitud programmeerimiskeeled: " + valik;
    vastus1.style.backgroundColor="lightyellow";
    return valik;
}

// textarea
function textareaValik() {
    let vastus2 = document.getElementById("vastus2");
    let textareaValue = document.getElementById("arvamus").value;

    if (textareaValue.trim() === "") {
        vastus2.innerHTML = "Palun kirjuta arvamus.";
        vastus2.style.backgroundColor = "lightyellow";
    } else {
        vastus2.innerHTML = "Sinu arvamus: " + textareaValue;
        vastus2.style.backgroundColor = "lightyellow";
    }

    return textareaValue;
}

//range
function rangeValik(){
    let vastus3=document.getElementById("vastus3");
    let tund=document.getElementById("tund");

    vastus3.innerHTML="Tegeled programmeerimisega " + tund.value + " tundi nädalas.";
    vastus3.style.backgroundColor = "lightyellow";
    return tund.value;
}

//radio valikud jah/ei
function radioValik(){
    let pilt=document.getElementById("meeldibPilt");
    let vastus4=document.getElementById("vastus4");
    let jah=document.getElementById("jah");
    let ei=document.getElementById("ei");

    let valik="";
    if(jah.checked){
        valik="Programmeerimine meeldib!";
        pilt.src="../images/smile.png";
    } else if(ei.checked){
        valik="Programmeerimine ei meeldi.";
        pilt.src="../images/kurb.png";
    }

    vastus4.innerHTML=valik;
    vastus4.style.backgroundColor = "lightyellow";
    return valik;
}

function textValik(){
    let vastus5=document.getElementById("vastus5");
    let toriistad=document.getElementById("toriistad");

    vastus5.innerHTML="Sinu nimetatud tööriistad: " + toriistad.value;
    vastus5.style.backgroundColor = "lightyellow";
    return toriistad.value;
}

//select valik
function selectValik(){
    let vastus6=document.getElementById("vastus6");
    let soovKeel=document.getElementById("soovKeel");
    //0--1.rida loetelus
    if(soovKeel.selectedIndex!==0){
        vastus6.innerHTML="Sinu valik: "+soovKeel.value;
        //vastus6.innerHTML="Sa valisid: "+soovKeel.value;
    } else{
        vastus6.innerHTML="palun tee oma valik";
    }
    vastus6.style.backgroundColor = "lightyellow";
    return soovKeel.value;
}

//kasutab teisi funktsioone
function naitaKoike(){
    let vastusKoik=document.getElementById("vastusKoik");
    let keeled=checkboxValik();
    let arvamus=textareaValik();
    let tund=rangeValik();
    let meeldib=radioValik();
    let toriistad=textValik();
    let soovKeel=selectValik();

    vastusKoik.innerHTML =
        "Programmeerimiskeeled: " + keeled + "<br>" +
        "Arvamus: " + arvamus + "<br>" +
        "Tunde nädalas: " + tund + "<br>" +
        meeldib + "<br>" +
        "Tööriistad: " + toriistad + "<br>" +
        "Soovitud keel: " + soovKeel + "<br>";
}

function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML = "";
    vastus5.innerHTML = "";
    vastus6.innerHTML = "";
    vastusKoik.innerHTML="";
}