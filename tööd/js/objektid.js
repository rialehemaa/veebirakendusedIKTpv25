let raamat = {
    pealkiri: "Väike prints",
    autor: "Antoine de Saint-Exupéry",
    aasta: 1943,

    kirjeldus() {
        return this.pealkiri + ", " + this.autor + ", " + this.aasta;
    },

    muudaAasta() {
        this.aasta = 1950;
        return "Uus aasta: " + this.aasta;
    }
};

let raamatukogu = {
    raamatud: [
        { pealkiri: 'Väike prints', autor: 'Antoine de Saint-Exupéry', aasta: 1943 },
        { pealkiri: 'Harry Potter', autor: 'J. K. Rowling', aasta: 1997 },
        { pealkiri: 'Hunger Games', autor: 'Suzanne Collins', aasta: 2008 }
    ],

    kuvaRaamatud() {
        let tulemus = "";
        this.raamatud.forEach((raamat) => {
            console.log(`
      Pealkiri: ${raamat.pealkiri},
      Autor: ${raamat.autor},
      Aasta: ${raamat.aasta}
      `);
            tulemus += `
      <p>
        <b>Pealkiri:</b> ${raamat.pealkiri}<br>
        <b>Autor:</b> ${raamat.autor}<br>
        <b>Aasta:</b> ${raamat.aasta}
      </p>
      `;
        });
        let vastus = document.getElementById("vastus");
        vastus.innerHTML = vastus.innerHTML + tulemus;
    },

    lisaRaamat() {
        this.raamatud.push({ pealkiri: 'Hobbit', autor: 'J. R. R. Tolkien', aasta: 1937 });
    },

    kustutaRaamat() {
        this.raamatud.splice(0, 1);
    },

    raamatuteArv() {
        let kokku = 0;
        this.raamatud.forEach(raamat => {
            kokku = kokku + 1;
        });
        kirjuta("Raamatuid kokku: " + kokku);
    },

    peale2000() {
        let uuemad = this.raamatud.filter(raamat => raamat.aasta > 2000);
        let kokku = 0;
        uuemad.forEach(raamat => {
            kokku = kokku + 1;
        });
        kirjuta("Pärast 2000. aastat ilmunud raamatuid: " + kokku);
    },

    //minu oma meetod: sorteerib raamatud aasta järgi vanemast uuemani
    jarjestaAasta() {
        this.raamatud.sort((a, b) => a.aasta - b.aasta);
        this.kuvaRaamatud();
    }
};

function kirjuta(tekst) {
    console.log(tekst);
    let vastus = document.getElementById("vastus");
    vastus.innerHTML = vastus.innerHTML + tekst + "<br>";
}

function kaivita() {
    document.getElementById("vastus").innerHTML = "";

    kirjuta(raamat.kirjeldus());
    kirjuta(raamat.muudaAasta());
    kirjuta(raamat.kirjeldus());

    kirjuta("Raamatukogu raamatud:");
    raamatukogu.kuvaRaamatud();

    raamatukogu.lisaRaamat();
    kirjuta("Pärast uue raamatu lisamist:");
    raamatukogu.kuvaRaamatud();

    raamatukogu.raamatuteArv();
    raamatukogu.peale2000();

    kirjuta("Järjestatud aasta järgi:");
    raamatukogu.jarjestaAasta();
}
function lisaNupp() {
    let pealkiri = document.getElementById("pealkiri").value;
    let autor = document.getElementById("autor").value;
    let aasta = document.getElementById("aasta").value;

    raamatukogu.raamatud.push({ pealkiri: pealkiri, autor: autor, aasta: aasta });

    document.getElementById("vastus").innerHTML = "";
    kirjuta("Raamat lisatud:");
    raamatukogu.kuvaRaamatud();
}

function kustutaNupp() {
    let pealkiri = document.getElementById("kustutaPealkiri").value;

    raamatukogu.raamatud = raamatukogu.raamatud.filter(raamat => raamat.pealkiri !== pealkiri);

    document.getElementById("vastus").innerHTML = "";
    kirjuta("Raamat kustutatud:");
    raamatukogu.kuvaRaamatud();
}