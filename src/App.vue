<template>
  <div class="app">
    <ApartmentsList :items="apartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :descr="apartment.descr"
          :rating="apartment.rating"
          :price="apartment.price"
          :imgSrc="apartment.imgUrl" />
      </template>
    </ApartmentsList>
  </div>
</template>
<script>
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import ApartmentsItem from "./components/apartment/ApatmentsItem.vue";

import apartments from "./components/apartment/apartment";
export default {
  name: "App",
  components: { ApartmentsList, ApartmentsItem },
  data() {
    return {
      apartments,
    };
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
