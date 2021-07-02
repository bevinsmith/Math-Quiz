<template>
    <div>

        <div class="container">
            <div class="scratchpad">
                <div class="countArea">
                    <span class="dot" v-for='n in leftTick' :key="n" />

                </div>
                <div class="calcControls">
                    <input type="button" class="btn operandBtn" value="+" @click="$emit('addToLeft')" />
                    <input type="button" class="btn operandBtn" value="-" @click="$emit('subtractFromLeft')" />
                    <span>{{ leftTick }}</span>
                </div>
            </div>
            <div class="scratchpad">
                  <div class="countArea">
        
                        <span class="dot" v-for='n in rightTick' :key="n" />
                    
                </div>
                <div class="calcControls">
                    <input type="button" class="btn operandBtn"  value="+" @click="$emit('addToRight')" />
                    <input type="button" class="btn operandBtn" value="-" @click="$emit('subtractFromRight')"/>
                    <span>{{ rightTick }}</span>
                </div>
            </div>
         
        </div>
       
    </div>
    
</template>
<script>


export default {
   name:'UserControl',
   props:['leftTick','rightTick']

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
        transition: 0.4s ease-in;
    }

    .fade-leave{
        opacity: 1;
    }

    .fade-leave-to{
        opacity: 0;
    }

    .fade-leave-active{
        transition: 0.4s ease-out;
    }

.container { 
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    gap: 1em;
    margin-top: 2em;
}

.dot {
  height: 22px;
  width: 22px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}


.countArea{
    margin: auto;
    border: 1px solid lightblue;
    height: 5rem;
    border-radius: 25px;
    padding-bottom: 1em;
    -webkit-box-shadow: 0px 5px 6px -4px #000000; 
    box-shadow: 0px 5px 6px -4px #000000;

}

.calcControls{
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.calcControls > * {
    flex-basis: 100%;
}

.scratchpad {
    border: 1px solid #000;
    border-radius: 25px;
    width: 300px;
    padding: 1em;
}

.btn{
    width: 180px;
    height: 50px;
    border-radius: 20px;
    border: var(--gameBtn);
    background-color: var(--mathquizcolorBtn100);
    cursor: pointer;
    transition: 0.3s ease-in;

}

.operandBtn{
    width: 75px;
    font-size:2rem;
    border: var(--gameBtn);
}

.btn:hover{
    background-color: var(--mathquizcolorBtn200);
}


</style>
