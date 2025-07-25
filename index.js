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
const pokeInput=document.getElementById("poke");
const names=document.querySelector(".name");
const type=document.querySelector(".type");
const detail=document.querySelector(".details");
async function fetchData(){
    try{
        const pokeName=pokeInput.value.toLowerCase();//takes input in lower case;
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        if(!response.ok){//checks if we got the response or for error
            throw new Error("Cant find the pokemon u asked for");
        }
        const data= await response.json();
        const sprites=data.sprites.front_default;//this is the img
        img.src=sprites;
        let x=data.name;
        const cname=x[0].toUpperCase() + x.slice(1);
        names.innerHTML=`<h1>Name:${cname}</h1>`;
        type.innerHTML=`<h1>Type:${data.types.map(t=>t.type.name)}</h1>`;
        let movesL=[];
        for(let i=0;i<4;i++)
        {
            if(data.moves[i]&&data.moves[i].move&&data.moves[i].move.name)
            {
                movesL.push(data.moves[i].move.name);//seperate with comma
            }

        }

        let moves=movesL.join(',');//last space and comma
        detail.innerHTML=`<h1>Moves:${moves}</h1>`;
    }
    catch(error){//checks for error
        console.error(error);
    }
}
poke.addEventListener("input",autos);
const btn=document.querySelector(".btn");
btn.addEventListener("click",fetchData);
function hover(){
    btn.style.backgroundColor="black";
    btn.style.color="white";
}
function unhover(){
    btn.style.backgroundColor="red";
    btn.style.color="black";
}
btn.addEventListener("mouseenter",hover);
btn.addEventListener("mouseleave",unhover);
//autocomplete function
function autos(event){
    let x=event.target.value;
    let a=pokemonList.filter(item=>item.includes(x));
    const inp=document.querySelector(".suggestion");
    inp.textContent="";
    for(let i=0;i<a.length;i++)
    {
        const div=document.createElement("div");
        div.textContent=a[i];
        inp.appendChild(div);
        div.addEventListener("click",()=>{
            pokeInput.value=a[i];
            inp.innerHTML="";//clear auto suggestion after u click one
        })
    }
    inp.style.cssText="display: flex; margin: 0 auto; text-align: center;flex-direction:column;padding:10px";
}
const inp=document.querySelector(".suggestion");
poke.addEventListener("keydown",function(event){//to check if enter key is pressed
    if(event.key=='Enter'){
        fetchData();
    }
});
