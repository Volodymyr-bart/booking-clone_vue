<template>
  <main class="homepage">
    <ContainerPage>
      <ApartmentsFilterForm class="apartments-filter" @submit="filter" />
    </ContainerPage>
    <ContainerPage>
      <p v-if="!apartments.length">Нічого не знайдено</p>
      <ApartmentsList v-else :items="apartments">
        <template v-slot:apartment="{ apartment }">
          <ApartmentsItem
            :key="apartment._id"
            :id="apartment._id"
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
import ApartmentsFilterForm from "./../components/apartment/ApartmentsFilterForm";
import ContainerPage from "./../components/shared/ContainerPage";
import { getApartmentList } from "./../services/apartments.service";
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
      apartments: [],
      filters: {
        city: "",
        price: 0,
      },
    };
  },

  async created() {
    try {
      const { data } = await getApartmentList();
      this.apartments = data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
      if (city || price) {
        this.filteredApartments();
      }
    },
    filterByCityName(apartments) {
      if (this.filters.city === "All") return apartments;

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

    filteredApartments() {
      this.apartments = this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-filter {
  margin-bottom: 40px;
}
</style>
