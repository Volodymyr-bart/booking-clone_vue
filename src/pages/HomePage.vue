<template>
  <main class="homepage">
    <ContainerPage>
      <ApartmentsFilterForm class="apartments-filter" @submit="filter" />
    </ContainerPage>
    <ContainerPage>
      <p v-if="!filteredApartments.length">Ничего не найдено</p>
      <ApartmentsList v-else :items="filteredApartments">
        <template v-slot:apartment="{ apartment }">
          <ApartmentsItem
            :key="apartment.id"
            :id="apartment.id"
            :descr="apartment.descr"
            :rating="apartment.rating"
            :imgSrc="apartment.imgUrl"
            :price="apartment.price" />
        </template>
      </ApartmentsList>
    </ContainerPage>
  </main>
</template>

<script>
import ApartmentsList from "./../components/apartment/ApartmentsList.vue";
import ApartmentsItem from "./../components/apartment/ApatmentsItem.vue";
import apartments from "./../components/apartment/apartments";
import ApartmentsFilterForm from "./../components/apartment/ApartmentsFilterForm";
import ContainerPage from "./../components/shared/ContainerPage";
// import { getApartmentList } from "./../services/apartments.service";
export default {
  name: "HomePage",
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
    ContainerPage,
  },
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
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  async created() {
    try {
      // const { data } = await getApartmentList();
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
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

<style lang="scss" scoped>
.apartments-filter {
  margin-bottom: 40px;
}
</style>
