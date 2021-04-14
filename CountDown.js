var timer = 30;
function countDown(){

let downloadTimer = setInterval(function () {
  // timer--;
  // document.getElementById("time-box").innerHTML =
  //   "<h2>Thời gian: " + timer + "</h2>";
  if (timer > 0) {
    timer--;
    document.getElementById("time-box").innerHTML =
      "<h2>Thời gian: " + timer + "</h2>";
    dontCount = false;
    if (timer < 4) {
      document.getElementById("time-box").style.color = "#c90000";
    } else if (timer < 10) {
      document.getElementById("time-box").style.color = "#e9de00";
    } else if (timer < 20) {
      document.getElementById("time-box").style.color = "#03ae02";
    } else {
      document.getElementById("time-box").style.color = "black";
    }
  } else {
    document.getElementById("lost-msg").innerHTML = "Hết giờ";
    document.getElementById("xtra-msg").innerHTML =
      "Hãy thử lại nào.<br>Số điểm của bạn là " + score;
    document.getElementById("play-again").style.display = "block";
    clearInterval(downloadTimer);
    gameOver=true;
  }
}, 1000);
}

