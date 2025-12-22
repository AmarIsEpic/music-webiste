let selectedSongs = [];
let currentAlbumId = null;

const homePage = document.getElementById('home-page');
const albumPage = document.getElementById('album-page');
const albumGrid = document.getElementById('album-grid');
const songList = document.getElementById('song-list');
const albumTitle = document.getElementById('album-title');
const backBtn = document.getElementById('back-btn');
const continueBtn = document.getElementById('continue-btn');
const selectedCountSpan = document.getElementById('selected-count');

function init() {
    renderAlbumGrid();
    setupEventListeners();
    updateSelectedCount();
}

function renderAlbumGrid() {
    albumGrid.innerHTML = '';

    albums.forEach(album => {
        const albumCard = createAlbumCard(album);
        albumGrid.appendChild(albumCard);
    });
}

function createAlbumCard(album) {
    const card= document.createElement('div');
    card.className= 'album-card';
    card.dataset.albumId = album.id;

    card.innerHTML = `
    <div class="album-cover-wrapper">
        <img src="${album.cover}" class="album-cover">
    </div>
    <div class="album-name">${album.title}</div>
    `;
}