var playlist = { Chainsmokers: 'SongTitle' };

function updatePlaylist (playlist, artistName, songTitle) {
  
  Object.assign (playlist, { [artistName]: songTitle});
  
  return playlist;
}


function removeFromPlaylist (playlist, artistName, songTitle) {
  delete playlist[Chainsmokers];
  return playlist;
  
}