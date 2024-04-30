




export function cargarPagina(inicio){


    
   
    
    const back = document.querySelector("#back")
    const next = document.querySelector("#next")

    if (inicio==0){
        
        back.style.display="none"
    }
    else {
        back.style.display="flex"
    }
    
    if((inicio/60)==21){
    
        next.style.display="none"
    
    }
    else {
    
        next.style.display="flex"
    
    }

    const api = `https://pokeapi.co/api/v2/pokemon?limit=60&offset=${inicio}`

    const moverPages = document.querySelector(".contador-pages")

    const main = document.querySelector("#main")
    main.innerHTML=``



   
    

  

        if (((inicio/60)+1)>=10){

            moverPages.style.top="92px"
            moverPages.style.right="19px"
           
            
        }
        else {
            moverPages.style.top="91px"
            moverPages.style.right="25px"

        }
    

    const pokebola = document.querySelector(".contador-pages")
    pokebola.innerText=`${(inicio/60)+1}`

   

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

                const {front_default: imagen_frente} = sprites


                const col = document.createElement("div")
                col.classList.add("col")

                const card = document.createElement("div")
                card.classList.add("card","h-100")

                const contenedorImagenes = document.createElement("div")
                contenedorImagenes.classList.add("contenedor-imagenes")

                const imagen_adelante = document.createElement("div")

                imagen_adelante.innerHTML=`
                
                    <img src="${imagen_frente}" class="card-img-top" alt="${name}">
                
                `

                imagen_adelante.setAttribute("data-bs-toggle","modal")
                imagen_adelante.setAttribute("data-bs-target","#exampleModal")

               

               

                const body = document.createElement("div")
                body.classList.add("card-body")
                body.innerHTML=`
                
                    <p class="card-title">${name}</p> 

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
                    
                 
                    card.appendChild(contenedorImagenes)
                    card.appendChild(body)
                    
                   
                    col.appendChild(card)

                    main.appendChild(col)

                    imagen_adelante.addEventListener("click",()=>{
                        const tituloModal = document.querySelector(".modal-title")
                        tituloModal.innerText=`${name.toUpperCase()}`
    
                        const imagenModal = document.querySelector(".modal-body")
                        imagenModal.innerHTML=`
                            <img src="${imagen_frente}" class="card-img-top" alt="${name}">
        
                        `
                    })
                   


                })
                

            })
            .catch((error2)=>{



                console.log(error2)


            })



        });


    })
    .catch((error)=>{
        console.log(error)
    })


}