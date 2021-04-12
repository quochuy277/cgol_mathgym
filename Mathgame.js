class Mathgame {
  constructor() {
    this.qsn = null;
    this.number1 = this.randomNumber(10);
    this.number2 = this.randomNumber(10);
    this.number3 = this.randomNumber(10);
    this.number1_100 = this.randomNumber(100);
    this.number2_100 = this.randomNumber(100);
    this.number3_100 = this.randomNumber(100);
    this.randomOporator = this.randomNumber(5);
    this.ans = null;
    this.x = null;
    this.x_ans = null;
    this.correctAnswer = null;
    // this.trueAns=false;
  }

  
  randomNumber(x) {
    return Math.floor(Math.random() * x + 1);
  }
  question() {
    if (score < 20) {
      if (this.randomOporator === 1) {
        this.qsn = this.number1 + "+" + this.number2;
        this.ans = this.number1 + this.number2;
      } else if (this.randomOporator === 2) {
        this.qsn = this.number1 + "-" + this.number2;
        this.ans = this.number1 - this.number2;
      } else if (this.randomOporator === 3) {
        this.qsn = this.number1 + "×" + this.number2;
        this.ans = this.number1 * this.number2;
      } else if (this.randomOporator === 4) {
        var number4 = this.number1 * this.number2;
        this.qsn = number4 + "÷" + this.number2;
        this.ans = number4 / this.number2;
      } else {
        this.x = this.number1;
        this.x_ans = this.x + this.number3;
        this.qsn = "X" + "+" + this.number3 + "=" + this.x_ans + "<br>X=?";
        this.ans = this.x;
      }
    } else if (score < 35) {
      if (this.randomOporator === 1) {
        this.qsn = this.number1 + "+" + this.number2 + "+" + this.number3;
        this.ans = this.number1 + this.number2 + this.number3;
      } else if (this.randomOporator === 2) {
        this.qsn = this.number1 + "-" + this.number2 + "-" + this.number3;
        this.ans = this.number1 - this.number2 - this.number3;
      } else if (this.randomOporator === 3) {
        this.qsn = this.number1 + "×" + this.number2 + "×" + this.number3;
        this.ans = this.number1 * this.number2 * this.number3;
      } else if (this.randomOporator === 4) {
        this.qsn = this.number1 + "²" + "+" + this.number2;
        this.ans = this.number1 ** 2 + this.number2;
      } else {
        this.x = this.number2_100;
        this.x_ans = this.x + this.number3_100;
        this.qsn = "X" + "+" + this.number3_100 + "=" + this.x_ans + "<br>X=?";
        this.ans = this.x;
      }
    } else if (score < 50) {
      if (this.randomOporator === 1) {
        this.qsn = this.number1_100 + "+" + this.number2_100 + "+" + this.number3_100;
        this.ans = this.number1_100 + this.number2_100 + this.number3_100;
      } else if (this.randomOporator === 2) {
        this.qsn = this.number1_100 + "-" + this.number2_100 + "+" + this.number3_100;
        this.ans = this.number1_100 - this.number2_100 + this.number3_100;
      } else if (this.randomOporator === 3) {
        this.qsn = this.number1_100 + "×" + this.number2;
        this.ans = this.number1_100 * this.number2;
      } else if (this.randomOporator === 4) {
        this.qsn = this.number3 + "³" + "-" + this.number2;
        this.ans = this.number3 ** 3 - this.number2;
      } else {
        this.x = this.number3;
        this.x_ans = this.x * this.number2;
        this.qsn = this.number2 + "x" + "=" + this.x_ans + "<br>X=?";
        this.ans = this.x;
      }
    } else if (score < 70) {
      if (this.randomOporator === 1) {
        this.qsn = this.number1_100 + "+" + this.number2 + "×" + this.number3;
        this.ans = this.number1_100 + this.number2 * this.number3;
      } else if (this.randomOporator === 2) {
        this.qsn = this.number1 + "²" + "+" + this.number2 + "°" + "+" + this.number3 + "³";
        this.ans = this.number1 ** 2 + this.number2 ** 0 + this.number3 ** 3;
      } else if (this.randomOporator === 3) {
        var number42 = this.number1_100 * this.number3 * this.number2;
        this.qsn = number42 + "÷" + this.number2;
        this.ans = number42 / this.number2;
      } else if (this.randomOporator === 4) {
        var number43 = this.number3 ** 2;
        this.qsn = "√" + number43 + "+" + this.number2;
        this.ans = number43 ** (1 / 2) + this.number2;
      } else {
        this.x = this.number2_100;
        this.x_ans = this.number3_100 - this.x;
        this.qsn = this.number3_100 + "-" + "X" + "=" + this.x_ans + "<br>X=?";
        this.ans = this.x;
      }
    } else {
      if (this.randomOporator === 1) {
        this.qsn = this.number1_100 + "-" + this.number2_100 + "×" + this.number3;
        this.ans = this.number1_100 - this.number2_100 * this.number3;
      } else if (this.randomOporator === 2) {
        this.qsn = this.number1 + "²" + "+" + this.number2 + "²" + "+" + this.number3 + "²";
        this.ans = this.number1 ** 2 + this.number2 ** 2 + this.number3 ** 2;
      } else if (this.randomOporator === 3) {
        var number44 = this.number1_100 * this.number3 * this.number2;
        this.qsn = number44 + "÷" + this.number2 + "+" + this.number3_100;
        this.ans = number44 / this.number2 + this.number3_100;
      } else if (this.randomOporator === 4) {
        var number45 = this.number1_100 ** 2;
        this.qsn = "√" + number45 + "+" + this.number3_100 + "+" + this.number2;
        this.ans = number45 ** (1 / 2) + this.number3_100 + this.number2;
      } else {
        this.x = this.number1;
        var number46 = this.x * this.number3;
        this.x_ans = this.number3;
        this.qsn = number46 + "÷" + "X" + "=" + this.x_ans + "<br>X=?";
        this.ans = this.x;
      }
    }

    document.getElementById("qsn").innerHTML = this.qsn;
    // return this.qsn;
  }

  makeOption(x, y, z) {
    document.getElementById("option1").innerHTML = this.ans + x;
    document.getElementById("option2").innerHTML = this.ans + y;
    document.getElementById("option3").innerHTML = this.ans + z;
  }
  getCorrectAnswer() {
    let randomOption = this.randomNumber(33);
    if (randomOption === 1) {
      this.makeOption(0, 1, -1);
      this.correctAnswer = document.getElementById("option1");
    } else if (randomOption === 2) {
      this.makeOption(0, -1, 1);
      this.correctAnswer = document.getElementById("option1");
    } else if (randomOption === 3) {
      this.makeOption(1, 0, -1);
      this.correctAnswer = document.getElementById("option2");
    } else if (randomOption === 4) {
      this.makeOption(-1, 0, 1);
      this.correctAnswer = document.getElementById("option2");
    } else if (randomOption === 5) {
      this.makeOption(1, -1, 0);
      this.correctAnswer = document.getElementById("option3");
    } else if (randomOption === 6) {
      this.makeOption(-1, 1, 0);
      this.correctAnswer = document.getElementById("option3");
    } else if (randomOption === 7) {
      this.makeOption(0, 1, 2);
      this.correctAnswer = document.getElementById("option1");
    } else if (randomOption === 8) {
      this.makeOption(0, 2, 1);
      this.correctAnswer = document.getElementById("option1");
    } else if (randomOption === 9) {
      this.makeOption(1, 0, 2);
      this.correctAnswer = document.getElementById("option2");
    } else if (randomOption === 10) {
      this.makeOption(2, 0, 1);
      this.correctAnswer = document.getElementById("option2");
    } else if (randomOption === 11) {
      this.makeOption(1, 2, 0);
      this.correctAnswer = document.getElementById("option3");
    } else if (randomOption === 12) {
      this.makeOption(2, 1, 0);
      this.correctAnswer = document.getElementById("option3");
    } else if (randomOption === 13) {
      this.makeOption(0, -1, -2);
      this.correctAnswer = document.getElementById("option1");
    } else if (randomOption === 14) {
      this.makeOption(0, -2, -1);
      this.correctAnswer = document.getElementById("option1");
    } else if (randomOption === 15) {
      this.makeOption(-1, 0, -2);
      this.correctAnswer = document.getElementById("option2");
    } else if (randomOption === 16) {
      this.makeOption(-2, 0, -1);
      this.correctAnswer = document.getElementById("option2");
    } else if (randomOption === 17) {
      this.makeOption(-1, -2, 0);
      this.correctAnswer = document.getElementById("option3");
    } else if (randomOption === 18) {
      this.makeOption(-2, -1, 0);
      this.correctAnswer = document.getElementById("option3");
    } else if (randomOption == 19) {
      this.makeOption(-3, 0, 3);
      this.correctAnswer = document.getElementById("option2");
    } else if (randomOption === 20) {
      this.makeOption(-3, 3, 0);
      this.correctAnswer = document.getElementById("option3");
    } else if (randomOption === 21) {
      this.makeOption(0, 3, 4);
      this.correctAnswer = document.getElementById("option1");
    } else if (randomOption === 22) {
      this.makeOption(0, 4, 3);
      this.correctAnswer = document.getElementById("option1");
    } else if (randomOption === 23) {
      this.makeOption(3, 0, 4);
      this.correctAnswer = document.getElementById("option2");
    } else if (randomOption === 24) {
      this.makeOption(4, 0, 3);
      this.correctAnswer = document.getElementById("option2");
    } else if (randomOption === 25) {
      this.makeOption(3, 4, 0);
      this.correctAnswer = document.getElementById("option3");
    } else if (randomOption === 26) {
      this.makeOption(4, 3, 0);
      this.correctAnswer = document.getElementById("option3");
    } else if (randomOption === 27) {
      this.makeOption(0, -3, -4);
      this.correctAnswer = document.getElementById("option1");
    } else if (randomOption === 28) {
      this.makeOption(0, -4, -3);
      this.correctAnswer = document.getElementById("option1");
    } else if (randomOption === 29) {
      this.makeOption(-3, 0, -4);
      this.correctAnswer = document.getElementById("option2");
    } else if (randomOption === 30) {
      this.makeOption(-4, 0, -3);
      this.correctAnswer = document.getElementById("option2");
    } else if (randomOption === 31) {
      this.makeOption(-3, -4, 0);
      this.correctAnswer = document.getElementById("option3");
    } else if (randomOption === 32) {
      this.makeOption(-4, -3, 0);
      this.correctAnswer = document.getElementById("option3");
    } else {
      this.makeOption(0, 5, -5);
      this.correctAnswer = document.getElementById("option1");
    }
  }

}



