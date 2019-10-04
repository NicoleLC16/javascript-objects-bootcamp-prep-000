var playlist = { artistName: 'SongTitle' };

function updatePlaylist (playlist, artistName, songTitle) {
  
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

