
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

                const imagen = document.createElement("div")
                imagen.innerHTML=`
                
                    <img src="${imagen_frente}" class="card-img-top" alt="${name}">
                
                `

                const body = document.createElement("div")
                body.classList.add("card-body")
                body.innerHTML=`
                
                    <h5 class="card-title">${name}</h5> 

                `

                const contenedorHabilidad = document.createElement("div")
                contenedorHabilidad.classList.add("contenedor-habilidades")

                console.log(name)
                console.log(imagen_frente)
                console.log(imagen_trasera)

                info_final.abilities.forEach((habilidad)=>{
                    
                    const nombreHabilidad = document.createElement("div")
        

                    nombreHabilidad.innerText=`
                    
                        ${habilidad.ability.name}
                    
                    `

                    contenedorHabilidad.appendChild(nombreHabilidad)
                    
                    body.appendChild(contenedorHabilidad)
                   

                    card.appendChild(imagen)
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
   