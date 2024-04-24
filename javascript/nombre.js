
const datos = JSON.parse(localStorage.getItem("datos"))
const habilidades = JSON.parse(localStorage.getItem("habilidades"))
console.log(datos)
console.log(habilidades)

const main = document.querySelector("#mainNombre")

const mostrarContenedor = document.createElement("div")
mostrarContenedor.classList.add("mostrar-contenedor");



mostrarContenedor.innerHTML=`
    <h1>Nombre: ${datos[0].nombre}</h1>
    <h2>Poke-ID: ${datos[0].id}</h2>
    <img class="card-img-top" src=${datos[0].imagen} alt="">
    <h3>Peso: ${((datos[0].peso)/10)}kg</h3>
    <h3>Altura: ${((datos[0].altura)*10)}cm</h3>
    <h4>Movimientos: ${datos[0].movimientos}</h4>


`

habilidades.forEach((element) => {
    
    const h4 = document.createElement("h4")
    h4.innerText= `${element}`

    mostrarContenedor.appendChild(h4)

});

main.appendChild(mostrarContenedor);