//1. Erinevad funktsioonid
//klassikaline funktsioon
function minuNimi() {
    console.log("Dariia");
}

minuNimi();

//noolefunktsioon
const minuNimiNool = () => console.log("Dariia");

minuNimiNool();

//2. Argumendiga funktsioon
const kuud = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

function kuupaevEesti(kuupaev) {
    let paev = kuupaev.substring(0, 2) * 1;
    let kuu = kuud[kuupaev.substring(3, 5) - 1];
    console.log(`${paev}. ${kuu}`);
}

kuupaevEesti("19.07.25");

//3. Teadmata hulk
let sisestatud = [];

const arvudeStatistika = function(arvud) {
    let kogus = 0;
    let summa = 0;
    arvud.forEach(arv => {
        kogus = kogus + 1;
        summa = summa + arv;
    });
    return { kogus: kogus, keskmine: (summa / kogus).toFixed(2) };
};

function lisaArvNupp() {
    let arv = document.getElementById("arv");
    sisestatud.push(arv.value * 1);
    document.getElementById("arvudeList").innerHTML = "Sisestatud arvud: " + sisestatud;
    arv.value = "";
}

function arvutaNupp() {
    let tulemus = arvudeStatistika(sisestatud);
    console.log(`Arvude koguarv: ${tulemus.kogus}`);
    console.log(`Keskmine: ${tulemus.keskmine}`);
    document.getElementById("vastus").innerHTML = `Arvude koguarv: ${tulemus.kogus}<br>Keskmine: ${tulemus.keskmine}`;
}

//4. Salajane sõnum
const vokaalid = ["a", "e", "i", "o", "u", "õ", "ä", "ö", "ü", "A", "E", "I", "O", "U", "Õ", "Ä", "Ö", "Ü"];

const salajaneSonum = sonum => {
    let tulemus = "";
    for (let i = 0; i < sonum.length; i++) {
        let on = vokaalid.find(v => v === sonum[i]);
        tulemus += on ? "*" : sonum[i];
    }
    return tulemus;
};

console.log(salajaneSonum("Tere tulemast funktsioonide lehele! "));

//5. Unikaalsed nimed
const leiaUnikaalsedNimed = nimed => {
    let uued = [];
    nimed.forEach(nimi => {
        let leitud = uued.find(u => u === nimi);
        if (!leitud) {
            uued.push(nimi);
        }
    });
    return uued;
};

console.log(leiaUnikaalsedNimed(["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]));