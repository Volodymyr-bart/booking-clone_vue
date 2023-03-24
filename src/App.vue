<template>
  <div class="app">
    <h2>{{ text }}</h2>
    <ContainerPage>
      <ApartmentsFilterForm class="apartments-filter" @submit="handleItemClick" />
    </ContainerPage>
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
import ApartmentsFilterForm from "./components/apartment/ApartmentsFilterForm.vue";
import apartments from "./components/apartment/apartment";
import ContainerPage from "./components/shared/ContainerPage.vue";
export default {
  name: "App",
  components: { ApartmentsList, ApartmentsItem, ContainerPage, ApartmentsFilterForm },
  data() {
    return {
      text: "",
      apartments,
      filters: {
        city: "",
        price: 0,
      },
    };
  },

  computed: {
    filtredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  methods: {
    handleItemClick({ city, price }) {
      this.filters.city === city;
      this.filters.price === price;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;
      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;
      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
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
