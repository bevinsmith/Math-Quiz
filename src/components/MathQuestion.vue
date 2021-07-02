<template>
 
     
        <div class="questionContainer">
                <h2 id='fnum' class="item"> {{ firstNum }}</h2>
                <h2 class="item">+</h2>
                <h2 id='snum' class="item">{{ secondNum }}</h2>
                <h2 class="item">=</h2>
                <input type="text" id="useranswer" @change="$emit('reset')"  /> 
                <input type="button" class="btn" value="Submit Answer" @click="submit()" />
                <input type="button" class="btn" value="Next Question !" @click="next()" />

                <v-tour name='TestTour' :steps='steps' :options="{ highlight:true }"></v-tour>
        </div>

     
</template>

<script>
    export default  {
        props: ['firstNum','secondNum','userAnswer','leftTick','rightTick','rightOperandTotal'],
        name: 'MathQuestion',
        data: function()
        {
           return {
               
                   userResponse: null,    
                   steps:[
                    {
                        target:'#fnum',
                        content: 'Testing'
                    },
                    {
                        target: '#snum',
                        content: 'Testing 2'
                    }
                   ]       
           } 
           
       },
       mounted(){
           this.$tours['TestTour'].start();
       },

       methods: {
           submit(){
               this.userResponse = document.getElementById('useranswer').value;   
               this.$emit('submitAnswer', this.userResponse );
           },

           next(){
               let questionBox = document.querySelector('#useranswer');
               questionBox.value = null;
               this.$emit('nextquestion');
           }
       },
    

    }
</script>
<style>
    .questionContainer {
        display: grid;
        grid-auto-flow: column;
        margin-top: 3em;
    }

    h2 {
        font-size: 3em;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
    
    }

   
    input[type=text]{
        border: 1px solid lightgray;
        border-radius: 0.3em;
        width: 100px;
        font-size: 3rem;
        font-weight: bold;
        padding: 4px;
    }

  

   
</style>