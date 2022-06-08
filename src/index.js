let urlBase = "https://rickandmortyapi.com/api/character";

const getInfo = async() => {
    try {
        const response = await fetch(urlBase);
        const data = await response.json();
        console.log(data.results);

        const input = document.getElementById("name");
        const submitButton = document.getElementById("submit-btn");
        
        //Validacion
        const validacion = () => {
            
            if(data.results[i].name === input.value){
                alert("Ahiiiii");
            }
            else{
                alert("Error");
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

    // Create nodes
    /*const addNodes = () => {
        const card = document.createElement('article');
        const image = document.createElement('img');
        const paragraph = document.createElement('p');
        // Add nodes
        container.append(card);
        card.append(image, paragraph);
    }
    */


    const submitButton = document.getElementById("submit-btn");
    //submitButton.addEventListener("submit", validacion);
    
}

getInfo();
