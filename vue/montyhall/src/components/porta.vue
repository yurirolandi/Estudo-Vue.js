<template>

<div class="door-area">
    <div class="porta-moldura" :class="{ selected: selected && !open }">
        <gift v-if="open && hasgift" />
    </div>
    <div class="door" :class="{ open }"
     @click="selected = !selected">
        <div class="numero" :class="{ selected }">
            {{ number }}
        </div>
        <div class="macaneta" :class="{ selected }" @click.stop="open = true">

        </div>
    </div>
</div>
    
</template>

<script>
import gift from './gift'

export default {
    name: 'door',
    components: { gift },
    props: {
        number: {},
        hasgift: { type: Boolean }
    },
    data: function(){
        return{
            open: false,
            selected: false
        }
    }
}
</script>

<style>
:root {
    --porta-borda: 5px solid #9b411b;
    --selected-border: 5px solid #009432;
}

.door-area {
    position: relative;
    width: 200px;
    height: 310px;
    border-bottom: 10px solid #AAA;
    margin-bottom:  20px;
    font-size: 3em;
    display: flex;
    justify-content: center;    
}

.porta-moldura{
    position: absolute;
    height: 300px;
    width: 180px;
    border-left: var(--porta-borda);
    border-top: var(--porta-borda);
    border-right: var(--porta-borda);
    
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.door {
    position: absolute;
    top: 5px;
    height: 295px;
    width: 170px;
    background-color: chocolate; 

    display: flex;
    flex-direction: column;
    padding: 15px;
    align-items: center;

}

.door .macaneta {
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: #9b411b;
    align-self: flex-start;
    margin-top: 60px;
}

.porta-moldura.selected {
    border-left: var(--selected-border);
    border-top: var(--selected-border);
    border-right: var(--selected-border);
}

.door .numero.selected{
    color: #009432;
}   

.door .macaneta.selected {
    background-color: #009432;
}

.door.open {
    background-color: #0007;
}

.door.open .macaneta {
    display: none;
}

.door.open .numero {
    display: none;
}





</style>
