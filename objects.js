var playlist = {demons:'imagine dragons'}

function updatePlaylist(playlist,artistName,songTitle) {
  return Object.assign(playlist,{artistName:songTitle})
}
