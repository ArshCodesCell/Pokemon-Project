
const input = document.querySelector("#pokemonName");
const btn = document.querySelector("button");


let url = "https://pokeapi.co/api/v2/pokemon/";

let pokemonName;

btn.addEventListener("click", async () => {
    
    pokemonName = input.value;
    
    let pokemon = await getPokemon();
    console.log(pokemon.name);
    console.log(pokemon.sprites.front_default);
    
    document.querySelector("#result").innerHTML = `<img src=${pokemon.sprites.front_default} alt=${pokemon.name} style="width: 300px">`;
    
})

async function getPokemon(){
    
    try{
        pokemonName = input.value;
        let res = await axios.get(url+pokemonName);
        console.log(res);
        return res.data;
    } catch(err) {
        console.log("Error- ", err);
    }
    
}

getPokemon()