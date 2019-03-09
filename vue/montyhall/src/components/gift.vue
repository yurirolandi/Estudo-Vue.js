<template>
    <div class="gift">
        <div class="gift-fita-1"></div>
        <div class="gift-fita-2"></div>
        <div class="gift-tampa"></div>
        <div class="gift-corpo"></div>
    </div>
</template>

<script>
export default {
    name: 'gift'
}
</script>

<style>

.gift {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
}

.gift-tampa{
    width: 100px;
    height: 25px;
    background-color: #2ecc71;
}

.gift-corpo {
    width: 90px;
    height: 60px;
    background-color: #27ae60;    
}

.gift-fita-1{
    position: absolute;
    width: 15px;
    height: 85px;
    background-color: #c0392b;
}

.gift-fita-2{
    position: absolute;
    top: 40px;
    width: 90px;
    height: 15px;
    background-color: #c0392b;
}



</style>
