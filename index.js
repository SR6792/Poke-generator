// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response=>response.json())//in josn format
//     .then(data=>console.log(data.name))
//     .catch(error=>console.error(error));


//now same code using asyc func for better readabvility
const pokemonList = [
  "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard",
  "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree",
  "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot",
  "rattata", "raticate", "spearow", "fearow", "ekans", "arbok",
  "pikachu", "raichu", "sandshrew", "sandslash", "nidoran♀", "nidorina", "nidoqueen",
  "nidoran♂", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales",
  "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume",
  "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian",
  "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag",
  "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp",
  "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler",
  "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton",
  "farfetch’d", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder",
  "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby",
  "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak",
  "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon",
  "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking",
  "staryu", "starmie", "mr. mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir",
  "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon",
  "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl",
  "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite",
  "mewtwo", "mew"
];
//list opf pokemons for autocomplete
const img=document.querySelector(".sprite");
let poke;
async function fetchData(){
    try{
        poke=document.getElementById("poke").value.toLowerCase();//takes input in lower case;
        poke.addEventListener("type",autos);//autocomplete suggestion
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
        if(!response.ok){//checks if we got the response or for error
            throw new Error("Cant find the pokemon u asked for");
        }
        const data= await response.json();
        const sprites=data.sprites.front_default;
        img.src=sprites;
    }
    catch(error){//checks for error
        console.error(error);
    }
}
const btn=document.querySelector(".btn");
btn.addEventListener("click",fetchData);

//autocomplete function
function autos(poke){
    for(let i=0;i<poke.length;i++){
        
    }
}