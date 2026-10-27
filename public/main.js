// Interfazeko elementuen erreferentziak.
const formularioa = document.querySelector("#misio-formularioa");
const izenburuEremua = document.querySelector("#izenburua");
const deskribapenEremua = document.querySelector("#deskribapena");
const zailtasunEremua = document.querySelector("#zailtasuna");
const sariEremua = document.querySelector("#saria");
const zerrenda = document.querySelector("#misio-zerrenda");
const zerrendaHutsa = document.querySelector("#zerrenda-hutsa");
const mezua = document.querySelector("#mezua");
const ezabatuBotoia = document.querySelector("#ezabatu-dena");
const igoBotoia = document.querySelector("#igo-zerbitzarira");
const jaitsiBotoia = document.querySelector("#jaitsi-zerbitzaritik");
let misioak = [];


formularioa.addEventListener("submit", (gertaera) => {
  gertaera.preventDefault(); // Formularioak orria berriro kargatzea saihesten du.
  gehituMisioa();
});//hil

ezabatuBotoia.addEventListener("click", ezabatuDena);

function gehituMisioa() {
  // TODO: Sortu misio-objektu bat formularioko balioekin eta identifikatzaile
  // bakar batekin (id), adibidez crypto.randomUUID() erabiliz.
}

function erakutsiMisioak() {
  zerrenda.innerHTML = "";
  if (misioak.length === 0) {
    zerrendaHutsa.textContent = "Oraindik ez dago misiorik.";
  } else {
    zerrendaHutsa.textContent = "";
  }

  // TODO: Zeharkatu misioak array-a eta deitu erakutsiMisioa(misioa)
  // funtzioari misio bakoitzeko.
}

function erakutsiMisioa(misioa) {
  const elementua = document.createElement("li");

  const izenburua = document.createElement("h3");
  izenburua.textContent = misioa.izenburua;

  const deskribapena = document.createElement("p");
  deskribapena.textContent = misioa.deskribapena;

  const zailtasuna = document.createElement("p");
  zailtasuna.className = "misio-datuak";
  zailtasuna.textContent = "Zailtasuna: " + misioa.zailtasuna;

  const saria = document.createElement("p");
  saria.className = "misio-datuak";
  saria.textContent = "Saria: " + misioa.saria;

  elementua.appendChild(izenburua);
  elementua.appendChild(deskribapena);
  elementua.appendChild(zailtasuna);
  elementua.appendChild(saria);

  zerrenda.appendChild(elementua);
}

function gordeMisioak() {
}

function kargatuMisioak() {
}

function ezabatuDena() {
}

kargatuMisioak();
erakutsiMisioak();
