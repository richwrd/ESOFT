import { writeFile, readFile } from 'fs/promises';
import fetch from 'node-fetch'; 

async function escreverAsync(dados, arquivo) {
    try {
        await writeFile(arquivo, dados);
        console.log(dados);
    } catch (error) {
        console.error(`Erro ao salvar dado: ${error.message}`);
    }
}

async function lerAsync(dados) {
    try {
        const data = await readFile('file.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.error(`Erro ao ler dado: ${error.message}`);
    }
}

const buildPokemonData = (data) => {
    const { name, types, weight, height } = data;

    const getTypes = types.map(({ type }) => type.name);

    const pokemonInfo = {
        nome: name,
        tipos: getTypes,
        peso: weight,
        altura: height,
    };

    return pokemonInfo;
};  

async function getPokemonData() {
    try {
        console.log("Aguardando retorno da Poke API");
        
        const baseUrl = "https://pokeapi.co/api/v2/pokemon";
        
        // Número máximo de resultados por página
        const limit = 100;
        // resultados
        let offset = 0;

        const totalItems = 151;

        
        // lista para guardar os pokemons
        let allPokemonData = [];

        while (offset < totalItems) {

            //concatena informacoes 
            const response = await fetch(`${baseUrl}?limit=${limit}&offset=${offset}`);
            const data = await response.json();


            allPokemonData = allPokemonData.push(data.results);
            offset += limit;

            console.log(data.results)
        }

        const pokemonData = JSON.stringify(allPokemonData, null, 2);

        escreverAsync(pokemonData, 'pokemons.json');
        

        // lista para guardar os pokemons
        let allPokemonDetail = [];

        // Iterar sobre cada objeto e acessar a URL
        for (const pokemon of allPokemonData) {

            const detailResponse = await fetch(pokemon.url);

            const detailData = await detailResponse.json();
            
            const pokemonDetails = buildPokemonData(detailData);

            allPokemonDetail = allPokemonDetail.push(pokemonDetails);

            console.log(pokemonDetails)

        }

        allPokemonDetail = JSON.stringify(allPokemonDetail, null, 2)

        // Salvar os detalhes do pokémon em um arquivo
        escreverAsync(allPokemonDetail, 'detalhes_pokemons.json');


        
        console.log("Dados dos pokémons foram salvos em 'pokemon.json'");
    } catch (error) {
        console.error('Erro ao obter dados do Pokemon ou ao ler/escrever arquivos:', error);
    }
}

getPokemonData();
