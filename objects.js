var playlist = { artistName: 'SongTitle' };

function updatePlaylist (playlist, artistName, songTitle) {
  
  Object.assign ({}, playlist, {artistName: songTitle});
  
  return playlist;
}

