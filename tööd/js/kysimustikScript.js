function nimiLugemineKastist(){
    let vastus1=document.getElementById("vastus1");
    let nimi=document.getElementById("nimi");

    vastus1.innerHTML="Sisestatud nimi on: "+nimi.value;
    vastus1.style.backgroundColor="lightyellow";
    return nimi.value;
}
//radio valikud
function radioValik(){
    let pilt=document.getElementById("platvormPilt");
    let vastus2=document.getElementById("vastus2");
    let spotify=document.getElementById("spotify");
    let raadio=document.getElementById("raadio");
    let vinyl=document.getElementById("vinüülplaat");
    let youtube=document.getElementById("youtube");


    let valik="";
    if(spotify.checked){
        valik=spotify.value;
        pilt.src="../images/spotify.png";
    } else if(raadio.checked){
        valik=raadio.value;
        pilt.src="../images/raadio.png";
    } else if(vinyl.checked){
        valik=vinyl.value;
        pilt.src="../images/vinüülplaat.png";
    } else if(youtube.checked){
        valik=youtube.value;
        pilt.src="../images/youtube.png";
    } else{
        valik="palun tee oma valik";
    }

    //vastus
    vastus2.innerHTML="Valik: " + valik;
    vastus2.style.backgroundColor = "lightyellow";
    return valik;
}
//stiil radio
function stiiliRadioValik(){
    let vastus8=document.getElementById("vastus8");
    let hiphop=document.getElementById("stiilHiphop");
    let kantri=document.getElementById("stiilKantri");
    let rock=document.getElementById("stiilRock");
    let metal=document.getElementById("stiilMetal");
    let jazz=document.getElementById("stiilJazz");
    let pop=document.getElementById("stiilPop");

    let stiil="";
    if(hiphop.checked){
        stiil=hiphop.value;
    } else if(kantri.checked){
        stiil=kantri.value;
    } else if(rock.checked){
        stiil=rock.value;
    } else if(metal.checked){
        stiil=metal.value;
    } else if(jazz.checked){
        stiil=jazz.value;
    } else if(pop.checked){
        stiil=pop.value;
    }

    vastus8.innerHTML="Sinu vastus: " + stiil;
    vastus8.style.backgroundColor="lightyellow";
    return stiil;
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
    //tee oma valik
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
    vastus4.style.backgroundColor = "lightyellow";
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
    vastus5.style.backgroundColor = "lightyellow";
    return stiil.value;
}
// textarea
function textareaValik() {
    let vastus6 = document.getElementById("vastus6");
    let textareaValue = document.getElementById("arvamus").value;

    if (textareaValue.trim() === "") {
        vastus6.innerHTML = "Palun kirjuta arvamus.";
        vastus6.style.backgroundColor = "lightyellow";
    } else {
        vastus6.innerHTML = "Sinu arvamus: " + textareaValue;
        vastus6.style.backgroundColor = "lightyellow";
    }

    return textareaValue;
}
//radio - raadio jah/ei
function raadioJahEiValik(){
    let vastus7=document.getElementById("vastus7");
    let jah=document.getElementById("raadioJah");
    let ei=document.getElementById("raadioEi");

    let valik="";
    if(jah.checked){
        valik=jah.value;
    } else if(ei.checked){
        valik=ei.value;
    }

    vastus7.innerHTML="Raadio kuulamine: " + valik;
    vastus7.style.backgroundColor = "lightyellow";
    return valik;
}
//kasutab teisi funktsioone
function naitaKoike(){
    let vastusKoik=document.getElementById("vastusKoik");
    let nimi=nimiLugemineKastist();
    let valik=radioValik();
    let valik2=checkboxValik();
    let tund=rangeValik();
    let stiil=selectValik();
    let arvamus=textareaValik();
    let raadio=raadioJahEiValik();
    let stiilRadio=stiiliRadioValik();

    vastusKoik.innerHTML =
        "Sinu nimi on: " + nimi + "<br>" +
        "Sinu meeldivaim muusikastiil on: " + stiil + "<br>" +
        "Kõige rohkem sa kuulad: " + stiilRadio + "<br>" +
        "Sa peamiselt kuulad: " + valik + "<br>" +
        "Sinu lemmik ansambel: " + valik2 + "<br>" +
        "Sa kuuled muusikat " + tund + " tundi päevas.<br>" +
        "Sinu arvamus muusika kuulamisest koolis: " + arvamus + "<br>" +
        "Kas kuulad raadiot: "+raadio+"<br>";
}
function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML = "";
    vastus5.innerHTML = "";
    vastus6.innerHTML = "";
    vastus7.innerHTML = "";
    vastus8.innerHTML="";
    vastusKoik.innerHTML="";
}