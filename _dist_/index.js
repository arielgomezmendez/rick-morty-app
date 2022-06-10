let urlBase = "https://rickandmortyapi.com/api/character";
             //https://rickandmortyapi.com/api/character/avatar/3.jpeg
const getInfo = async() => {
    try {
        const response = await fetch(urlBase);
        const data = await response.json();
        console.log(data.results);

        const input = document.getElementById("name");
        const submitButton = document.getElementById("submit-btn");
        
        //Validacion
        const validacion = () => {
            for(let i = 0; i < data.results.length; i ++){
                if(data.results[i].name === input.value){
                    // Create nodes
                    const card = document.createElement('article');
                    const image = document.createElement('img');
                    image.src = `${urlBase}/avatar/${i}.jpeg`;
                    //image.src = urlBase + "/avatar/" + String(i + 1) +".jpeg";
                    const paragraph = document.createElement('p');
                    // Add nodes
                    container.append(card);
                    card.append(image, paragraph); 
                    break; 
                }
            }     
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
