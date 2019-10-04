var playlist = { Chainsmokers: 'Call You Mine' };

function updatePlaylist (playlist, artistName, songTitle) {
  
  Object.assign (playlist, { [Beyonce]: "Halo"});
  
  return playlist;
}


function removeFromPlaylist (playlist, artistName, songTitle) {
  delete playlist[artistName];
  return playlist;
  
}