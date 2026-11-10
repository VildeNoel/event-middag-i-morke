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
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
}
