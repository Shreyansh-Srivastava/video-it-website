function myFunction() {
    var video = document.getElementById("bgvid");
    var btn = document.getElementById("pause");
    
      if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
      } 
      else {
        video.pause();
        btn.innerHTML = "Play";
      }
}
function myFunction1() {
    window.location.href = "lab4.html";
}
function myFunction2() {
    window.location.href = "lab4.html";
}
