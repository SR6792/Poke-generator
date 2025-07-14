// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response=>response.json())//in josn format
//     .then(data=>console.log(data.name))
//     .catch(error=>console.error(error));


//now same code using asyc func for better readabvility
const img=document.querySelector(".sprite");
async function fetchData(){
    try{
        const poke=document.getElementById("poke").value.toLowerCase();//takes input in lower case;
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