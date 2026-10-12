function teisendamine(){
    let vastus=document.getElementById("vastus");
    let valik=document.getElementsByName("valik"); //mitu elementi ühe nimega
    let arv=document.getElementById("arv");

    const toll=39.37;
    const meeter= 0.0254;

    //tsükli
    for(let i=0;i<valik.length;i++){
        if(valik[i].checked){
            if(valik[i].value==="meeter"){
                vastus.innerHTML=arv.value +' meetri = '+
                    (arv.value*toll).toFixed(2) +' tolli';
                vastus.style.color="red";
                vastusepilt.src="https://www.taskutark.ee/meeter/";
            } else if(valik[i].value==="tolli"){
                vastus.innerHTML= arv.value +' tolli = '+
                    arv.value*meeter+'meetri';
                vastus.style.color="green";
                vastusepilt.src="https://et.wikipedia.org/wiki/Fail:Inch_tape.jpg";
            }
            else {
                vastus.innerHTML= " Vali ühiku - kas meeter või toll"
            }
        }
    }
}