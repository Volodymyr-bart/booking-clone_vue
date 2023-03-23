<template>
  <div class="app">
    <h2>{{ text }}</h2>
    <CustomInput v-model="text" />
    <CustomSelect :items="['name', 'label', 'salary']" />
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
import CustomInput from "./components/shared/CustomInput.vue";
import CustomSelect from "./components/shared/CustomSelect.vue";
import apartments from "./components/apartment/apartment";
export default {
  name: "App",
  components: { CustomInput, CustomSelect, ApartmentsList, ApartmentsItem },
  data() {
    return {
      text: "",
      apartments,
    };
  },
  methods: {
    handleItemClick() {
      console.log("Item click");
    },
  },
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
