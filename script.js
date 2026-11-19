// Interaktiv SVG-side
const svg_til_event = document.querySelector(".svg-event");

if (svg_til_event) {
  const stage = document.querySelector("#stage");
  const noder = document.querySelector("#noder");
  const vin = document.querySelector("#vin");
  const nudler = document.querySelector("#nudler");

  stage.addEventListener("toggle", updateSvgPosition);
  noder.addEventListener("toggle", updateSvgPosition);
  vin.addEventListener("toggle", updateSvgPosition);
  nudler.addEventListener("toggle", updateSvgPosition);

  function updateSvgPosition() {
    console.log("updateSvgPosition");
    const openDetails = document.querySelector(".accordion-item[open]");

    if (openDetails) {
      console.log(openDetails.dataset.position);
      svg_til_event.dataset.position = openDetails.dataset.position;
    } else {
      delete svg_til_event.dataset.position;
    }
  }
}

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".event-pass");

if (opsamlingPlaceholder) {
  // hent svarene som brugeren skriver
  const params = new URLSearchParams(window.location.search);
  const navn = params.get("fulde-navn");
  const kontakt = params.get("kontaktoplysninger");
  const dato = params.get("dato");
  const personer = params.get("antal-personer");
  const allergener = params.get("allergener");
  const mad = params.get("preaferencer");
  const viden = params.get("viden");
  // hvor mørkt skal passet være?
  const eventPass = document.querySelector(".event-pass");

  if (viden <= 30) {
    eventPass.dataset.viden = "lidt";
  } else if (viden <= 70) {
    eventPass.dataset.viden = "mellem";
  } else {
    eventPass.dataset.viden = "meget";
  }

  // indsætter informationerne på kortet
  document.querySelector(".kort-navn").textContent = navn;
  document.querySelector(".kort-dato").textContent = dato;
  document.querySelector(".kort-personer").textContent = personer;
  document.querySelector(".kort-mad").textContent = mad;
  document.querySelector(".kort-allergener").textContent = allergener;

  // Forskellig tekst alt efter hvor meget gæsten vil vide
  const menuTekst = document.querySelector(".kort-menu-tekst");

  if (viden <= 30) {
    menuTekst.textContent =
      "Du har valgt at lade dig overraske. Vi afslører ingenting – du må stole på dine sanser.";
  } else if (viden <= 70) {
    menuTekst.textContent =
      "Du får et lille indblik i menuen, men vi gemmer stadig nogle overraskelser til selve aftenen.";
  } else {
    menuTekst.textContent =
      "Du vil gerne vide mere om menuen på forhånd. Derfor får du et større indblik i, hvad der venter dig.";
  }

  // forskellige ikoner ud fra hvilken madpræference man vælger

  const madIkon = document.querySelector(".mad-ikon");
  if (mad === "Vegetar") {
    madIkon.src = "imgs/brocolli.png";
    madIkon.alt = "Broccoli";
  } else if (mad === "Veganer") {
    madIkon.src = "imgs/gulerod.png";
    madIkon.alt = "Gulerod";
  } else if (mad === "Kødspiser") {
    madIkon.src = "imgs/Bøf.png";
    madIkon.alt = "Bøf";
  }
}
