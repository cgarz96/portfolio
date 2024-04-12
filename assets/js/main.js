var player;
$(document).ready(function() {
$('#mode').click(function() {
    $('body').toggleClass('text-white bg-dark');
    $(this).toggleClass('fa-moon fa-sun')
  });
});
document.getElementById('fileInput').addEventListener('change', function(event) {
  const file = this.files[0];
  if (!file) return;
  player = document.getElementById('audioPlayer');
  player.src = URL.createObjectURL(file);
  player.play();
  $("#bienvenida").html(`<h3>Estás escuchando <marquee behavior="" direction="">${file.name}</marquee></h3>`)
  $("#btn-play").toggleClass('fa-play fa-pause')
});
const updateProgress = () =>{
  if (player.currentTime >0){
    const barra = document.getElementById('progress')
    porcentaje = (player.currentTime / player.duration) * 100
    barra.removeAttribute("style")
    barra.setAttribute("style", `width: ${porcentaje}%`)
    console.log((player.currentTime / player.duration) * 100)
    var duracionSegundos= player.duration.toFixed(0);
    dura=secondsToString(duracionSegundos);
    var actualSegundos = player.currentTime.toFixed(0)
    actual=secondsToString(actualSegundos);
    duracion= actual +' / '+ dura
    document.getElementById('timer').innerText=duracion 
  }
}
function secondsToString(seconds) {
  var hour="";
  if (seconds>3600){
    hour = Math.floor(seconds / 3600);
    hour = (hour < 10)? '0' + hour : hour;
    hour+=":"
  }
  var minute = Math.floor((seconds / 60) % 60);
  minute = (minute < 10)? '0' + minute : minute;
  var second = seconds % 60;
  second = (second < 10)? '0' + second : second;
  return hour  + minute + ':' + second;
}
function togglePlay() {
  $("#btn-play").toggleClass('fa-play fa-pause')
  if (player.paused){
    return player.play();
  } else {
    return player.pause();
  }
}
function vol(e) {
  return player.volume=e.value
}