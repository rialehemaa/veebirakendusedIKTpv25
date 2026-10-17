function vanuseArvutus(){
    let vastus3=document.getElementById("vastus3");
    let sunniaasta=document.getElementById("sunniaasta");
    let valik=document.getElementsByName("sunnipaev"); //mitu elementi ühe nimega
    let vanusePilt=document.getElementById("vanusePilt");
    const aasta=2026;

    let vanus=aasta-sunniaasta.value;

    //tsükli
    for(let i=0;i<valik.length;i++){
        if(valik[i].checked && valik[i].value==="ei"){
            vanus=vanus-1;
        }
    }

    if(sunniaasta.value===""){
        vastus3.innerHTML="Sisesta sünniaasta!";
        vastus3.style.color="red";
        vanusePilt.src="../images/kysimus.png";
    } else if(vanus<0){
        vastus3.innerHTML="Sa ei ole veel sündinud!";
        vastus3.style.color="red";
        vanusePilt.src="../images/kysimus.png";
    } else if(vanus<12){
        vastus3.innerHTML="Sa oled "+vanus +" aastat vana. Sa oled laps.";
        vastus3.style.color="green";
        vanusePilt.src="../images/laps.png";
    } else if(vanus<19){
        vastus3.innerHTML="Sa oled "+vanus +" aastat vana. Sa oled teismeline.";
        vastus3.style.color="green";
        vanusePilt.src="../images/teismeline.png";
    } else if(vanus<50){
        vastus3.innerHTML="Sa oled "+vanus +" aastat vana. Sa oled täiskasvanu.";
        vastus3.style.color="green";
        vanusePilt.src="../images/taiskasvanu.png";
    } else {
        vastus3.innerHTML="Sa oled "+vanus +" aastat vana. Sa oled pensionär.";
        vastus3.style.color="green";
        vanusePilt.src="../images/pensionar.png";
    }
}