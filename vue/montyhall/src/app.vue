<template>
  <div class="app">
    <h1>Monty Hall</h1>
    <div class="form">
      <div v-if="!started">
        <label for="portsAmount">Quantas portas?</label>
        <input type="text" id="portsAmount" size="3" v-model.number="portsAmount">
      </div>


      <div v-if="!started">
        <label for="selectedPort">Qual a porta Premiada?</label>

        <input type="text" id="selectedPort" size="3" v-model.number="selectedPort">
      </div>

      <button v-if="!started" @click="started = true">Iniciar</button>


      <button v-if="started" @click="started = false">Reiniciar</button>


      <div class="doors" v-if="started">
        <div v-for="i in portsAmount" :key="i">
          <porta :hasgift="i === selectedPort" :number="i"/>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import porta from "./components/porta";
export default {
  name: "app",
  components: { porta },
  data: function() {
    return {
      started: false,
      portsAmout: 3,
      selectedPort: null
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  background: #9b59b6;
  color: #fff;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app h1 {
  border: 1 px solid #000;
  background-color: #0004;
  padding: 20px;
  margin-bottom: 60px;
}

.doors {
    display: flex;
    flex-direction: initial;
    align-self: stretch;
    flex-wrap: wrap;
    justify-content: space-between;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.form,
.form input,
.form button {
  margin-bottom: 10px;
  font-size: 1.2em;
}

.form label{
    padding: 10px;
    font-size: 1.5em;
}

.door-area {
  align-self: stretch;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
