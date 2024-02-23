/*{
  "characters": "https://rickandmortyapi.com/api/character",
  "locations": "https://rickandmortyapi.com/api/location",
  "episodes": "https://rickandmortyapi.com/api/episode"
}
 */

const page = 2
const baseUrl ='https://rickandmortyapi.com/api';

const loadCharacter = async () => {
    const res = await fetch(`${baseUrl}/character?page=${page}`);
    const data = await res.json();
    const limitData = data.results.slice(0,6)
     return  { results:limitData}

};

const loadLocation = async () => {
    const res = await fetch(`${baseUrl}/location`)
    return await res.json()

};


const loadEpisode = async () => {
    const res = await fetch(`${baseUrl}/episode`)
    return await res.json()
};

    const loadAllWithPromiseAll = async () => {
        const[character,location,episode] = await Promise.all([
loadCharacter(),
loadLocation(),
loadEpisode()
            ])
        showCharacther(character.results)
        console.log("Location", location)
        console.log("Episode", episode)

    };
    loadAllWithPromiseAll() 


    function showCharacther(characters){
        const characterContainer = document.getElementById("characther-container");
        characters.map((character) => {
            const divCharacter = document.createElement('div')
            divCharacter.innerHTML= `
            <img src="${character.image}" alt="Imagem do personagem"</img>

        <article class="character-info" > 
            <h3>${character.name}</h3>

            <span> ${character.name}- ${character.species}</span>

                <span class="location">Location:</span>
                    <a href="${character.location.url}">${character.location.name}</a>

                <span class="origin">Origin:</span>
                    <a href ="${character.origin.url}">${character.origin}"</a>

        </article>
            }`;
            divCharacter.classList.add('character-box')
            characterContainer.appendChild(divCharacter)
        })
    }