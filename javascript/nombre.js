
const datos = JSON.parse(localStorage.getItem("datos"))
const habilidades = JSON.parse(localStorage.getItem("habilidades"))
console.log(datos)
console.log(habilidades)

const main = document.querySelector("#mainNombre")

const mostrarContenedor = document.createElement("div")
mostrarContenedor.classList.add("mostrar-contenedor");
mostrarContenedor.classList.add("card");



mostrarContenedor.innerHTML=`

    <p class="mostrar-id" >${datos[0].id}</p>

    

    <h1>Nombre: ${datos[0].nombre}</h1>
            
    <img class="card-img-top ms-2" src=${datos[0].imagen} alt="">
    
    <h3 class="mb-5" >Peso: ${((datos[0].peso)/10)}kg | Altura: ${((datos[0].altura)*10)}cm</h3>
    
    
    
    <h3 class="mb-5" >Movimientos: ${datos[0].movimientos}</h3>

    



`

const mostrarHabilidades = document.createElement("div");
mostrarHabilidades.classList.add("mostrar-habilidades");

let habilidad = 1;

habilidades.forEach((element) => {
    
    const h4 = document.createElement("h4")
    h4.innerHTML= `
    ${element}
    <div class="fs-6 mt-2" >
        (hability ${habilidad})
    </div>
    
    `

    mostrarHabilidades.appendChild(h4)

    habilidad++
});

mostrarContenedor.appendChild(mostrarHabilidades)

main.appendChild(mostrarContenedor);



const volver = document.querySelector("#volver")
volver.addEventListener("click",()=>{

    window.location.href = "../index.html"


})