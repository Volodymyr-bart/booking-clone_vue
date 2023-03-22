<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <!-- <StandartButton @click="increment" :outlined="true">Click me</StandartButton> -->
    <!-- <DirectivesTest /> -->
    <StarRating :rating="4.5" />
  </div>
</template>

<script>
// import StandartButton from "./components/StandartButton.vue";
// import DirectivesTest from "./components/DirectivesTest.vue";
import StarRating from "./components/StarRating.vue";
export default {
  name: "App",
  components: {
    // StandartButton,
    // DirectivesTest,
    StarRating,
  },
  data() {
    return {
      amountOfClicks: 0,
    };
  },
  computed: {
    title() {
      return `Amount of clics ${this.amountOfClicks}`;
    },
  },
  methods: {
    increment() {
      this.amountOfClicks += 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
