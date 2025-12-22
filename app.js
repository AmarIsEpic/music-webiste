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
        selectSong(albumId, songName);
    });

    return li;
}

function navigateToAlbum(albumId) {
    currentAlbumId = albumId;
    renderSongList(albumId);

    homePage.classList.remove('active');
    albumPage.classList.add('active');

    window.scrollTo(0,0);
}

function navigateToHome() {
    currentAlbumId = null;

    albumPage.classList.remove('active');
    homePage.classList.add('active');

    window.scrollTo(0,0);
}

function selectSong(albumId, songName) {
    const existingIndex = selectedSongs.findIndex(
        s => s.albumId === albumId && s.songName === songName
    );

    if(existingIndex === -1) {
        selectedSongs.push({ albumId, songName });
    }
    else {
        selectedSongs.splice(existingIndex, 1);
    }
    updateSelectedCount();
    navigateToHome();
}

function updateSelectedCount() {
    const count = selectedSongs.length;
    selectedCountSpan.textContent = count;

    if(count > 0){
        continueBtn.disabled = false;
    } else {
        continueBtn.disabled = true;
    }
}

function setupEventListeners() {
    backBtn.addEventListener('click', () => {
        navigateToHome();
    });

    continueBtn.addEventListener('click', () => {
        if(selectedSongs.length > 0) {
            console.log('Continue clicked with songs:', selectedSongs);
            alert('Continue functionality coming soon');
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function getSelectedSongs() {
    return [...selectedSongs];
}

function clearSelections() {
    selectedSongs = [];
    updateSelectedCount();
}

function isSongSelected(albumId, songName) {
    return selectedSongs.some(
        s => s.albumId === albumId && s.songName === songName
    );
}