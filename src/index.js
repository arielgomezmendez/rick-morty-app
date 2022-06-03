let urlBase = "https://rickandmortyapi.com/api/character";

const getInfo = async() => {
    try {
        const response = await fetch(urlBase);
        const data = await response.json();
        console.log(data.results);
        for(let i = 0; i < data.results.length; i ++){
            console.log(data.results[i].name);
        }
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

    //Validacion
    /*const validacion = () => {
        if (document.getElementById("name").value === ) {

        }
    }*/

    


    const submitButton = document.getElementById("submit-btn");
    //submitButton.addEventListener("submit", validacion);
    
}

getInfo();
