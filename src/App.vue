<template>
  <div id="app">
    <score-board :numCorrect="numCorrect" :numQuestions="numQuestions" :successRate="successRate" :showResult="showResult" :message="message" />
 
    <math-question :firstNum="firstNumber" :userAnswer="answer" :secondNum="secondNumber" @reset="reset" @submitAnswer='checkAnswer' @nextquestion='generateQuestion'/> 

    <user-control :leftTick='leftTick' :rightTick="rightTick" @addToLeft='addToLeftOperandTotal' @addToRight='addToRightOperandTotal' @subtractFromLeft='subtractLeftOperandTotal' @subtractFromRight='subtractRightOperandTotal' />
  </div>
</template>

<script>
import ScoreBoard from './components/ScoreBoard.vue';
import MathQuestion from './components/MathQuestion.vue';
import UserControl from './components/UserControl.vue';


export default {
  components: { ScoreBoard, MathQuestion, UserControl },
  name: 'App',
  data: function() {
    return {
       numCorrect: 0,
       numQuestions: 0,
       successRate: 0,
       firstNumber: 0,
       secondNumber: 0,
       correctAnswer: 0,
       answer: null,
       showResult: false,
       message: '',
       messages: [],
       leftOperandTotal: [],
       rightOperandTotal: [],
       leftTick: 0,
       rightTick: 0,
     
    }
  },

  created(){ 
    this.generateQuestion();
  },

  mounted(){
        fetch("http://localhost:8081/api/results.json").then(response=> response.json()).then(data=> this.messages = data.messages);
  },
  
  methods: {
    reset(){
      this.showResult = false;
    },
    
    randomInt(max){
        let num = Number.parseInt(max);
        return Math.floor(Math.random()*(num-1) + 0);
    },


    checkAnswer(ans) 
    { 
        this.answer = ans;
        this.correctAnswer = this.firstNumber + this.secondNumber;
        this.showResult = true;

        if (this.correctAnswer == this.answer)
        {
         this.message = this.messages[this.randomInt(this.messages.length)].message;
         ++this.numCorrect;
        }
        else
        { 
          this.message = "Almost, try again"; 
        }
    },
    
    generateQuestion () {
      this.firstNumber = this.randomInt(10);
      this.secondNumber = this.randomInt(10);
      this.leftTick = 0;
      this.rightTick = 0;
      this.answer = null;
      this.message = '';
      this.showResult = false;
    },
 
    addToLeftOperandTotal(){
      if(this.leftTick < 10)
        this.leftTick++;
    },

    addToRightOperandTotal(){
      if(this.rightTick < 10)
        this.rightTick++;
    },

    subtractLeftOperandTotal(){
        if( this.leftTick > 0 )
          this.leftTick--;
    },

    subtractRightOperandTotal(){
        if( this.rightTick > 0 )
          this.rightTick--;
    },
    

    updateScoreBoard () {

    }
  }
}
</script>

<style>
  *{
    margin: 0.75rem;
  }

  body{
    min-width: 878px;
  }

  :root{
    --mathquizcolorBtn100: hsl(120, 54%, 60%);
    --mathquizcolorBtn200: hsl(120, 54%, 40%);
    --gameBtn: 1px solid lightgray;
  }


</style>
