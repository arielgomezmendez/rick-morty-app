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
   
}

getInfo();
