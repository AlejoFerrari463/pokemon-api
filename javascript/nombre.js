
const datos = localStorage.getItem("nombre")
console.log(datos)

const main = document.querySelector("#mainNombre")
main.innerHTML=`${datos}`