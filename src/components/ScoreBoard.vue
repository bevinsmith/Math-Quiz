<template>
    <div class="scoreboard">
        <div class="section">Correct {{numCorrect}}</div>
        <div class="section">Number Of Questions {{numQuestions}}</div>
        <div class="section">Success Rate {{successRate}}</div>
        <transition name='fade' appear>
        <span v-if='showResult'>{{ message }}</span>
        </transition>
    </div>
 
</template>
<script>


export default {
    name: 'ScoreBoard',
    props:['numCorrect','numQuestions','successRate', 'showResult', 'message'],

    
}
</script>
<style>

    .fade-enter{
        opacity: 0;
    }

    .fade-enter-to{
        opacity: 1;
    }

    .fade-enter-active{
        transition: 0.6s ease-in;
    }

    .fade-leave{
        opacity: 1;
    }

    .fade-leave-to{
        opacity: 1;
    }

    .fade-leave-active{
        transition: 0.6s ease-out;
    }

    .scoreboard {
        margin-top: 1em;
        display: grid;
        font-size: 1.4em;
        border-radius: 10px;
        grid-template-columns: repeat(3, 1fr);
        gap: 1em;
        font-family: Arial, Helvetica, sans-serif;
        -webkit-box-shadow: 3px 3px 8px 2px hsla(0, 2%, 58%, 0.38); 
        box-shadow: 3px 3px 8px 2px hsla(0, 2%, 58%, 0.38); 
    }

 
  
    .section {
        padding: 2em;
        text-align: center;
        border-radius: 2rem;
        border: 1px solid silver;
-webkit-box-shadow: inset 3px 10px 17px 1px rgba(0,0,0,0.18); 
box-shadow: inset 3px 10px 17px 1px rgba(0,0,0,0.18);
    }

    span{
        grid-column: 1/span 3;
        text-align: center;
        font-size: 3rem;
    }


</style>