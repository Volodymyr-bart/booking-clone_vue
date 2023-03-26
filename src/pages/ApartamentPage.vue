<template>
  <main class="apartment-page">
    <ContainerPage>
      <div class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <div class="apartment-page__additional-info">
          <ApartmentsOwner class="apartment-page__owner" :owner="apartment.owner" />
          <ReviewsSection :reviews="reviewsList" />
        </div>
      </div>
    </ContainerPage>
  </main>
</template>

<script>
import ContainerPage from "./../components/shared/ContainerPage.vue";
import apartments from "./../components/apartment/apartments";
import ApartmentsMainInfo from "./../components/apartment/ApartmentsMainInfo.vue";
import ApartmentsOwner from "./../components/apartment/ApartmentsOwner.vue";
import ReviewsSection from "./../components/reviews";
import reviewsList from "./../components/reviews/reviews.json";
// import { getApartmentById } from "./../services/apartments.service";

export default {
  name: "ApartamentPage",
  components: { ContainerPage, ApartmentsMainInfo, ApartmentsOwner, ReviewsSection },
  // data() {
  //   return {
  //     apartment :null
  //   }
  // },
  computed: {
    reviewsList() {
      return reviewsList;
    },
    apartment() {
      return apartments.find((apartment) => apartment.id === this.$route.params.id);
    },
  },
  //   async created() {
  //   try {
  //     const { id } = this.$route.params.id;
  //     const { data } = await getApartmentById(id);
  //     this.apartment = data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>
