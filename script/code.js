function verificarEdad() {
    const edad = parseInt(prompt("Por favor, ingresá tu edad:"));

    if (!isNaN(edad));

    if (edad >= 18) {
        alert("Bienvenido a nuestra pagina de conversion de divisas😃");
    } else if
        (edad <= 17) {
        alert("Lo sentimos, no puedes ingresar a nuestro sitio web por ser menor de edad😣");
    } else {
        alert("Por favor, ingrese un caracter numérico🙏🏻");
    }
}
verificarEdad();

function calculateExchange() {

    const monto = parseFloat(document.getElementById("monto").value);
    const cambiarDesde = document.getElementById("cambiarDesde").value;
    const cambiarHacia = document.getElementById("cambiarHacia").value;

    let tipoDeCambio;

    if (cambiarDesde === "USD" && cambiarHacia === "EUR") {
        tipoDeCambio = 0.85;
    } else if (cambiarDesde === "USD" && cambiarHacia === "GBP") {
        tipoDeCambio = 0.72;
    } else if (cambiarDesde === "EUR" && cambiarHacia === "USD") {
        tipoDeCambio = 1.18;
    } else if (cambiarDesde === "EUR" && cambiarHacia === "GBP") {
        tipoDeCambio = 0.85;
    } else if (cambiarDesde === "EUR" && cambiarHacia === "ARS") {
        tipoDeCambio = 840;
    } else if (cambiarDesde === "GBP" && cambiarHacia === "USD") {
        tipoDeCambio = 1.39;
    } else if (cambiarDesde === "GBP" && cambiarHacia === "EUR") {
        tipoDeCambio = 1.18;
    } else if (cambiarDesde === "GBP" && cambiarHacia === "ARS") {
        tipoDeCambio = 900;
    } else if (cambiarDesde === "USD" && cambiarHacia === "ARS") {
        tipoDeCambio = 810;
    } else if (cambiarDesde === "ARS" && cambiarHacia === "USD") {
        tipoDeCambio = 0.00125;
    } else if (cambiarDesde === "ARS" && cambiarHacia === "GBP") {
        tipoDeCambio = 0.0011;
    } else if (cambiarDesde === "ARS" && cambiarHacia === "EUR") {
        tipoDeCambio = 0.0012;

    } else {
        tipoDeCambio = 1;
    }
    const montoConvertido = monto * tipoDeCambio;
    document.getElementById("resultado").innerText = `Monto convertido: ${montoConvertido.toFixed(2)} ${cambiarHacia}`;
}


const mostrarTasasDeCambio = () => {
    const monedas = ["USD", "EUR", "GBP", "ARS"];

    for (let i = 0; i < monedas.length; i++) {
        const moneda = monedas[i];
        console.log(`Tasa de cambio para ${moneda}: ${obtenerTasaDeCambio(moneda)}`);
    }
};


///objetos literales/// :)

const tasaDeCambioEUR_ARS = {
    monedaDesde: "EUR",
    monedaHacia: "ARS",
    tasa: 840,
};
console.log('Un Euro equivale a ' + tasaDeCambioEUR_ARS.tasa + ' Pesos Argentinos');

const tasaDeCambioEUR_USD = {
    monedaDesde: "EUR",
    monedaHacia: "USD",
    tasa: 1.18,
};
console.log('Un Euro equivale a ' + tasaDeCambioEUR_USD.tasa + ' Dólares Estadounidense');

const tasaDeCambioEUR_GBP = {
    monedaDesde: "EUR",
    monedaHacia: "GBP",
    tasa: 0.85,
};
console.log('Un Euro equivale a ' + tasaDeCambioEUR_GBP.tasa + ' Libras Esterlina');

const tasaDeCambioUSD_GBP = {
    monedaDesde: "USD",
    monedaHacia: "GBP",
    tasa: 0.72,
};
console.log('Un Dólar Estadounidense equivale a ' + tasaDeCambioUSD_GBP.tasa + ' Libras Esterlina');

const tasaDeCambioUSD_ARS = {
    monedaDesde: "USD",
    monedaHacia: "ARS",
    tasa: 810,
};

console.log('Un Dólar Estadounidense equivale a ' + tasaDeCambioUSD_ARS.tasa + ' Pesos Argentinos');

const tasaDeCambioUSD_EUR = {
    monedaDesde: "USD",
    monedaHacia: "EUR",
    tasa: 0.85,
};

console.log('Un Dólar Estadounidense equivale a ' + tasaDeCambioUSD_EUR.tasa + ' Euros');

const tasaDeCambioGBP_ARS = {
    monedaDesde: "GBP",
    monedaHacia: "ARS",
    tasa: 900,
};
console.log('Una Libra Esterlina equivale a ' + tasaDeCambioGBP_ARS.tasa + ' Pesos Argentinos');

const tasaDeCambioGBP_EUR = {
    monedaDesde: "GBP",
    monedaHacia: "EUR",
    tasa: 1.18,
};
console.log('Una Libra Esterlina equivale a ' + tasaDeCambioGBP_EUR.tasa + ' Euros');


const tasaDeCambioGBP_USD = {
    monedaDesde: "GPB",
    monedaHacia: "USD",
    tasa: 1.39,
};
console.log('Una Libra Esterlina equivale a ' + tasaDeCambioGBP_USD.tasa + ' Dólares Estadounidense');

