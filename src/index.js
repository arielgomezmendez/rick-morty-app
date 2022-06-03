let urlBase = "https://rickandmortyapi.com/api/character";

const getInfo = async() => {
    try {
        const response = await fetch(urlBase);
        const data = await response.json();
        console.log(data.results);
    }
    catch(error){
        console.log(error);
    }

    //Add character information
    const container = document.getElementById("main-container");

    // Create nodes
    const addNodes = () => {
        const card = document.createElement('article');
        const image = document.createElement('img');
        const paragraph = document.createElement('p');
        // Add nodes
        container.append(card);
    }
    
    const submitButton = document.getElementById("submit-btn");
    submitButton.addEventListener("submit", addNodes);
    
}

getInfo();
