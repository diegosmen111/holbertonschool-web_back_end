import getResponseFromAPI from "./0-promise.js";
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Aquí puedes realizar cualquier lógica o llamada a una API real
    // En este caso, simplemente resolvemos la promesa sin ningún valor
    resolve();
  });
}
const response = getResponseFromAPI();
console.log(response instanceof Promise);
