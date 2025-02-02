const SEARCH_INPUT = document.getElementById('search-input');
const RESULT_ARTIST = document.getElementById("result-artists");
const RESULT_PLAYLIST = document.getElementById('result-playlists');
const FOOTER = document.getElementById('footer');
const BUTTON_CLOSE = document.getElementById('button-close');

function requestApi(searchTerm) {
    const URL = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(URL)
        .then((response) => response.json())
        .then((result) => displayResults(result, searchTerm));
}

function displayResults(result, searchTerm) {
    RESULT_PLAYLIST.classList.add("hidden");
    const GRID_CONTAINER = document.querySelector('.grid-container');
    GRID_CONTAINER.innerHTML = ''; // Limpa os resultados anteriores    

    const FILTERED_ARTISTS = result.filter(artist => artist.name.toLowerCase().includes(searchTerm));

    FILTERED_ARTISTS.forEach(artist => {    
        const ARTIST_CARD = document.createElement('div');
        ARTIST_CARD.classList.add('artist-card');

        ARTIST_CARD.innerHTML = `
            <div class="card-img">
                <img class="artist-img" src="${artist.urlImg}" />
                <div class="play">
                    <span class="fa fa-solid fa-play"></span>
                </div>
            </div>
        <div class="card-text">              
                <span class="artist-name">${artist.name}</span>
                <span class="artist-categorie">Artista</span>
            </div>
        `;
        GRID_CONTAINER.appendChild(ARTIST_CARD);
    });

    RESULT_ARTIST.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const SEARCH_TERM = SEARCH_INPUT.value;

    if (SEARCH_TERM === '') {
        RESULT_PLAYLIST.classList.remove('hidden');
        RESULT_ARTIST.classList.add('hidden');
        return;
    }

    requestApi(SEARCH_TERM);
});

function esconderFooter() {
    FOOTER.style.display = 'none';
    BUTTON_CLOSE.style.display = 'none';
}
