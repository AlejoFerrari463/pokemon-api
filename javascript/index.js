
const contenedorButtons = document.querySelector(".contenedor-botones")

const buttonPrev = document.createElement("div")
buttonPrev.classList.add("button-pages")
buttonPrev.innerText="PREV"

const buttonNext = document.createElement("div")
buttonNext.classList.add("button-pages")
buttonPrev.innerText="NEXT"

contenedorButtons.appendChild(buttonPrev)
contenedorButtons.appendChild(buttonNext)

let inicio = 0

const api = `https://pokeapi.co/api/v2/pokemon?limit=32&offset=${inicio}`

fetch(api)
    .then((response)=>{

        return response.json()  

    })
    .then((info)=>{

        info.results.forEach(element => {
            
            fetch(element.url)
            .then((response_final)=>{

                return response_final.json()

            })
            .then((info_final)=>{


                const main =  document.querySelector("#main")
    

                const {name,sprites} = info_final

                const {front_default: imagen_frente, back_default: imagen_trasera} = sprites


                const col = document.createElement("div")
                col.classList.add("col")

                const card = document.createElement("div")
                card.classList.add("card")

                const contenedorImagenes = document.createElement("div")
                contenedorImagenes.classList.add("contenedor-imagenes")

                const imagen_adelante = document.createElement("div")
                imagen_adelante.innerHTML=`
                
                    <img src="${imagen_frente}" class="card-img-top" alt="${name}">
                
                `

                const imagen_atras = document.createElement("div")
                imagen_atras.innerHTML=`
                
                    <img src="${imagen_trasera}" class="card-img-top" alt="${name}">
                
                `


                const body = document.createElement("div")
                body.classList.add("card-body")
                body.innerHTML=`
                
                    <h5 class="card-title">${name.toUpperCase()}</h5> 

                `

                
                const tituloHabilidad = document.createElement("div")
                tituloHabilidad.classList.add("titulo-habilidades")
                tituloHabilidad.innerText="HABILIDADES"
                body.appendChild(tituloHabilidad)

                const contenedorHabilidad = document.createElement("div")
                contenedorHabilidad.classList.add("contenedor-habilidades")
                

                info_final.abilities.forEach((habilidad)=>{
                    
                    const nombreHabilidad = document.createElement("div")
        

                    nombreHabilidad.innerText=`
                    
                        ${habilidad.ability.name}
                    
                    `
                    

                    
                    contenedorHabilidad.appendChild(nombreHabilidad)
                    body.appendChild(contenedorHabilidad)

                    contenedorImagenes.appendChild(imagen_adelante)
                    contenedorImagenes.appendChild(imagen_atras)
                    
                    card.appendChild(contenedorImagenes)
                    card.appendChild(body)
                   
                    col.appendChild(card)

                    main.appendChild(col)


                })
                console.log(" ")

            })
            .catch((error2)=>{

                

                console.log(error2)
            })



        });


    })
    .catch((error)=>{
        console.log(error)
    })
   