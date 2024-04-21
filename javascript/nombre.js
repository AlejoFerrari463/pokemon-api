
const datos = JSON.parse(localStorage.getItem("datos"))
const habilidades = JSON.parse(localStorage.getItem("habilidades"))
console.log(datos)
console.log(habilidades)

const main = document.querySelector("#mainNombre")
main.innerHTML=`
    <h1>Nombre: ${datos[0].nombre}</h1>
    <h2>ID: ${datos[0].id}</h2>
    <img height=150 src=${datos[0].imagen} alt="">
    <p>Peso: ${((datos[0].peso)/10)}kg</p>
    <p>Altura: ${((datos[0].altura)*10)}cm</p>
    <h5>Movimientos: ${datos[0].movimientos}</h5>


`

habilidades.forEach((element) => {
    
    const h2 = document.createElement("h2")
    h2.innerText= `${element}`

    main.appendChild(h2)

});