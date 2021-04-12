class Mathgame {
  constructor() {
    this.qsn = null;
    this.number1 = this.randomNumber(10);
    this.number2 = this.randomNumber(10);
    this.number3 = this.randomNumber(10);
    this.radomOporator = this.randomNumber(5);
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
 
    if (this.radomOporator === 1) {
      this.qsn = this.number1 + "+" + this.number2;
      this.ans = this.number1 + this.number2;
    } else if (this.radomOporator === 2) {
      this.qsn = this.number1 + "-" + this.number2;
      this.ans = this.number1 - this.number2;
    } else if (this.radomOporator === 3) {
      this.qsn = this.number1 + "×" + this.number2;
      this.ans = this.number1 * this.number2;
    } else if (this.radomOporator === 4) {
      let number4 = this.number1 * this.number3;
      this.qsn = number4 + "÷" + this.number3;
      this.ans = number4 / this.number3;
    } else {
      this.x = this.number1;
      this.x_ans = this.x + this.number2;
      this.qsn = "X" + "+" + this.number2 + "=" + this.x_ans + "<br>X=?";
      this.ans = this.x;
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
    let radomOption = this.randomNumber(6);
    if (radomOption === 1) {
      this.makeOption(0, 1, -1);
      this.correctAnswer = document.getElementById("option1");
    } else if (radomOption === 2) {
      this.makeOption(0, -1, 1);
      this.correctAnswer = document.getElementById("option1");
    } else if (radomOption === 3) {
      this.makeOption(1, 0, -1);
      this.correctAnswer = document.getElementById("option2");
    } else if (radomOption === 4) {
      this.makeOption(-1, 0, 1);
      this.correctAnswer = document.getElementById("option2");
    } else if (radomOption === 5) {
      this.makeOption(1, -1, 0);
      this.correctAnswer = document.getElementById("option3");
    } else if (radomOption === 6) {
      this.makeOption(-1, 1, 0);
      this.correctAnswer = document.getElementById("option3");
    }
    // return this.correctAnswer;
  }

}



