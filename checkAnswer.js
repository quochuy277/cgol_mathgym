function checkAnswer(answer) {
    if (dontCount) {
      countDown();
    }
    document.getElementById("option1").style.background = "red";
    document.getElementById("option2").style.background = "red";
    document.getElementById("option3").style.background = "red";
    Mathgame.correctAnswer.style.background = "green";
  
    if (timer > -1) {
      setTimeout(function () {
        Mathgame();
      }, 500);
    } else {
        document.getElementById("lost-msg").innerHTML = "Hết giờ";
        document.getElementById("xtra-msg").innerHTML =
          "Hãy thử lại nào.<br>Số điểm của bạn là " + score;
        document.getElementById("play-again-links").style.display = "block";
    }
  
    if (!gameOver) {
      if (answer === Mathgame.correctAnswer) {
        document.getElementById("emoji-show").innerHTML = "✔️";
        score += 3;
        timer += 3;
      } else {
        document.getElementById("emoji-show").innerHTML = "❌";
        score -= 3;
      }
    }
    document.getElementById("score-box").innerHTML = "<h2>Điểm: " + score + "</h2>";
  }