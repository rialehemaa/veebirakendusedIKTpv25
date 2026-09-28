function nimiLugemineKastist(){
    let vastus1=document.getElementById("vastus1");
    let nimi=document.getElementById("nimi");

    vastus1.innerHTML="Sisestatud nimi on: "+nimi.value;
    vastus1.style.backgroundColor="lightyellow";
    return nimi.value;
}
//radio valikud
function radioValik(){
    let vastus2=document.getElementById("vastus2");
    let spotify=document.getElementById("spotify");
    let raadio=document.getElementById("raadio");
    let vinyl=document.getElementById("vinüülplaat");
    let youtube=document.getElementById("youtube");


    let valik="";
    if(spotify.checked){
        valik=spotify.value;
    } else if(raadio.checked){
        valik=raadio.value;
    } else if(vinyl.checked){
        valik=vinyl.value;
    } else if(youtube.checked){
        valik=youtube.value;
    } else{
        valik="palun tee oma valik";
    }

    //vastus
    vastus2.innerHTML="Valik: " + valik;
    return valik;
}
//checkbox valik
function checkboxValik(){
    let vastus3=document.getElementById("vastus3");
    let queen=document.getElementById("queen");
    let metallica=document.getElementById("metallica");
    let abba=document.getElementById("abba");
    let nirvana=document.getElementById("nirvana");

    let valik2="";
    if(queen.checked){
        valik2+=queen.value +', <br>';
    }
    if(metallica.checked){
        valik2+=metallica.value +', <br>';
    }
    if(abba.checked){
        valik2+=abba.value +', <br>';
    }
    if(nirvana.checked){
        valik2+=nirvana.value +', <br>';
    }
    if(valik2==""){
        valik2="Tee oma valik!";
    }

vastus3.innerHTML="Sinu lemmikud on : " + valik2;
vastus3.style.backgroundColor="lightyellow";
    return valik2;
}
//range
function rangeValik(){
    let vastus4=document.getElementById("vastus4");
    let tund=document.getElementById("tund");

    vastus4.innerHTML="Sa kuuled muusikat : " + tund.value + " tundi";

    return tund.value;
}
//select valik
function selectValik(){
    let vastus5=document.getElementById("vastus5");
    let stiil=document.getElementById("stiil");
    //0--1.rida loetelus
    if(stiil.selectedIndex!==0){
        vastus5.innerHTML="Sa valisid "+stiil.value;
    } else{
        vastus5.innerHTML="palun tee oma valik";
    }

    return stiil.value;
}
//kasutab teisi funktsioone
function naitaKoike(){
    let vastusKoik=document.getElementById("vastusKoik");
    let nimi=nimiLugemineKastist();
    let valik=radioValik();
    let valik2=checkboxValik();
    let tund=rangeValik();
    let stiil=selectValik();

    vastusKoik.innerHTML="Sinu nimi on: " +nimi+'<br>'+
        'Sinu lemmikud on : ' + valik2 + '<br>'+
        'Sa kasutad '+valik +'<br>' +
        'Sa kuuled '+tund+' tundi<br>'+
        'Sa valisid '+stiil;
}
function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastusKoik.innerHTML="";
}