<template>
  <ContainerPage>
    <div id="app">
      <ApartmentsList :items="apartments" />
    </div>
  </ContainerPage>
</template>
<script>
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import ContainerPage from "./components/shared/ContainerPage.vue";
import apartments from "./components/apartment/apartment";
export default {
  name: "App",
  components: { ContainerPage, ApartmentsList },
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
