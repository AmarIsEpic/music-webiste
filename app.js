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

    card.addEventListener('click', () => {
        navigateToAlbum(album.id);
    });

    return card;
}

function renderSongList(albumId) {
    const album = albums.find(a => a.id === albumId);
    if(!album) return;

    songList.innerHTML = '';
    albumTitle.textContent = album.title;

    album.songs.forEach(songName => {
        const songItem = createSongItem(albumId, songName);
        songList.appendChild(songItem);
    });
}

function createSongItem(albumId, songName) {
    const li = document.createElement('li');
    li.className = 'song-item';

    const isSelected = selectedSongs.some(
        s => s.albumId === albumId && s.songName === songName
    );

    if(isSelected) {
        li.classList.add('selected');
    }

    li.innerHTML = `<div class="song-name">${songName}</div>`;

    li.addEventListener('click', () => {
        selectedSongs(albumId, songName);
    });

    return li;
}