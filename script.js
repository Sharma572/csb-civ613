const pokedex = document.getElementById('pokedex');

async function getPokeData(){
   
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const response = await fetch(url);
        const result = await response.json();
        
        console.log(result);
        console.log(i);
        // console.log(result.sprites.front_default);
        // console.log(result.name);
        // console.log(result.types[0].type.name);
        let imgLink = result.sprites.front_default;
        pokedex.innerHTML += 
        `
        <li class="card">
        <img class="pokeImg" src="${imgLink}" alt="${result.id}"/>
        <h2 class="pokeHeading">${result.id} <p class="pokeName">${result.name}</p></h2>
        </li>
        `
      }
}
getPokeData();

 
