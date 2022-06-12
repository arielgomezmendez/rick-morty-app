let urlBase = "https://rickandmortyapi.com/api/character";
             //https://rickandmortyapi.com/api/character/avatar/3.jpeg
const getInfo = async() => {
    try {
        const response = await fetch(urlBase);
        const data = await response.json();
        console.log(data.results);
        const input = document.getElementById("name");
        const submitButton = document.getElementById("submit-btn");

        const charactersArray = Object.entries(data.results); //return array 
        console.log(charactersArray[0][1].name);
        
        //Validacion
        const validacion = () => {
           
            /*for(let i = 0; i < data.results.length; i ++){
                if(input.value == data.results[i].name){
                    
                    // Create nodes
                    const card = document.createElement('article');
                    const image = document.createElement('img');
                    
                    const paragraph = document.createElement('p');
                    // Add nodes
                    container.append(card);
                    card.append(image, paragraph); 
                    image.src = `${urlBase}/avatar/${i}.jpeg`;
                    break;
                     
                }
                else{
                    alert("Escriba el nombre correctamente")
                }
               
            }*/    
        }     
        //Events
        submitButton.addEventListener("click", validacion);
        
    }

    catch(error){
        console.log(error);
    }

    //Add character information
    const container = document.getElementById("main-container");
    const submitButton = document.getElementById("submit-btn");
}

getInfo();
