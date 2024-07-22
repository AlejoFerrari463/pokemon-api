import * as cargar from './cargarPagina.js'

const contenedorButtons = document.querySelector(".contenedor-botones")

const buttonBack = document.createElement("div")
buttonBack.classList.add("button-pages")
buttonBack.style.backgroundImage =  "url(/imagenes/pikachu-boton-prev.jpg)";
buttonBack.style.backgroundSize = "cover";
buttonBack.style.backgroundPosition = "center";
buttonBack.id="back"
buttonBack.innerText="BACK"

/*
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
 */


const buttonNext = document.createElement("div")
buttonNext.classList.add("button-pages")
buttonNext.style.backgroundImage = "url(imagenes/charizard-boton-next.jpg)"
buttonNext.style.backgroundSize = "cover";
buttonNext.style.backgroundPosition = "center";
buttonNext.innerText="NEXT"
buttonNext.id="next"

contenedorButtons.appendChild(buttonBack)
contenedorButtons.appendChild(buttonNext)



let inicio = 0


cargar.cargarPagina(inicio);
   

const agarrarButtonPrev = document.querySelector("#back")
const agarrarButtonNext = document.querySelector("#next")

agarrarButtonPrev.addEventListener("click",()=>{

    inicio-=60
    console.log(inicio)
    cargar.cargarPagina(inicio);

})

agarrarButtonNext.addEventListener("click",()=>{

    inicio+=60
    cargar.cargarPagina(inicio);
    

})








const buscadorNumero = document.querySelector("input")
buscadorNumero.addEventListener("keydown",(event)=>{

   
    
    if (event.key == "Enter" && ((parseInt(event.target.value))<0 || (parseInt(event.target.value))>1025)){

        Toastify({
            text: "ID no valido",
            duration: 2000,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            color: "black"
            },
            onClick: function(){} // Callback after click
            }).showToast();
       
    }
  
       

  

    if (event.key == "Enter"){

    let buscarPokemon = `https://pokeapi.co/api/v2/pokemon/${event.target.value}`
  

    fetch(buscarPokemon)
    .then((response)=>{
        return response.json()
    })
    .then((info)=>{

        let pokemonDatosGenerales = []
        let pokemonHabilidades = []

        console.log(info)

        const { name, sprites: imagenes, height, weight, id, moves} = info

        const movimientos = moves.length

        const { front_default: imagen_frente } = imagenes

        pokemonDatosGenerales.push({nombre: name, imagen: imagen_frente,altura: height,peso: weight, id, movimientos})

        console.log(pokemonDatosGenerales)

        info.abilities.forEach((element) => {
            
        
            const { ability } = element
            const { name: nombre_habilidad } = ability

          
            pokemonHabilidades.push(nombre_habilidad)

       
        });

        

        localStorage.setItem("datos",JSON.stringify(pokemonDatosGenerales));
       
        localStorage.setItem("habilidades",JSON.stringify(pokemonHabilidades));
       

        window.location.href = "pokemon-api/html/nombre.html"

    })
    .catch((error)=>{
        
       console.log(error)

        if ((Number.isInteger(parseInt(event.target.value))==false)){

            Toastify({
                text: "Nombre inexistente",
                duration: 2000,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                  color: "black"
                },
                onClick: function(){} // Callback after click
              }).showToast();
      

        }

       
           
   

    })

}

})
