let urlBase = "https://rickandmortyapi.com/api/character";
             //https://rickandmortyapi.com/api/character/avatar/3.jpeg
const getInfo = async() => {
    try {
        const response = await fetch(urlBase);
        const data = await response.json();
        console.log(data.results);

        const input = document.getElementById("name");
        const submitButton = document.getElementById("submit-btn");

        // Create array of characters name
        const arrayNames = [];
        for(let i = 0; i < data.results.length; i ++){
            arrayNames.push(data.results[i].name);
        }
        console.log(arrayNames);
        //Validacion
        const validacion = () => {
            // Using the find and findIndex methods to find the name of character and his index.
            // indexFind return -1 if the index don´t exist.
            const foundName = arrayNames.find(i => i == input.value);
            const indexFoundName = arrayNames.findIndex(i => i == input.value);
            
            if(indexFoundName != -1){
                const card = document.createElement('article');
                card.className = "cardCharacter";
                const image = document.createElement('img');
                image.className = "characterImg"
                image.src = `${urlBase}/avatar/${indexFoundName + 1}.jpeg`;
                const paragraph = document.createElement('p');
                paragraph.textContent = foundName;
                // Add nodes
                container.append(card);
                card.append(image, paragraph);
            }

            if(indexFoundName === -1){
                alert("Introduzca el nombre correctamente");
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
