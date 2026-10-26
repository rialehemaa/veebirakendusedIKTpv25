// 1. Objekti loomine
{
    let auto = {
        mark: "Toyota",
        mudel: "Corolla",
        aasta: 2022,
        varv: "punane",
        lisavarustus: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"]
    };

    console.log(auto);

    console.log(auto.mark); // Output: "Toyota"
    console.log(auto.mudel); // Output: "Corolla"
    console.log(auto.aasta); // Output: 2022
    console.log(auto.varv); // Output: "punane"
    console.log(auto.omadused); // Output: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"]
}

// 2. Meetodid ja this
{
    let auto = {
        //omadused
        mark: "Toyota",
        mudel: "Corolla L",
        aasta: 2022,
        varv: "punane",
        omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],

        //meetodid
        taisnimi: function() {
            return this.mark + " " + this.mudel;
        }
    };

    console.log(auto.taisnimi());
}

// 3. Meetodi lühendamine ja forEach
{
    let auto = {
        //omadused
        mark: "Toyota",
        mudel: "Corolla L",
        aasta: 2022,
        varv: "punane",
        omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],

        //meetodid
        taisnimi() {
            return this.mark + " " + this.mudel;
        },

        kuvaOmadused() {
            this.omadused.forEach(omadus => console.log(omadus));
        }
    };

    auto.kuvaOmadused();
}

// 4. Objektide massiivid
{
    let autod = [
        { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
        { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
        { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
    ];

    console.log(autod);
    console.log(autod[0]);
    console.log(autod[0].mark);

    autod.forEach((auto) => {
        console.log(`
      Mark: ${auto.mark},
      Mudel: ${auto.mudel},
      Aasta: ${auto.aasta}
      `);
    });
}

// 5. push, unshift, splice
{
    let autod = [
        { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
        { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
        { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
    ];

    //Lisab uue objekti massiivi lõppu
    autod.push({ mark: 'BMW', mudel: '320i', aasta: 2015 });
    autod.unshift({ mark: 'Ford', mudel: 'Focus', aasta: 2020 });
    console.log(autod);

    //Eemaldab esimese objekti
    autod.splice(0,1);
    //Lisab objekti alates teisest indeksist, ei kustutata midagi
    autod.splice(1,0,{ mark: 'Audi', mudel: 'A4', aasta: 2018 });
    console.log(autod);
}

// 6. find
{
    let autod = [
        { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
        { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
        { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
    ];

    //Otsimine
    let otsing = autod.find(auto=>auto.aasta > 2018);
    console.log(otsing);

    //Otsimine
    let otsing2 = autod.find(auto=>auto.aasta > 2018 && auto.mark === "Tesla");
    console.log(otsing2);
}

// 7. filter
{
    let arvud = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const filtreeritud = arvud.filter(arv => arv % 2 === 0);
    console.log(filtreeritud);

    let autod = [
        { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
        { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
        { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
    ];

    //Filtreerimine
    let filter = autod.filter(auto=>auto.aasta > 2018);
    console.log(filter);
}

// 8. sort
{
    let autod = [
        { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
        { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
        { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
    ];

    autod.sort((a, b) => a.aasta - b.aasta);
    console.log(autod);
}