let raamat = {
    pealkiri: "Väike prints",
    autor: "Antoine de Saint-Exupéry",
    aasta: 1943,

    kirjeldus() {
        return this.pealkiri + ", " + this.autor + ", " + this.aasta;
    },

    muudaAasta(uusAasta) {
        this.aasta = uusAasta;
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
        this.raamatud.forEach(raamat => {
            kirjuta(raamat.pealkiri + ", " + raamat.autor + ", " + raamat.aasta);
        });
    },

    lisaRaamat(uus) {
        this.raamatud.push(uus);
    },

    raamatuteArv() {
        kirjuta("Raamatuid kokku: " + this.raamatud.length);
    },

    peale2000() {
        let uuemad = this.raamatud.filter(raamat => raamat.aasta > 2000);
        kirjuta("Pärast 2000. aastat ilmunud raamatuid: " + uuemad.length);
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
    kirjuta(raamat.muudaAasta(1950));
    kirjuta(raamat.kirjeldus());

    kirjuta("Raamatukogu raamatud:");
    raamatukogu.kuvaRaamatud();

    raamatukogu.lisaRaamat({ pealkiri: 'Hobbit', autor: 'J. R. R. Tolkien', aasta: 1937 });
    kirjuta("Pärast uue raamatu lisamist:");
    raamatukogu.kuvaRaamatud();

    raamatukogu.raamatuteArv();
    raamatukogu.peale2000();

    kirjuta("Järjestatud aasta järgi:");
    raamatukogu.jarjestaAasta();
}