const tasaDeCambioARS_USD = {
    monedaDesde: "ARS",
    monedaHacia: "USD",
    tasa: 0.00125,
};
console.log('Un Peso Argentino equivale a ' + tasaDeCambioARS_USD.tasa + ' Dólares Estadounidenses');

const tasaDeCambioARS_EUR = {
    monedaDesde: "ARS",
    monedaHacia: "EUR",
    tasa: 0.0012,
};
console.log('Un Peso Argentino equivale a ' + tasaDeCambioARS_EUR.tasa + ' Euros');


const tasaDeCambioARS_GBP = {
    monedaDesde: "ARS",
    monedaHacia: "GBP",
    tasa: 0.0011,
};
console.log('Un Peso Argentino equivale a ' + tasaDeCambioARS_GBP.tasa + ' Libras Esterlinas');

//disponibilidad 

const disponibilidadPorMoneda = {
    USD: 70000,
    EUR: 50000,
    GBP: 10000,
    ARS: 500000
};

document.addEventListener("DOMContentLoaded", function() {
    const inputMonto = document.getElementById("monto");
    const cambiarDesde = document.getElementById("cambiarDesde");
    const verificarBoton = document.getElementById("verificacion");

    verificarBoton.addEventListener("click", function() {
        const monto = parseFloat(inputMonto.value);
        const moneda = cambiarDesde.value;

        if (!isNaN(monto)) {
            if (monto <= disponibilidadPorMoneda[moneda]) {
                alert(`El monto de ${monto.toFixed(2)} ${moneda} está disponible para intercambiar. Haz click en "Calcular" para saber tu cotización.`);
            } else {
            alert (`El monto de ${monto.toFixed(2)} ${moneda} supera la disponibilidad de ${disponibilidadPorMoneda[moneda].toFixed(2)} ${moneda}. Por favor, intenta con un monto inferior.`);
            }
        } else {
            alert ("Por favor, ingrese un monto válido.");
        }
    });
});


//Arrays (push) ///

const monedaAgregada = ["USD", "EUR", "GBP", "ARS"];
console.log(monedaAgregada);
monedaAgregada.push("JPY"); //Ejemplo de lo visto en clase


//array combinado con objetos literales dentro ///

const tasasDeCambio = [
    {
        monedaDesde: "USD",
        monedaHacia: "EUR",
        tasa: 0.85,
    },
    {
        monedaDesde: "USD",
        monedaHacia: "ARS",
        tasa: 810,        
    },
    {
        monedaDesde: "USD",
        monedaHacia: "GBP",
        tasa: 0.72,        
    },
    {
        monedaDesde: "EUR",
        monedaHacia: "GBP",
        tasa: 0.85,
    },
    {
        monedaDesde: "EUR",
        monedaHacia: "ARS",
        tasa: 840,
    },
    {
        monedaDesde: "GBP",
        monedaHacia: "USD",
        tasa: 1.39,
    },
    {
        monedaDesde: "GBP",
        monedaHacia: "EUR",
        tasa: 1.18,
    },
    {
        monedaDesde: "GBP",
        monedaHacia: "ARS",
        tasa: 900,
    },
    {
        monedaDesde: "USD",
        monedaHacia: "ARS",
        tasa: 810,
    },
    {
        monedaDesde: "ARS",
        monedaHacia: "USD",
        tasa: 0.00125,
    },
    {
        monedaDesde: "ARS",
        monedaHacia: "EUR",
        tasa: 0.0012,
    },
    {
        monedaDesde: "ARS",
        monedaHacia: "GBP",
        tasa: 0.0011,
    }
];

console.log(tasasDeCambio);

//funcion constructor

function disponibilidad(stock) {
    this.stock = stock;
}
1
const disponibilidadEUR = new disponibilidad('Hay 50.000 Euros disponibles ');

console.log(disponibilidadEUR);

function disponibilidad(stock) {
    this.stock = stock;
}
1
const disponibilidadUSD = new disponibilidad('Hay 70.000 Dólares disponibles');

console.log(disponibilidadUSD);

function disponibilidad(stock) {
    this.stock = stock;
}
1
const disponibilidadARS = new disponibilidad('Hay 500.000 Pesos disponibles ');

console.log(disponibilidadARS);

function disponibilidad(stock) {
    this.stock = stock;
}
1
const disponibilidadGBP = new disponibilidad('Hay 10.000 Libras disponibles ');

console.log(disponibilidadGBP);

//bootstrap

let titulo = document.getElementById('titulo');
console.dir (titulo);
titulo.style.fontFamily = 'arial';
titulo.style.fontSize = '60px';
titulo.style.margin = '80px';

let seccionPrincipal = document.getElementById('seccion');
console.dir (seccionPrincipal);
seccionPrincipal.style.background = 'white';
seccionPrincipal.style.textAlign = 'center';
seccionPrincipal.style.color = 'grey';
seccionPrincipal.style.fontFamily = 'arial';


let boton1 = document.getElementById('verificacion');
boton1.className = 'btn btn-primary';
boton1.style.padding = '15px';
boton1.style.margin = '15px';


seccionPrincipal.appendChild(boton1);

let boton2 = document.getElementById('calcular');
boton2.className = 'btn btn-primary';
boton2.style.padding = '15px';
boton2.style.margin = '15px';

seccionPrincipal.appendChild(boton2);


