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


function analyzeCategoryScores() {
    const scores = {
        aggressive: 0,
        melancholic: 0,
        epic: 0,
        dark: 0,
        rebellious: 0,
        introspective: 0,
        energetic: 0,
        classic: 0
    };

    selectedSongs.forEach(song => {
        song.categories.forEach((category, index) => {
            scores[category] += (index === 0) ? 2 : 1;
        });
    });

    return scores;
}

function determinePersonality(scores) {
    const sortedCategories = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

    const top1 = sortedCategories[0];
    const top2 = sortedCategories[1];

    if((top1 === 'aggressive' || top2 === 'aggressive') &&
    (top1 === 'energetic' || top2 === 'energetic')) {
        return 'thrasher';
    }

    if((top1 === 'dark' || top2 === 'dark') &&
    (top1 === 'melancholic' || top2 === 'melancholic')) {
        return 'dark_soul';
    }

    if((top1 === 'introspective' || top2 === 'introspective') &&
    (top1 === 'epic' || top2 === 'epic')) {
        return 'philosopher';
    }

    if((top1 === 'epic' || top2 === 'epic') &&
    (top1 === 'classic' || top2 === 'classic')) {
        return 'arena_warrior';
    }

    if((top1 === 'rebellious' || top2 === 'rebellious') &&
    (top1 === 'aggressive' || top2 === 'aggressive')) {
        return 'rebel';
    }

    if((top1 === 'melancholic' || top2 === 'melancholic') &&
    (top1 === 'classic' || top2 === 'classic')) {
        return 'romanticist';
    }

    if((top1 === 'aggressive' || top2 === 'aggressive') &&
    (top1 === 'classic' || top2 === 'classic')) {
        return 'purist';
    }

    if((top1 === 'energetic' || top2 === 'energetic') &&
    (top1 === 'rebellious' || top2 === 'rebellious')) {
        return 'headbanger';
    }

    if(top1 === 'epic' || top2 === 'epic') {
        return 'epicist';
    }

    return 'thrasher';
}

function getRandomPersonalityResult(personalityKey) {
    const personality = personalities[personalityKey];

    const randomTagLine = personality.taglines[Math.floor(Math.random() * personality.taglines.length)];
    const randomDescription = personality.descriptions[Math.floor(Math.random()*personality.descriptions.length)];

    return {
        title: personality.title,
        tagline: randomTagLine,
        description: randomDescription,
        recommendations: personality.recommendations,
    }
}
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

    album.songs.forEach(song => {
        const songItem = createSongItem(albumId, song);
        songList.appendChild(songItem);
    });
}

function renderSelectedSongs() {
    const container = document.getElementById('selected-songs-container');
    const list = document.getElementById('selected-songs-list');

    list.innerHTML = '';

    if(selectedSongs.length === 0) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'block';

    selectedSongs.forEach((song, index) => {
        const li = document.createElement('li');
        li.className = 'selected-song-item';

        li.innerHTML = `
        <span class="selected-song-number">${index + 1}.</span>
        <span class="selected-song-name">${song.songName}</span>
        <button class="selected-song-remove" data-index="${index}">✕</button>`;

        const removeBtn = li.querySelector('.selected-song-remove');
        removeBtn.addEventListener('click', () => {
            removeSongFromHome(index);
        });

        list.appendChild(li);
    });
}

function removeSongFromHome(index) {
    selectedSongs.splice(index, 1);
    updateSelectedCount();
    renderSelectedSongs();
}

function createSongItem(albumId, song) {
    const li = document.createElement('li');
    li.className = 'song-item';

    const isSelected = selectedSongs.some(
        s => s.albumId === albumId && s.songName === song.name
    );

    if(isSelected) {
        li.classList.add('selected');
    }

    li.innerHTML = `<div class="song-name">${song.name}</div>`;

    li.addEventListener('click', () => {
        selectSong(albumId, song);
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

function selectSong(albumId, song) {

    const MAX_SONGS = 3;

    const existingIndex = selectedSongs.findIndex(
        s => s.albumId === albumId && s.songName === song.name
    );

    if(existingIndex === -1) {
        if(selectedSongs.length >= MAX_SONGS) {
            alert(`You can only select ${MAX_SONGS} songs!`);
            return;
        }

        selectedSongs.push({
            albumId,
            songName: song.name,
            categories: song.categories });
    }
    else {
        selectedSongs.splice(existingIndex, 1);
    }

    updateSelectedCount();
    renderSelectedSongs();
    navigateToHome();
}

function updateSelectedCount() {
    const count = selectedSongs.length;
    selectedCountSpan.textContent = count;

    if(count === 3){
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
        if(selectedSongs.length === 3) {
            showPersonalityResult();
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function showPersonalityResult () {
    const scores = analyzeCategoryScores();

    const personalityKey = determinePersonality(scores);

    const result = getRandomPersonalityResult(personalityKey);

    createPopup(result);
}

function createPopup(result) {
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';

    const popup = document.createElement('div');
    popup.className = 'popup';

    popup.innerHTML = `
    <button class="popup-close" id="popup-close">✕</button>
    
    <h2 class="popup-header">YOUR PERSONALITY</h2>
    
    <div class="popup-divider"></div>
    
    <h3 class="popup-title">${result.title}</h3>
    
    <p class="popup-tagline">"${result.tagline}"</p>
    
    <p class="popup-description">${result.description}</p>
    
    <div class="popup-divider"></div>
    
    <h4 class="popup-recommendations-title">SONGS YOU MIGHT LOVE:</h4>
    <ul class="popup-recommendations">
        ${result.recommendations.map(song => `<li>• ${song}</li>`).join('')}
    </ul>
    
    <div class="popup-divider"></div>
    
    <div class="popup-buttons">
        <button class="popup-btn popup-btn-restart" id="popup-restart">START OVER</button>
    </div>`;

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    document.getElementById('popup-close').addEventListener('click', closePopup);
    document.getElementById('popup-restart').addEventListener('click', restartSelection);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closePopup();
    });

    setTimeout(() => {
        overlay.classList.add('active');
    }, 10);
}

function closePopup() {
    const overlay = document.querySelector('.popup-overlay');
    if(overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.remove();
        }, 300);
    }
}

function restartSelection() {
    clearSelections();
    closePopup();
}

function getSelectedSongs() {
    return [...selectedSongs];
}

function clearSelections() {
    selectedSongs = [];
    updateSelectedCount();
    renderSelectedSongs();
}

function isSongSelected(albumId, songName) {
    return selectedSongs.some(
        s => s.albumId === albumId && s.songName === songName
    );
}