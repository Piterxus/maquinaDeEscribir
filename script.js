let folio = document.getElementById("folio");
let teclas = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","0",];
let random = Math.floor(Math.random() * (38 - 0));
let teclaBuscar = teclas[random]; // Seleccionamos el valor de tecla a adivinar de forma aleatoria.
console.log(teclas[random]);
//Capturamos el evento de tecla presionada. Añadimos esta al elemento "folio".
//Realizamos las comparaciones oportunas hasta dar con la tecla sorpresa.
document.addEventListener("keypress", (Event) => {
  let teclaPulsada = Event.key;
  let textoFolio = (folio.innerHTML += teclaPulsada);
  //Una vez encontrada añadimos al elemento "folio:before" el aviso de que ha sido encontrada.
  //Soy consciente del uso obsoleto de la función addRule(). Pero la sugerencia que propone MDN Web Docs, insertRule() no proporciona el resultado esperado.
  //Por lo que, provisionalmente hasta encontrar la manera aceptada y correcta, usaré esta para poder entregar el ejercicio.
  if (
    teclaPulsada == teclaBuscar.toUpperCase() ||
    teclaPulsada == teclaBuscar.toLowerCase()
  ) {
    document.styleSheets[0].addRule(
      ".folio::before",
      'content:"¡LA ENCONTRASTE! (Pulsa una tecla y el enlace)"'
    );

    document.addEventListener("keypress", (Event) => {
      folio.innerHTML =
        "<a style='bottom:100px;position:absolute;' href='javascript:location.reload()'>JUGAR OTRA VEZ</a>";
    });
  }
  //Con esta condición evitamos el desbordamiento del texto en el elemento "folio".
  if (textoFolio.length > 15) {
    folio.innerHTML = "";
  }
});
